<?php

/**
 * Register block script
 */
function qntm_register_slideout_menu_script()
{
	wp_register_script('qntm-slideout-menu', get_template_directory_uri() . '/resources/blocks/slideout-menu/slideout-menu.js', ['jquery']);
}
add_action('init', 'qntm_register_slideout_menu_script');

function qntm_register_slideout_menu_style()
{
	wp_register_style('qntm-slideout-menu', get_template_directory_uri() . '/resources/blocks/slideout-menu/slideout-menu.compiled.css');
}
add_action('init', 'qntm_register_slideout_menu_style');


function qntm_slideout_menu_setup()
{
	register_nav_menus(
		array(
			'slideout' => __('Slideout Menu', 'qntm'),

		)
	);
}
add_action('init', 'qntm_slideout_menu_setup');


function qntm_slideout_menu_init()
{
	register_block_type(__DIR__);
}
add_action('init', 'qntm_slideout_menu_init');


/**
 * Create an ACF field for selecting a menu
 */
function namespace_populate_menus_field(array $field): array
{

	// Reset choices
	$field['choices'] = [];

	// Get all registered menus and add them to the field with slug as value and name as label
	foreach (wp_get_nav_menus() as $menu) {
		$field['choices'][$menu->slug] = $menu->name;
	}

	// Sort choices alphabetically
	ksort($field['choices']);

	return $field;
}
add_filter('acf/load_field/name=navigation_menu', 'namespace_populate_menus_field', 10, 1);
