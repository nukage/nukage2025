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
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';

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
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
import { PanelBody, TextControl, SelectControl, RangeControl } from '@wordpress/components';
import { useState } from 'react';

export default function Edit( { attributes, setAttributes, clientId } ) {
	const {
		label = '',
		backgroundColor,
		textColor,
		minHeight = '',
		layout = {},
		className = '',
	} = attributes || {};

	// More robust empty check
	const block = wp.data.select( 'core/block-editor' ).getBlock( clientId );
	const showEmptyStyles = block && Array.isArray(block.innerBlocks) && block.innerBlocks.length === 0 && !className && !backgroundColor;
	const blockProps = useBlockProps({
		style: { backgroundColor, color: textColor, minHeight: minHeight ? `${minHeight}px` : undefined },
		className: showEmptyStyles ? 'is-empty' : undefined
	});

	return (
		<>
			<InspectorControls>
				{/* Color Panel */}
				{/* <PanelColorSettings
					title={ __( 'Color settings', 'tw-group' ) }
					initialOpen={ false }
					colorSettings={ [
						{
							value: backgroundColor,
							onChange: ( value ) => setAttributes( { backgroundColor: value } ),
							label: __( 'Background color', 'tw-group' ),
						},
						{
							value: textColor,
							onChange: ( value ) => setAttributes( { textColor: value } ),
							label: __( 'Text color', 'tw-group' ),
						},
					] }
				/> */}

				{/* Dimensions Panel */}
				{/* <PanelBody title={ __( 'Dimensions', 'tw-group' ) } initialOpen={ false }>
					<TextControl
						label={ __( 'Minimum Height (px)', 'tw-group' ) }
						value={ minHeight }
						onChange={ ( value ) => setAttributes( { minHeight: value } ) }
						type="number"
					/>
				</PanelBody> */}

				{/* Advanced Panel */}
				{/* <PanelBody title={ __( 'Advanced', 'tw-group' ) } initialOpen={ false }>
					<TextControl
						label={ __( 'HTML Anchor', 'tw-group' ) }
						value={ attributes.anchor || '' }
						onChange={ ( value ) => setAttributes( { anchor: value } ) }
					/>
					<TextControl
						label={ __( 'Additional CSS Class(es)', 'tw-group' ) }
						value={ attributes.className || '' }
						onChange={ ( value ) => setAttributes( { className: value } ) }
					/>
				</PanelBody> */}

			</InspectorControls>

			<div { ...blockProps }>
				<InnerBlocks />
			</div>
		</>
	);
}
