var buttonOpenContainer = $(".navigation__button-open-container");
var hamburgerBar = $(".navigation__hamburger-bar");
var navigationOverlay = $(".navigation__overlay");
var buttonCloseContainer = $(".navigation__button-close-container");
var navigationButtonClose = $(".navigation__button-close");
var scrollPosition = 0;
var scrollBarWidth = 0;


$(document).ready(function () {
    buttonOpenContainer.on("click", openNav);
    navigationButtonClose.on("click", closeNav);
});

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
    $("body").addClass("no-scroll");
    // To prevent content from jumping when scrollbar disappears.
    $(window).scrollTop(scrollPosition);
    $("body").css("padding-right", scrollBarWidth + "px");
    buttonOpenContainer.css("pointer-events", "none");
    buttonOpenContainer.toggle(500, showCloseButton);
    hamburgerBar.css("background-color", "transparent");
    navigationOverlay.css("width", "100%");
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    $("body").removeClass("no-scroll");
    // To stop content jerking left-right when scrollbar is restored.
    $("body").css("padding-right", "");
    hamburgerBar.css("background-color", "#ffffff");
    navigationOverlay.css("width", "0%");
    buttonOpenContainer.css("display", "inline");
    buttonOpenContainer.css("pointer-events", "auto");
    buttonCloseContainer.css("display", "none");
}

function showCloseButton() {
    buttonCloseContainer.css("display", "inline");
}

// Responsive background image constructor.
class ResponsiveBackgroundImage {

    constructor(element) {
        this.element = element;
        this.img = element.querySelector('.responsive');
        this.src = '';

        this.img.addEventListener('load', () => {
            this.update();
        });

        if (this.img.complete) {
            this.update();
        }
    }

    update() {
        let src = typeof this.img.currentSrc !== 'undefined' ? this.img.currentSrc : this.img.src;
        if (this.src !== src) {
            this.src = src;
            this.element.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("' + this.src + '")';
        }
    }
}

// Create responsive background images.
let elements = document.querySelectorAll('[data-image-type="responsive"]');
for (let i=0; i<elements.length; i++) {
    new ResponsiveBackgroundImage(elements[i]);
}

// Add active class to navigation elements in the navigation overlay and
// footer on page load.
$(setActiveLink());



