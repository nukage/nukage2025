// Converts standard Gutenberg block attributes into style blocks for styleBuilder.js

import { themeSpacingMap } from './themeSpacingMap';

// Dynamic mapping: parse theme.json CSS variable slugs to Tailwind classes
function mapSpacingToTailwind(side, value) {
    // Match pattern: var(--wp--preset--spacing--SLUG)
    const match = value && value.match(/^var\(--wp--preset--spacing--([a-zA-Z0-9_-]+)\)$/);
    if (match) {
        const slug = match[1];
        // Map side to Tailwind shorthand
        const sideMap = { top: 't', bottom: 'b', left: 'l', right: 'r', block: 'y', inline: 'x', all: '' };
        const tailwindSide = sideMap[side] || '';
        // Use 'p' for padding, 'm' for margin (side[0])
        return `${side[0]}${tailwindSide}-${slug}`;
    }
    // If value is a custom value (e.g., 32px), use bracket notation
    if (value && typeof value === 'string' && value.match(/^[0-9.]+(px|rem|em|%)$/)) {
        const sideMap = { top: 't', bottom: 'b', left: 'l', right: 'r', block: 'y', inline: 'x', all: '' };
        const tailwindSide = sideMap[side] || '';
        return `${side[0]}${tailwindSide}-[${value}]`;
    }
    return '';
}

export default function gutenbergToStyleBlocks(attributes = {}) {
    const styleBlocks = [];

    // Colors
    if (attributes.backgroundColor || attributes.textColor) {
        styleBlocks.push({
            acf_fc_layout: 'colors',
            background_color: attributes.backgroundColor ? 'custom' : 'default',
            background_custom: attributes.backgroundColor || undefined,
            text_color: attributes.textColor ? 'custom' : 'default',
            text_custom: attributes.textColor || undefined,
        });
    }

    // Typography
    if (attributes.fontSize || attributes.fontWeight || attributes.fontFamily || attributes.lineHeight || attributes.fontStyle || attributes.textTransform) {
        styleBlocks.push({
            acf_fc_layout: 'typography',
            font_size: attributes.fontSize || undefined,
            font_weight: attributes.fontWeight || undefined,
            font_family: attributes.fontFamily || undefined,
            line_height: attributes.lineHeight || undefined,
            font_case: attributes.textTransform || undefined,
        });
    }

    // Spacing (Padding/Margin)
    if (attributes.style && attributes.style.spacing) {
        const spacing = attributes.style.spacing;
        // Padding
        if (spacing.padding) {
            const padding = spacing.padding;
            const paddingClasses = Object.entries(padding).map(([side, value]) => mapSpacingToTailwind(side, value)).join(' ');
            styleBlocks.push({
                acf_fc_layout: 'class_list',
                class_list: paddingClasses,
            });
            // For custom values, also output style
            Object.entries(padding).forEach(([side, value]) => {
                if (!value.match(/^var\(--wp--preset--spacing--([a-zA-Z0-9_-]+)\)$/) && value) {
                    styleBlocks.push({
                        acf_fc_layout: 'spacing',
                        spacing_type: 'Padding',
                        spacing_side: [side],
                        spacing_options: 'custom',
                        spacing_custom: value,
                    });
                }
            });
        }
        // Margin
        if (spacing.margin) {
            const margin = spacing.margin;
            const marginClasses = Object.entries(margin).map(([side, value]) => mapSpacingToTailwind(side, value)).join(' ');
            styleBlocks.push({
                acf_fc_layout: 'class_list',
                class_list: marginClasses,
            });
            Object.entries(margin).forEach(([side, value]) => {
                if (!value.match(/^var\(--wp--preset--spacing--([a-zA-Z0-9_-]+)\)$/) && value) {
                    styleBlocks.push({
                        acf_fc_layout: 'spacing',
                        spacing_type: 'Margin',
                        spacing_side: [side],
                        spacing_options: 'custom',
                        spacing_custom: value,
                    });
                }
            });
        }
    }

    // Min/Max/Width/Height
    if (attributes.minHeight || attributes.minWidth || attributes.maxHeight || attributes.maxWidth || attributes.width || attributes.height) {
        styleBlocks.push({
            acf_fc_layout: 'size',
            w: attributes.width || undefined,
            h: attributes.height || undefined,
            'min-w': attributes.minWidth || undefined,
            'min-h': attributes.minHeight || undefined,
            'max-w': attributes.maxWidth || undefined,
            'max-h': attributes.maxHeight || undefined,
        });
    }

    // Display
    if (attributes.display) {
        styleBlocks.push({
            acf_fc_layout: 'display',
            display: attributes.display,
        });
    }

    // Border, shadow, etc. can be added similarly as needed.

    return styleBlocks;
}
