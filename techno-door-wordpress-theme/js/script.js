/**
 * Techno Door Theme JavaScript
 *
 * @package TechnoDoor
 */

(function($) {
    'use strict';

    $(document).ready(function() {

        // Tab functionality
        $('.tab-btn').on('click', function() {
            var tabId = $(this).data('tab');

            // Remove active class from all buttons and panes
            $('.tab-btn').removeClass('active');
            $('.tab-pane').removeClass('active');

            // Add active class to clicked button and corresponding pane
            $(this).addClass('active');
            $('#' + tabId).addClass('active');
        });

        // Smooth scroll for navigation links
        $('a[href^="#"]').on('click', function(event) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - 80 // Offset for fixed header
                }, 1000);
            }
        });

        // Mobile menu toggle
        $('.mobile-menu-toggle').on('click', function() {
            $('.mobile-menu-overlay').toggleClass('active');
            $(this).toggleClass('active');
        });

        // Close mobile menu when clicking on a link
        $('.mobile-nav-menu a').on('click', function() {
            $('.mobile-menu-overlay').removeClass('active');
            $('.mobile-menu-toggle').removeClass('active');
        });

        // Portfolio item hover effect
        $('.portfolio-item').hover(
            function() {
                $(this).find('.portfolio-overlay').fadeIn();
            },
            function() {
                $(this).find('.portfolio-overlay').fadeOut();
            }
        );

        // Scroll indicator animation
        function animateScrollIndicator() {
            $('.scroll-indicator').addClass('bounce');
            setTimeout(function() {
                $('.scroll-indicator').removeClass('bounce');
            }, 1000);
        }

        // Animate scroll indicator every 3 seconds
        setInterval(animateScrollIndicator, 3000);

        // Add scroll effect to header
        $(window).scroll(function() {
            if ($(this).scrollTop() > 50) {
                $('.header').addClass('scrolled');
            } else {
                $('.header').removeClass('scrolled');
            }
        });

        // Initialize AOS (Animate On Scroll) if available
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true,
                offset: 100
            });
        }

        // Lazy loading for images
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            $('img[data-src]').each(function() {
                imageObserver.observe(this);
            });
        }

        // Contact form handling (if implemented)
        $('.contact-form').on('submit', function(e) {
            e.preventDefault();

            var formData = $(this).serialize();

            $.ajax({
                type: 'POST',
                url: techno_door_ajax.ajax_url,
                data: {
                    action: 'techno_door_contact_form',
                    nonce: techno_door_ajax.nonce,
                    form_data: formData
                },
                success: function(response) {
                    if (response.success) {
                        // Show success message
                        alert('تم إرسال رسالتك بنجاح!');
                        $('.contact-form')[0].reset();
                    } else {
                        // Show error message
                        alert('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.');
                    }
                },
                error: function() {
                    alert('حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى.');
                }
            });
        });

    });

    // Window load event
    $(window).on('load', function() {
        // Hide loading screen if exists
        $('.loading-screen').fadeOut();

        // Initialize any plugins that need the page to be fully loaded
    });

})(jQuery);