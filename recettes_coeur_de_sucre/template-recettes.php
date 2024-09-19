<?php
/* Template Name: Recettes */
?>

<?php get_header(); ?>

<section class="hero_recettes">
    <div class="wrapper">
        <div class="hero_content">
            <h2><?php the_title();?></h2>
            <p>
                <?php the_content();?>
            </p>

            <div class="divider"></div>
        </div>
    </div>
</section>
<section class="nos_recettes">
    <div class="wrapper">

       
            <?php 
                $arg = array(

                    'post_type' => 'recette',
                    'post_status' => 'publish', 
                    'showposts' => 3,
                    'category_name' => 'rapide',
                ); 
                $query = new WP_Query($arg);
            ?> 


        <div class="cards_recettes">
            <?php if($query->have_posts()):?>
                <?php while($query->have_posts()) : $query->the_post();?>
                    <div class="card">
                                <div class="card_media">
                                    <a href="<?php the_permalink();?>">
                                            <?php $image = get_field('pw_thumbnail_recette');?>

                                            <?php if($image): ?>

                                                <img src="<?php echo $image['url'];?>" alt="Lorem" /> 
                                                <?php echo $image['alt'];?>
                                            <?php endif ?>
                                    </a>
                                </div>
                                <?php $categories = array();?>                  
                        <div class="categories">
                        
                            <?php foreach(get_the_category()as $category) :?>
                                <?php array_push($categories, $category->name);?>
                            <?php endforeach;?>

                            <?php if($categories):?>
                                <?php foreach($categories as $cat) :?>
                                     <p class="categorie"><?php echo $cat;?></p>
                                <?php endforeach;?>
                            <?php endif;?>
                        </div>
                        <div class="card_content">
                            <div class="informations">
                                <div class="divider"></div>
                                <a href="<?php the_permalink();?>">
                                    <h3><?php the_title();?></h3>
                                </a>
                                <div class="divider"></div>
                                <p class="p-small">
                                    <?php the_excerpt();?>
                                </p>
                            </div>
                        </div>
                    </div>
                <?php endwhile;?>
            <?php endif;?>
            
            <?php wp_reset_postdata();?>
        </div>


        <?php 
                $arg = array(

                    'post_type' => 'recette',
                    'post_status' => 'publish', 
                    'showposts' => 3,
                    'category_name' => 'Textures',
                ); 
                $query = new WP_Query($arg);
            ?> 


        <div class="cards_recettes">
            <?php if($query->have_posts()):?>
                <?php while($query->have_posts()) : $query->the_post();?>
                    <div class="card">
                                <div class="card_media">
                                    <a href="<?php the_permalink();?>">
                                            <?php $image = get_field('pw_thumbnail_recette');?>

                                            <?php if($image): ?>

                                                <img src="<?php echo $image['url'];?>" alt="Lorem" /> 
                                                <?php echo $image['alt'];?>
                                            <?php endif ?>
                                    </a>
                                </div>
                                <?php $categories = array();?>                  
                        <div class="categories">
                        
                            <?php foreach(get_the_category()as $category) :?>
                                <?php array_push($categories, $category->name);?>
                            <?php endforeach;?>

                            <?php if($categories):?>
                                <?php foreach($categories as $cat) :?>
                                     <p class="categorie"><?php echo $cat;?></p>
                                <?php endforeach;?>
                            <?php endif;?>
                        </div>
                        <div class="card_content">
                            <div class="informations">
                                <div class="divider"></div>
                                <a href="<?php the_permalink();?>">
                                    <h3><?php the_title();?></h3>
                                </a>
                                <div class="divider"></div>
                                <p class="p-small">
                                    <?php the_excerpt();?>
                                </p>
                            </div>
                        </div>
                    </div>
                <?php endwhile;?>
            <?php endif;?>
            
            <?php wp_reset_postdata();?>
        </div>




    </div>
</section>

<?php get_footer(); ?>