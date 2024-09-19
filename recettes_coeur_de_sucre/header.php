<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?php wp_title('|', true, 'right')?><?php bloginfo('name'); ?></title>
    <?php wp_head(); ?>
    <link rel="stylesheet" href="<?php bloginfo('template_url') ?>/dist/styles/main.css" />

    <script>
      // À décommenter lorsque rendu dans le fichier .php pour que les icônes fonctionnent dans WP
       iconsPath = '<?php bloginfo('template_url') ?>/dist/';
    </script>
    <script src="<?php bloginfo('template_url') ?>/dist/scripts/main.js" defer></script>
  </head>

  <body <?php body_class(); ?>>

    <header class="header" data-component="Header">
      <div class="wrapper">

        <div class="logo">
        <?php 
            $link = get_field('pw_lien_logo', 'option');
                if( $link ): 
                    $link_url = $link['url'];
                    $link_title = $link['title'];
                    ?>
                <a href="<?php echo esc_url( $link_url ); ?>">
            <?php endif;?>
             <?php $image = get_field('pw_logo_image', 'option');?>

            <?php if($image): ?>

                <img src="<?php echo $image['url'];?>" alt="Lorem" /> 
                <?php echo $image['alt'];?>
            <?php endif ?>
            </a>
        </div>

        <?php wp_nav_menu(array(
                'theme_location' => 'menu_principal',
                'container' => 'nav',
                'container_class' => 'nav',
            )); ?>

        
        <div class="header_toggle js-toggle" >
          <span></span>
          <span></span>
          <span></span>
       </div>
      </div>


    </header>