/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.com/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
import { useBlockProps, InspectorControls, InnerBlocks, useSetting, BlockControls, BlockAlignmentControl } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.com/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
import { PanelBody, Button, Popover, ColorPalette } from '@wordpress/components';
import { useState, useRef, useEffect } from 'react';
import SpacingControlPanel from './SpacingControlPanel';
import ColorPanel from './ColorPanel';
import AlignmentPanel from './AlignmentPanel';
import TypographyPanel from './TypographyPanel';

// Helper to convert CSS string to object for editor style prop
function cssStringToObject(cssString) {
    const styleObj = {};
    if (!cssString || typeof cssString !== 'string') return styleObj;
    cssString.split(';').forEach(rule => {
        const [property, value] = rule.split(':').map(s => s && s.trim());
        if (property && value) {
            // Convert kebab-case to camelCase
            const camelProp = property.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            styleObj[camelProp] = value;
        }
    });
    return styleObj;
}

const SIDES = ['Top', 'Right', 'Bottom', 'Left'];

// Utility to fetch spacing presets from theme.json, with 'Default' at the top
function getSpacingPresets() {
  const spacingSizes = useSetting('spacing.spacingSizes') || [];
  return [
    { slug: '', name: 'Default (none)', value: '' },
    ...spacingSizes.map((preset) => ({
      slug: preset.slug,
      name: preset.name,
      value: preset.size,
    })),
  ];
}

// Utility to fetch color palette from theme.json
function getColorPalette() {
  const palette = useSetting('color.palette') || [];
  return palette.map((c) => ({
    color: c.color,
    name: c.name,
    slug: c.slug,
  }));
}

export default function Edit( { attributes, setAttributes, clientId } ) {
    const {
        label = '',
        className = '',
        align = 'none',
    } = attributes || {};

    // More robust empty check
    const block = wp.data.select( 'core/block-editor' ).getBlock( clientId );
    const showEmptyStyles = block && Array.isArray(block.innerBlocks) && block.innerBlocks.length === 0 && !className;

    const blockProps = useBlockProps({
        className: className + (showEmptyStyles ? ' is-empty' : ''),
    });

    return (
        <>
            <InspectorControls>
				<PanelBody title="Typography" initialOpen={true}>
                <TypographyPanel attributes={attributes} setAttributes={setAttributes} />
                </PanelBody>
                <ColorPanel attributes={attributes} setAttributes={setAttributes} />
                <PanelBody title="Border" initialOpen={true}>
                  <SpacingControlPanel
                    label="Border"
                    attributePrefix="borderWidth"
                    colorPrefix="borderColor"
                    attributes={attributes}
                    setAttributes={setAttributes}
                    showLabel={true}
                  />
                </PanelBody>
                <PanelBody title="Spacing" initialOpen={false}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <SpacingControlPanel
                      label="Margin"
                      attributePrefix="margin"
                      colorPrefix={undefined}
                      attributes={attributes}
                      setAttributes={setAttributes}
                      step={1}
                      unit="px"
                    />
                    <SpacingControlPanel
                      label="Padding"
                      attributePrefix="padding"
                      colorPrefix={undefined}
                      attributes={attributes}
                      setAttributes={setAttributes}
                      step={1}
                      unit="px"
                    />
                  </div>
                </PanelBody>
            </InspectorControls>

            <BlockControls>
                <BlockAlignmentControl
                    value={attributes.align}
                    onChange={align => setAttributes({ align })}
                    controls={['wide', 'full']}
                />
            </BlockControls>

            <div { ...blockProps }> 
                <InnerBlocks />
            </div>
             
        </>
    );
}
