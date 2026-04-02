<?php
/**
 * The header for our theme
 *
 * @package TechnoDoor
 */
?>
<!doctype html>
<html <?php language_attributes(); ?> dir="rtl">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header id="masthead" class="header">
    <div class="container">
        <div class="header-content">
            <?php
            // Custom logo
            if (has_custom_logo()) {
                the_custom_logo();
            } else {
                // Default logo
                echo '<img src="https://cdn.builder.io/api/v1/image/assets%2F92d8ce78a1e549b2adbec0c63d3a13d1%2F56cf6444f59a4df38be379ed410303b2?format=webp&width=400&height=100" alt="' . get_bloginfo('name') . '" class="logo">';
            }
            ?>

            <nav id="site-navigation" class="main-navigation">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_id'        => 'primary-menu',
                    'menu_class'     => 'nav-menu',
                    'container'      => false,
                ));
                ?>
            </nav>

            <a href="#contact" class="btn btn-primary cta-button">اتصل الآن</a>

            <!-- Mobile menu toggle -->
            <button class="mobile-menu-toggle" aria-label="Toggle mobile menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
</header>

<!-- Mobile menu overlay -->
<div class="mobile-menu-overlay">
    <nav class="mobile-menu">
        <?php
        wp_nav_menu(array(
            'theme_location' => 'primary',
            'menu_id'        => 'mobile-menu',
            'menu_class'     => 'mobile-nav-menu',
            'container'      => false,
        ));
        ?>
    </nav>
</div>