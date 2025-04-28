<?php

/**
 * Plugin Name:       Example Dynamic Block
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       tw-group
 *
 * @package nkg
 */

if (! defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function nkg_example_dynamic_block_block_init()
{
	register_block_type(__DIR__ . '/build');
}
add_action('init', 'nkg_example_dynamic_block_block_init');

// Filter to strip inline padding/margin styles from the tw-group block front-end output
add_filter('render_block', function($block_content, $block) {
    if (isset($block['blockName']) && $block['blockName'] === 'nkg/tw-group') {
        // Remove padding/margin inline styles from the wrapper div
        $block_content = preg_replace_callback(
            '/(<div[^>]+)style="([^"]*)"([^>]*>)/',
            function($matches) {
                // Remove padding/margin from style attribute
                $style = preg_replace('/(?:padding|margin)[^:;]+:[^;]+;?/', '', $matches[2]);
                // If style is now empty, remove the attribute entirely
                $style = trim($style);
                if ($style === '') {
                    return $matches[1] . $matches[3];
                }
                return $matches[1] . 'style="' . $style . '"' . $matches[3];
            },
            $block_content
        );
    }
    return $block_content;
}, 10, 2);
