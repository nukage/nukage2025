/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import metadata from './block.json';
import styleBuilder from './styleBuilder';
import gutenbergToStyleBlocks from './gutenbergToStyleBlocks';

// Custom SVG icon as a React element (matches core/group)
const customGroupIcon = (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 4h-7c-1.1 0-2 .9-2 2v3H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-3h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h3V13c0 1.1.9 2 2 2h2.5v3zm0-4.5H11c-.3 0-.5-.2-.5-.5v-2.5H13c.3 0 .5.2.5.5v2.5zm5-.5c0 .3-.2.5-.5.5h-3V11c0-1.1-.9-2-2-2h-2.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7z"></path>
    </svg>
);

// Add block transforms from core/group
const transforms = {
    from: [
        {
            type: 'block',
            blocks: ['core/group'],
            transform: ( attributes, innerBlocks ) => [
                wp.blocks.createBlock(
                    metadata.name,
                    { ...attributes },
                    innerBlocks
                )
            ],
        },
    ],
    to: [
        {
            type: 'block',
            blocks: ['core/group'],
            transform: ( attributes, innerBlocks ) => [
                wp.blocks.createBlock(
                    'core/group',
                    { ...attributes },
                    innerBlocks
                )
            ],
        },
    ],
};

// Helper to convert CSS string to object for style prop
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

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
    ...metadata,
    icon: customGroupIcon,
    edit: Edit,
    save: ( { attributes } ) => {
        // Map Gutenberg attributes to style blocks
        const styleBlocks = gutenbergToStyleBlocks(attributes);
        // Generate Tailwind classes and styles
        const { classes, style, attributes: extraAttrs } = styleBuilder(styleBlocks);
        const { lineHeight, letterSpacing } = attributes;

        return (
            <div
                {...wp.blockEditor.useBlockProps.save({
                    // className: classes,
                    // style: cssStringToObject(style), // convert string to object for save
                    ...extraAttrs,
                    // ...(lineHeight ? { 'data-line-height': lineHeight } : {}),
                    // ...(letterSpacing ? { 'data-letter-spacing': letterSpacing } : {}),
                })}
            >
                <wp.blockEditor.InnerBlocks.Content />
            </div>
        );
    },
    transforms,
} );
