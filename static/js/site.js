var buttonOpenContainer = $(".navigation__button-open-container");
var hamburgerBar = $(".navigation__hamburger-bar");
var navigationOverlay = $(".navigation__overlay");
var buttonCloseContainer = $(".navigation__button-close-container");
var navigationButtonClose = $(".navigation__button-close");
var scrollPosition = 0;
var scrollBarWidth = 0;
var parallelSection = false;
var preventDefaultAction = function(e) {
    e.preventDefault();
};


$(document).ready(function () {
    buttonOpenContainer.on("click", openNav);
    navigationButtonClose.on("click", closeNav);
});



function removeChapters () {
    o
}

// Code for active links and scrolling
$(document).ready(function() {
    $(".navbar-nav .nav-item .nav-link").on("click", function(){
        $(".navbar-nav").find(".active").removeClass("active");
        $(this).addClass("active");
    });

    // Automatic navigation active state.
    var sections = $('section'),
        nav = $('nav'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function() {
            var top = $(this).offset().top - nav_height - 85,
            bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                if ($(window).width() < 992) {
                    $(this).addClass('active');
                    nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
                } else if (this.id !== "chapters") {
                    $(this).addClass('active');
                    nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
                }
            }
        });
    });

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                    });
                }
            }
        });
    });





















function stopBodyScrolling (bool) {
    /**
     * Required to stop body scrolling on iOS devices (safari ignores
     * body overflow: hidden in css.
     */
    if (bool === true) {
        document.body.addEventListener("touchmove", preventDefaultAction, false);
    } else {
        document.body.removeEventListener("touchmove", preventDefaultAction, false);
    }
}

function setActiveLink() {
    var currentURL = window.location.href;
    $('.navigation__link, .footer__link').each(function () {
        if (this.href === currentURL) {
            $(this).addClass('active');
        }
    });
}

function openNav() {
    scrollPosition = $(window).scrollTop();
    scrollBarWidth = (window.innerWidth - $(window).width());
    $(".body").addClass("no-scroll");
    stopBodyScrolling(true);
    // To prevent content from jumping when scrollbar disappears.
    $(window).scrollTop(scrollPosition);
    $(".body").css("padding-right", scrollBarWidth + "px");
    buttonOpenContainer.css("pointer-events", "none");
    buttonOpenContainer.toggle(500, showCloseButton);
    hamburgerBar.css("background-color", "transparent");
    navigationOverlay.css("width", "100%");
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    $(".body").removeClass("no-scroll");
    stopBodyScrolling(false);
    // To stop content jerking left-right when scrollbar is restored.
    $(".body").css("padding-right", "");
    hamburgerBar.css("background-color", "#ffffff");
    navigationOverlay.css("width", "0%");
    buttonOpenContainer.css("display", "inline");
    buttonOpenContainer.css("pointer-events", "auto");
    buttonCloseContainer.css("display", "none");
}

function showCloseButton() {
    buttonCloseContainer.css("display", "inline");
}

// Add active class to navigation elements in the navigation overlay and
// footer on page load.
$(setActiveLink());



