// Direct translation of PHP style_builder to JS
// Accepts an array of style blocks and returns { classes, style, attributes }

export default function styleBuilder(styleBlocks = []) {
    let builderClasses = '';
    let builderWpClasses = '';
    let builderStyle = '';
    let attributes = {};

    for (const styleBlock of styleBlocks) {
        if (styleBlock.acf_fc_layout === 'class_list') {
            if (styleBlock.extract === 'No') {
                builderWpClasses += ' ' + (styleBlock.class_list || '') + ' ';
            } else {
                builderClasses += ' ' + (styleBlock.class_list || '') + ' ';
            }
        } else if (styleBlock.acf_fc_layout === 'spacing') {
            let spacingSides = styleBlock.spacing_side ? [...styleBlock.spacing_side] : ['all'];
            if (Array.isArray(spacingSides)) {
                if (spacingSides.includes('t') && spacingSides.includes('b')) {
                    spacingSides = spacingSides.filter(s => s !== 't' && s !== 'b');
                    spacingSides.push('y');
                }
                if (spacingSides.includes('l') && spacingSides.includes('r')) {
                    spacingSides = spacingSides.filter(s => s !== 'l' && s !== 'r');
                    spacingSides.push('x');
                }
                if (spacingSides.includes('x') && spacingSides.includes('y')) {
                    spacingSides = spacingSides.filter(s => s !== 'x' && s !== 'y');
                    spacingSides.push('all');
                }
                if (!spacingSides.length) spacingSides.push('all');
            } else {
                spacingSides = ['all'];
            }
            let spacingClass = {};
            if (styleBlock.spacing_type === 'Padding') {
                spacingClass.type = 'p';
            } else if (styleBlock.spacing_type === 'Margin') {
                spacingClass.type = 'm';
            } else {
                continue;
            }
            if (styleBlock.spacing_options && styleBlock.spacing_options === 'custom') {
                if (styleBlock.spacing_custom) {
                    spacingClass.size = styleBlock.spacing_custom;
                    spacingClass.custom = true;
                } else {
                    continue;
                }
            } else if (typeof styleBlock.spacing_options !== 'undefined') {
                spacingClass.size = styleBlock.spacing_options;
                spacingClass.custom = false;
            }
            let classNames = '';
            let styles = '';
            for (const spacingSide of spacingSides) {
                classNames += spacingClass.type;
                if (spacingSide === 'all') {
                    classNames += '-';
                } else {
                    classNames += spacingSide + '-';
                }
                classNames += spacingClass.custom ? '[' : '';
                classNames += spacingClass.size || '';
                classNames += spacingClass.custom ? ']' : '';
                classNames += ' ';
            }
            if (spacingClass.custom) {
                // Fix: Output correct CSS property and value for spacing
                const map = { t: 'top', b: 'bottom', l: 'left', r: 'right', all: '' };
                const styleSides = styleBlock.spacing_side ? styleBlock.spacing_side : ['t', 'b', 'l', 'r'];
                for (const styleSide of styleSides) {
                    let cssProp = (styleBlock.spacing_type || '').toLowerCase();
                    if (map[styleSide] && map[styleSide] !== '') {
                        cssProp += '-' + map[styleSide];
                    }
                    // Ensure value is a valid CSS variable string
                    let cssValue = styleBlock.spacing_custom;
                    if (cssValue) {
                        // If already a valid CSS variable, use as is
                        if (/^var\(--wp--preset--spacing--[a-zA-Z0-9_-]+\)$/.test(cssValue)) {
                            // do nothing, value is already correct
                        } else {
                            // Extract just the slug if possible (e.g., from 'var:preset|spacing|60' get '60')
                            const match = cssValue.match(/([a-zA-Z0-9_-]+)$/);
                            const slug = match ? match[1] : cssValue.replace(/[^a-zA-Z0-9_-]/g, '');
                            cssValue = `var(--wp--preset--spacing--${slug})`;
                        }
                    }
                    if (cssProp && cssValue) {
                        styles += `${cssProp}: ${cssValue}; `;
                    }
                }
            }
            classNames = classNames.trim();
            builderClasses += classNames + ' ';
            builderStyle += styles + ' ';
        } else if (styleBlock.acf_fc_layout === 'colors') {
            if (styleBlock.text_color === 'default') {
                // Do nothing
            } else if (styleBlock.text_color === 'custom') {
                if (styleBlock.text_custom) {
                    builderStyle += 'color: ' + styleBlock.text_custom + '; ';
                    builderClasses += 'text-[' + styleBlock.text_custom + '] ';
                }
            } else if (styleBlock.text_color) {
                builderClasses += 'text-' + styleBlock.text_color + ' ';
            }
            if (styleBlock.background_color === 'default') {
                // Do nothing
            } else if (styleBlock.background_color === 'custom') {
                if (styleBlock.background_custom) {
                    builderStyle += 'background-color: ' + styleBlock.background_custom + '; ';
                    builderClasses += 'bg-[' + styleBlock.background_custom + '] ';
                }
            } else if (styleBlock.background_color) {
                builderClasses += 'bg-' + styleBlock.background_color + ' ';
            }
        } else if (styleBlock.acf_fc_layout === 'typography') {
            if (styleBlock.font_family) {
                if (styleBlock.font_family !== 'default') {
                    builderClasses += 'font-' + styleBlock.font_family + ' ';
                }
            }
            if (styleBlock.font_size) {
                if (styleBlock.font_size !== 'default') {
                    builderClasses += 'text-' + styleBlock.font_size + ' ';
                }
            }
            if (styleBlock.font_weight) {
                if (styleBlock.font_weight !== 'default') {
                    builderClasses += 'font-' + styleBlock.font_weight + ' ';
                }
            }
            if (styleBlock.font_case) {
                if (styleBlock.font_case !== 'default') {
                    builderClasses += styleBlock.font_case + ' ';
                }
            }
            if (styleBlock.line_height) {
                if (styleBlock.line_height !== 'default') {
                    builderClasses += 'leading-' + styleBlock.line_height + ' ';
                }
            }
        } else if (styleBlock.acf_fc_layout === 'display') {
            if (styleBlock.display) {
                builderClasses += styleBlock.display + ' ';
            }
        } else if (styleBlock.acf_fc_layout === 'size') {
            if (styleBlock.w) {
                builderClasses += 'w-[' + styleBlock.w + '] ';
                builderStyle += 'width: ' + styleBlock.w + '; ';
            }
            if (styleBlock.h) {
                builderClasses += 'h-[' + styleBlock.h + '] ';
                builderStyle += 'height: ' + styleBlock.h + '; ';
            }
            if (styleBlock['min-w']) {
                builderClasses += 'min-w-[' + styleBlock['min-w'] + '] ';
                builderStyle += 'min-width: ' + styleBlock['min-w'] + '; ';
            }
            if (styleBlock['min-h']) {
                builderClasses += 'min-h-[' + styleBlock['min-h'] + '] ';
                builderStyle += 'min-height: ' + styleBlock['min-h'] + '; ';
            }
            if (styleBlock['max-w']) {
                builderClasses += 'max-w-[' + styleBlock['max-w'] + '] ';
                builderStyle += 'max-width: ' + styleBlock['max-w'] + '; ';
            }
            if (styleBlock['max-h']) {
                builderClasses += 'max-h-[' + styleBlock['max-h'] + '] ';
                builderStyle += 'max-height: ' + styleBlock['max-h'] + '; ';
            }
        } else if (styleBlock.acf_fc_layout === 'width') {
            if (styleBlock.width_options && styleBlock.width_options !== 'default') {
                builderClasses += 'w-' + styleBlock.width_options + ' ';
            }
        } else if (styleBlock.acf_fc_layout === 'border_radius') {
            if (styleBlock.border_radius) {
                Object.entries(styleBlock.border_radius).forEach(([cssProp, value]) => {
                    if (cssProp && value) {
                        builderStyle += `${cssProp}: ${value}; `;
                    }
                });
            }
        } else if (styleBlock.acf_fc_layout === 'custom_attributes') {
            if (Array.isArray(styleBlock.custom_attributes)) {
                for (const item of styleBlock.custom_attributes) {
                    attributes[item.key] = item.value;
                }
            }
        }
    }
    return {
        classes: builderClasses.trim(),
        wp_classes: builderWpClasses.trim(),
        style: builderStyle.trim(),
        attributes
    };
}
