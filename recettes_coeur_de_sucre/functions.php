<?php
add_theme_support('post-thumbnails');

function new_excerpt_length($length) {
    return 15; // Nombre de mots limite
}
add_filter('excerpt_length', 'new_excerpt_length');


//Menu
function pw_creer_menu() {
	register_nav_menu('menu_principal', 'Menu principal');
}
add_action('init', 'pw_creer_menu');
//CPT Recette
// Register Custom Post Type
function pw_recettes() {

	$labels = array(
		'name'                  => _x( 'Recettes', 'Post Type General Name', 'text_domain' ),
		'singular_name'         => _x( 'Recette', 'Post Type Singular Name', 'text_domain' ),
		'menu_name'             => __( 'Recettes', 'text_domain' ),
		'name_admin_bar'        => __( 'Recette', 'text_domain' ),
		'archives'              => __( 'Item Archives', 'text_domain' ),
		'attributes'            => __( 'Item Attributes', 'text_domain' ),
		'parent_item_colon'     => __( 'Parent Item:', 'text_domain' ),
		'all_items'             => __( 'All Items', 'text_domain' ),
		'add_new_item'          => __( 'Add New Item', 'text_domain' ),
		'add_new'               => __( 'Ajouter une recette', 'text_domain' ),
		'new_item'              => __( 'Nouvelle recette', 'text_domain' ),
		'edit_item'             => __( 'Éditer une recette', 'text_domain' ),
		'update_item'           => __( 'Update Item', 'text_domain' ),
		'view_item'             => __( 'View Item', 'text_domain' ),
		'view_items'            => __( 'View Items', 'text_domain' ),
		'search_items'          => __( 'Search Item', 'text_domain' ),
		'not_found'             => __( 'Not found', 'text_domain' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
		'featured_image'        => __( 'Featured Image', 'text_domain' ),
		'set_featured_image'    => __( 'Set featured image', 'text_domain' ),
		'remove_featured_image' => __( 'Remove featured image', 'text_domain' ),
		'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
		'insert_into_item'      => __( 'Insert into item', 'text_domain' ),
		'uploaded_to_this_item' => __( 'Uploaded to this item', 'text_domain' ),
		'items_list'            => __( 'Items list', 'text_domain' ),
		'items_list_navigation' => __( 'Items list navigation', 'text_domain' ),
		'filter_items_list'     => __( 'Filter items list', 'text_domain' ),
	);
	$args = array(
		'label'                 => __( 'Recette', 'text_domain' ),
		'description'           => __( 'Post Type Description', 'text_domain' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'thumbnail' ),
		'taxonomies'            => array( 'category', 'post_tag' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'menu_icon'             => 'dashicons-buddicons-community',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'page',
		'show_in_rest'          => true,
	);
	register_post_type( 'recette', $args );

}
add_action( 'init', 'pw_recettes', 0 );


//Page d'options


if ( function_exists('acf_add_options_page') ) {
	// on ajoute une page d'option
	acf_add_options_page(array(
	'page_title' => 'Options générales de mon thème',
	'menu_title' => 'Options du thème',
	'menu_slug' => 'cw4-theme-options',
	'capability' => 'edit_posts',
	'redirect' => false
	));
	
	}