<?php
/**
 * Techno Door Theme Functions
 *
 * @package TechnoDoor
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme setup
 */
function techno_door_setup() {
    // Add default posts and comments RSS feed links to head
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails on posts and pages
    add_theme_support('post-thumbnails');

    // This theme uses wp_nav_menu() in one location
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'techno-door'),
    ));

    // Switch default core markup to output valid HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));

    // Add theme support for selective refresh for widgets
    add_theme_support('customize-selective-refresh-widgets');

    // Add support for custom logo
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-width'  => true,
        'flex-height' => true,
    ));

    // Add support for editor styles
    add_theme_support('editor-styles');
    add_editor_style('editor-style.css');
}
add_action('after_setup_theme', 'techno_door_setup');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet
 */
function techno_door_content_width() {
    $GLOBALS['content_width'] = apply_filters('techno_door_content_width', 1200);
}
add_action('after_setup_theme', 'techno_door_content_width', 0);

/**
 * Register widget area
 */
function techno_door_widgets_init() {
    register_sidebar(array(
        'name'          => __('Footer Widget Area', 'techno-door'),
        'id'            => 'footer-1',
        'description'   => __('Add widgets here to appear in your footer.', 'techno-door'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'techno_door_widgets_init');

/**
 * Enqueue scripts and styles
 */
function techno_door_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style('techno-door-style', get_stylesheet_uri(), array(), wp_get_theme()->get('Version'));

    // Enqueue additional styles
    wp_enqueue_style('techno-door-additional', get_template_directory_uri() . '/additional-styles.css', array('techno-door-style'), wp_get_theme()->get('Version'));

    // Enqueue theme JavaScript
    wp_enqueue_script('techno-door-script', get_template_directory_uri() . '/js/script.js', array('jquery'), wp_get_theme()->get('Version'), true);

    // Localize script for AJAX and other dynamic data
    wp_localize_script('techno-door-script', 'techno_door_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce'    => wp_create_nonce('techno_door_nonce'),
    ));
}
add_action('wp_enqueue_scripts', 'techno_door_scripts');

/**
 * Custom excerpt length
 */
function techno_door_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'techno_door_excerpt_length', 999);

/**
 * Custom excerpt more
 */
function techno_door_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'techno_door_excerpt_more');

/**
 * Add custom classes to body
 */
function techno_door_body_classes($classes) {
    // Add class for RTL support
    if (is_rtl()) {
        $classes[] = 'rtl';
    }

    return $classes;
}
add_filter('body_class', 'techno_door_body_classes');

/**
 * Custom navigation menu
 */
function techno_door_nav_menu($items, $args) {
    if ($args->theme_location == 'primary') {
        // Add scroll behavior for smooth scrolling
        $items = str_replace('href="#', 'href="#" onclick="scrollToSection(\'', $items);
        $items = str_replace('">', '\'); return false;">', $items);
    }
    return $items;
}
add_filter('wp_nav_menu_items', 'techno_door_nav_menu', 10, 2);

/**
 * Get theme option or default value
 */
function techno_door_get_option($option, $default = '') {
    // For now, return hardcoded values. In a real theme, this would use ACF or theme options
    $options = array(
        'hero_title' => 'Techno Door',
        'hero_subtitle' => 'الأبواب الضخمة تخصصنا.. تكنولوجيا تلبي كافة التحديات.',
        'hero_text' => 'خبرة 50 عاماً في تقديم أفضل الحلول الأوتوماتيكية بأعلى جودة.',
        'about_title' => 'عن تكنو دور',
        'about_text' => 'تأسست شركة تكنو دور عام 1970 وهي متخصصة في مجال الأبواب الآلية والأوتوماتيكية...',
        'company_stats' => array(
            array('number' => '50', 'label' => 'سنة من الخبرة'),
            array('number' => '1000+', 'label' => 'مشروع مكتمل'),
            array('number' => '4', 'label' => 'دول عربية'),
        ),
        'phone_1' => '01157114794',
        'phone_2' => '01286254951',
        'whatsapp' => 'https://wa.me/201157114794',
        'facebook' => 'https://facebook.com/Technodoor.EG',
        'address' => 'القاهرة، مصر',
    );

    return isset($options[$option]) ? $options[$option] : $default;
}

/**
 * Get solutions data
 */
function techno_door_get_solutions() {
    return array(
        array(
            'id' => 'photocell',
            'title' => 'أجهزة الخلايا الضوئية',
            'description' => 'أنظمة فتح وإغلاق أوتوماتيكية متقدمة',
            'features' => array('تكنولوجيا متقدمة', 'ضمان عالي', 'تركيب سريع')
        ),
        array(
            'id' => 'rolling',
            'title' => 'الستائر المتداولة',
            'description' => 'ستائر متداولة بمواد متنوعة: صفائح، رغوة، ألمنيوم، بوليكاربونات',
            'features' => array('تكنولوجيا متقدمة', 'ضمان عالي', 'تركيب سريع')
        ),
        array(
            'id' => 'sliding',
            'title' => 'الأبواب المنزلقة المحورية',
            'description' => 'أنظمة أبواب منزلقة محورية متطورة',
            'features' => array('تكنولوجيا متقدمة', 'ضمان عالي', 'تركيب سريع')
        ),
        array(
            'id' => 'barrier',
            'title' => 'حواجز الأمان',
            'description' => 'حواجز أمان وحماية متقدمة',
            'features' => array('تكنولوجيا متقدمة', 'ضمان عالي', 'تركيب سريع')
        ),
        array(
            'id' => 'emergency',
            'title' => 'أبواب الطوارئ',
            'description' => 'أبواب طوارئ ومكافحة حريق بأنواع مختلفة',
            'features' => array('تكنولوجيا متقدمة', 'ضمان عالي', 'تركيب سريع')
        ),
        array(
            'id' => 'mesh',
            'title' => 'الستائر الشبكية',
            'description' => 'ستائر شبكية متينة ومقاومة',
            'features' => array('تكنولوجيا متقدمة', 'ضمان عالي', 'تركيب سريع')
        ),
        array(
            'id' => 'sectional',
            'title' => 'الأبواب القطاعية',
            'description' => 'أبواب قطاعية عالية السرعة',
            'features' => array('تكنولوجيا متقدمة', 'ضمان عالي', 'تركيب سريع')
        ),
    );
}

/**
 * Get partners data
 */
function techno_door_get_partners() {
    return array(
        'success' => array(
            'ZARA', 'FAB', 'Town Team', 'القوات المسلحة المصرية', 'Mercedes-Benz',
            'Pepsi', 'Adidas', 'SH', 'B.TECH', 'Pizza Hut', 'McDonald\'s', 'KFC',
            'Egypt Mall', 'Etisalat'
        ),
        'tech' => array(
            'simu', 'acm', 'somfy', 'tornado', 'ditec', 'roger technology'
        )
    );
}

/**
 * Get branches data
 */
function techno_door_get_branches() {
    return array(
        array(
            'country' => 'مصر',
            'city' => 'القاهرة',
            'type' => 'المقر الرئيسي',
            'address' => 'أول نزول، مؤسسة الزكاة'
        ),
        array(
            'country' => 'سوريا',
            'city' => 'دمشق',
            'type' => 'فرع',
            'address' => ''
        ),
        array(
            'country' => 'السودان',
            'city' => 'الخرطوم',
            'type' => 'فرع',
            'address' => ''
        ),
        array(
            'country' => 'ليبيا',
            'city' => 'بنغازي',
            'type' => 'فرع',
            'address' => ''
        ),
    );
}