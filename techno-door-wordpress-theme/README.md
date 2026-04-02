# Techno Door WordPress Theme

A modern, responsive WordPress theme for Techno Door - an industrial door automation company specializing in automatic and industrial doors since 1970.

## Features

- **RTL Support**: Full Right-to-Left language support for Arabic
- **Responsive Design**: Mobile-first approach with modern CSS Grid and Flexbox
- **One-Page Design**: Single-page layout with smooth scrolling navigation
- **Interactive Elements**: Tabbed solutions section, animated marquee, portfolio gallery
- **SEO Optimized**: Clean HTML structure with proper semantic markup
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Performance**: Optimized CSS and JavaScript with lazy loading capabilities

## Installation

1. Download or clone this theme to your `wp-content/themes/` directory
2. Activate the theme through the WordPress admin dashboard
3. Create a primary navigation menu with the following structure:
   - عن الشركة (#about)
   - خدماتنا (#services)
   - معرض الأعمال (#portfolio)
   - حضورنا (#presence)
   - تواصل معنا (#contact)

## Customization

### Theme Options

The theme includes several customizable options that can be modified in the `functions.php` file:

- **Hero Section**: Title, subtitle, and description text
- **Company Information**: About text, statistics, contact details
- **Solutions**: Service categories and descriptions
- **Partners**: Success partners and technology partners lists
- **Branches**: Geographic presence information

### Styling

The theme uses custom CSS variables for easy customization:

```css
:root {
  --primary-color: hsl(186 100% 50%); /* Cyan accent color */
  --background-dark: hsl(0 0% 4%);   /* Dark background */
  --text-light: hsl(0 0% 100%);      /* White text */
  --text-muted: hsl(0 0% 69%);       /* Muted text */
}
```

### Images

Place partner logos in `images/partners/` directory and solution images in `images/solutions/` directory. The theme expects:

- Partner logos: PNG format, named after the partner (e.g., `ZARA.png`)
- Solution images: JPG format, named after the solution ID (e.g., `photocell.jpg`)

## Structure

```
techno-door-wordpress-theme/
├── style.css                 # Main stylesheet with theme header
├── additional-styles.css     # Additional custom styles
├── functions.php            # Theme functions and setup
├── index.php                # Main template file
├── header.php               # Header template
├── footer.php               # Footer template
├── js/
│   └── script.js            # Theme JavaScript
├── images/
│   ├── partners/            # Partner logo images
│   └── solutions/           # Solution images
└── README.md                # This file
```

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Development

### Prerequisites

- WordPress 5.0+
- PHP 7.4+
- MySQL 5.6+

### Local Development

1. Set up a local WordPress environment (XAMPP, MAMP, or Local by Flywheel)
2. Clone this theme into `wp-content/themes/`
3. Activate the theme
4. Customize content through the WordPress admin or by editing the theme files

### Making Changes

- **Content**: Edit the hardcoded values in `functions.php` or implement custom fields
- **Styling**: Modify `style.css` and `additional-styles.css`
- **Functionality**: Update `js/script.js` for interactive features
- **Layout**: Edit template files (`header.php`, `index.php`, `footer.php`)

## Performance Optimization

The theme includes several performance optimizations:

- **Lazy Loading**: Images load only when they enter the viewport
- **Minified Assets**: CSS and JavaScript are optimized
- **Efficient Selectors**: CSS uses efficient selectors for better performance
- **Reduced HTTP Requests**: Combined stylesheets and scripts

## Accessibility

The theme follows WCAG 2.1 guidelines:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Sufficient color contrast ratios
- Focus indicators for interactive elements

## License

This theme is licensed under the GPL v2 or later.

## Support

For support or customization requests, please contact the theme developer.

## Changelog

### Version 1.0.0
- Initial release
- RTL support for Arabic
- Responsive one-page design
- Interactive solutions tabs
- Animated partner marquee
- Portfolio gallery with hover effects
- Contact integration
- Mobile menu functionality