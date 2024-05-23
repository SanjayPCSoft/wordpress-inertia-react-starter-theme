<header id="masthead" class="site-header">
    <hgroup>
        <h1 class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a>
        </h1>
        <h2 class="site-description"><?php bloginfo('description'); ?></h2>
    </hgroup>

    <nav id="site-navigation" class="main-navigation">
        <button class="menu-toggle"><?php _e('Menu', 'twentytwelve'); ?></button>
        <a class="assistive-text" href="#content"><?php _e('Skip to content', 'twentytwelve'); ?></a>
        <?php
        wp_nav_menu(
            array(
                'theme_location' => 'primary',
                'menu_class' => 'nav-menu',
            )
        );
        ?>
    </nav>
</header>