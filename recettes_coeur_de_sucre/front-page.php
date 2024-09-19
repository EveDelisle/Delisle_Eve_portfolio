
<?php get_header(); ?>

<section class="hero">
    <div class="wrapper">
        <div class="hero_content">
            <div class="ligne"></div>
            <h1><?php the_title(); ?></h1>
            <div class="ligne"></div>
            
        </div>

        <div class="hero_contour"></div>
        <div class="hero_media">
            <?php the_post_thumbnail();?>
        </div>
    </div>
</section>
<section class="texte_explicatif">
    <div class="wrapper">
        <div class="ligne"></div>
        <h2><?php echo esc_html( get_field('pw_titre_description') ); ?></h2>
        <p>
            <?php echo wp_kses_post ( get_field('pw_texte_description') ); ?>
        </p>
        <div class="ligne"></div>
    </div>
</section>



<section class="favoris">
    <div class="wrapper">
        <div class="titre">
            <h2>Les Chouchous de la Cuisine</h2>
        </div>

        <?php 
                $arg = array(

                    'post_type' => 'recette',
                    'post_status' => 'publish', 
                    'showposts' => 2,
                    'meta_query' => array(
                        array(
                            'key' => 'pw_favoris', //nom acf
                            'value' => '1', 
                            'compare' => '='
                        )
                    )
                  
                ); 
                $query = new WP_Query($arg);
            ?> 


        <div class="cards_favoris">
            <?php if($query->have_posts()):?>
                <?php while($query->have_posts()) : $query->the_post();?>
                        <div class="card">
                            <div class="card_media">
                            <?php $image = get_field('pw_thumbnail_recette');?>

                                <?php if($image): ?>

                                    <img src="<?php echo $image['url'];?>" alt="Lorem" /> 
                                    <?php echo $image['alt'];?>
                                <?php endif ?>
                            </div>
                            <div class="card_content">

                                <a href="<?php the_permalink();?>">
                                    <h3><?php the_title();?></h3>
                                    
                                </a>
                            </div>
                        </div>
                        
                       
                <?php endwhile;?>
            <?php endif;?>
            <?php wp_reset_postdata();?>
        </div>

        <div class="lien_recettes">
        <?php 
            $link = get_field('pw_lien_nos_recettes');
                if( $link ): 
                    $link_url = $link['url'];
                    $link_title = $link['title'];
                ?>
                    <a href="<?php echo esc_url( $link_url ); ?>"> <?php echo esc_html( $link_title ); ?></a>
                <?php endif;?>
        </div>
    </div>
</section>

<?php get_footer(); ?>