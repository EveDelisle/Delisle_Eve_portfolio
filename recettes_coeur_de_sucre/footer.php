
<footer class="footer">
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
        <div class="divider"></div>
        <?php if(have_rows('pw_sociaux', 'option')): ?>
            <nav class="reseaux_sociaux">
                <ul>
                    <?php while(have_rows('pw_sociaux', 'option')): the_row(); ?>
                        <li>
                            <a href="<?php the_sub_field('lien', 'option');?>" >
                                <svg class="icon icon-lg icon--stroke">
                                    <use xlink:href="#icon-icon_<?php the_sub_field('nom', 'option');?>"></use>
                                </svg>
                            </a>
            
                        </li>
                
                    <?php endwhile;?>
                </ul>
            </nav>
        <?php endif;?>

        <?php if(get_field('pw_copyright', 'option')):?>
            <p class="copyright"><?php the_field('pw_copyright', 'option');?><?php echo Date('Y'); ?> <?php bloginfo('name'); ?>
            </p>
        <?php endif;?>
    </div>
  </footer>
  <?php wp_footer();?>
  
  
  </body>
</html>