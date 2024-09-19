
<?php get_header(); ?>

<section class="contact">
    <div class="wrapper">
        
            
                <?php if(have_posts()) : ?>
                    <?php while(have_posts()) : the_post(); ?>
                    
                       

                            <h2><?php the_title();?></h2>
                            <p><?php the_content();?></p>

                               
                    <?php endwhile;?>
                <?php endif;?>

     

    </div>
</section>


<?php get_footer(); ?>