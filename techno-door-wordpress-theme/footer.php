<?php
/**
 * The template for displaying the footer
 *
 * @package TechnoDoor
 */
?>

<footer id="colophon" class="footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-section">
                <?php
                if (has_custom_logo()) {
                    the_custom_logo();
                } else {
                    echo '<img src="https://cdn.builder.io/api/v1/image/assets%2F92d8ce78a1e549b2adbec0c63d3a13d1%2F56cf6444f59a4df38be379ed410303b2?format=webp&width=400&height=100" alt="' . get_bloginfo('name') . '" class="logo">';
                }
                ?>
                <p>شركة تكنو دور متخصصة في الأبواب الآلية والأوتوماتيكية منذ عام 1970</p>
            </div>

            <div class="footer-section">
                <h3>روابط سريعة</h3>
                <ul class="footer-links">
                    <li><a href="#about">عن الشركة</a></li>
                    <li><a href="#services">خدماتنا</a></li>
                    <li><a href="#portfolio">معرض الأعمال</a></li>
                    <li><a href="#contact">تواصل معنا</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h3>خدماتنا</h3>
                <ul class="footer-links">
                    <li><a href="#services">الأبواب المنزلقة</a></li>
                    <li><a href="#services">الستائر المتداولة</a></li>
                    <li><a href="#services">أبواب الطوارئ</a></li>
                    <li><a href="#services">حواجز الأمان</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h3>تواصل معنا</h3>
                <ul class="footer-links">
                    <li><a href="tel:<?php echo techno_door_get_option('phone_1'); ?>">📞 <?php echo techno_door_get_option('phone_1'); ?></a></li>
                    <li><a href="tel:<?php echo techno_door_get_option('phone_2'); ?>">📞 <?php echo techno_door_get_option('phone_2'); ?></a></li>
                    <li><a href="<?php echo techno_door_get_option('whatsapp'); ?>" target="_blank">💬 واتساب</a></li>
                    <li><a href="<?php echo techno_door_get_option('facebook'); ?>" target="_blank">📘 فيسبوك</a></li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; <?php echo date('Y'); ?> <?php echo get_bloginfo('name'); ?>. جميع الحقوق محفوظة.</p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>

<script>
// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add active class to clicked button and corresponding pane
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Smooth scroll function
    window.scrollToSection = function(sectionId) {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

    if (mobileMenuToggle && mobileMenuOverlay) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenuOverlay.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }

    // Scroll indicator animation
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        setInterval(() => {
            scrollIndicator.classList.add('bounce');
            setTimeout(() => {
                scrollIndicator.classList.remove('bounce');
            }, 1000);
        }, 3000);
    }
});
</script>

</body>
</html>