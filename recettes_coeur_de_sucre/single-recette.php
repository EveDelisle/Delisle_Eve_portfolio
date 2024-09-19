<?php get_header(); ?>

<section class="un_dessert">
    <div class="wrapper">
        <div class="card">
            <div class="card_media">
                <?php 
                if(get_field('pw_favoris')) : ?>


                    <div class="ajout_favoris">
                        <svg class="icon icon--lg">
                            <use xlink:href="#icon-icon_favoris"></use>
                        </svg>
                    </div>
                
                <?php endif;?>
                
                <?php $image = get_field('pw_thumbnail_recette');?>

                <?php if($image): ?>

                    <img src="<?php echo $image['url'];?>" alt="Lorem" /> 
                    <?php echo $image['alt'];?>
                <?php endif ?>

              
            </div>
            <div class="card_content">
                <h2><?php the_title();?></h2>

                <div class="temps">
                    <div class="preparation">
                        <?php if(get_field('pw_preparation')):?>
                            <h3>Préparation:</h3>
                            <p><?php the_field('pw_preparation')?> minutes</p>
                        <?php endif;?>
                    </div>
                    <div class="cuisson">
                        <?php if(get_field('pw_cuisson')):?>
                            <h3>Cuissson:</h3>
                            <p><?php the_field('pw_cuisson')?> minutes</p>
                        <?php endif;?>
                    </div>
                    <div class="repo">
                        <?php if(get_field('pw_repo')):?>
                            <h3>Repo:</h3>
                            <p><?php the_field('pw_repo')?> minutes</p>
                        <?php endif;?>
                    </div>
                </div>

                <div class="description">
                    <div class="divider"></div>
                    <p><?php the_content();?></p>
                    <div class="divider"></div>
                </div>

                <div class="allergenes">
                        <?php if(have_rows('pw_allergenes')):?>
                            <h3>Allergènes</h3>

                            <div class="allergies">
                                <?php while(have_rows('pw_allergenes')): the_row();?>
                                    <p><?php the_sub_field('pw_allergie');?></p> 
                                    <div class="divider"></div>
                                <?php endwhile;?>
                            </div>
                        <?php endif;?>
                </div>
            </div>
        </div>
    </div>

    <div class="swiper" data-component="Carousel">
        <?php if(have_rows('pw_galerie')):?>
        <div class="swiper-wrapper">
            <?php while(have_rows('pw_galerie')): the_row();?>
                <div class="swiper-slide">
                    <?php
                        $image = get_sub_field('pw_galerie_image');
                        if($image):?>

                            <img src="<?php echo $image['url'];?>" alt="Lorem" /> 
                            <?php echo $image['alt'];?>
                        <?php endif ?>
                
                <!-- <img src="assets/images/biscuit.png" alt="biscuit" />-->
                    <div class="titre">
                        <div class="ligne"></div>
                            <?php if(get_sub_field('pw_galerie_texte')):?>
                                <h2><?php the_sub_field('pw_galerie_texte')?></h2>
                            <?php endif;?>
                        <div class="ligne"></div>
                    </div>

        </div>
                <?php endwhile;?>
            <?php endif;?>
           
        </div>
    </div>
</section>

<?php get_footer(); ?>