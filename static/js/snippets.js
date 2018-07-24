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
        let image = this.img;
        let overlay = image.getAttribute("data-overlay");
        if (overlay === null || overlay === undefined) {
            overlay = "";
        }

        if (this.src !== src) {
            this.src = src;

            this.element.style.backgroundImage = overlay + ', url("' + this.src + '")';
        }
    }
}

// Create responsive background images.
let elements = document.querySelectorAll('[data-image-type="responsive"]');
for (let i=0; i<elements.length; i++) {
    new ResponsiveBackgroundImage(elements[i]);
}

function readDeviceOrientation() {

    return window.matchMedia("(orientation: portrait)").matches;
}






function removeChapters () {
    var chaptersSection = $("#chapters");
    if ($(window).width() >= 992) {
        chaptersSection.removeAttr("id")
    }
    else {
        chaptersSection.attr('id', 'chapters');
    }
}



$(document).ready(function () {
    buttonOpenContainer.on("click", openNav);
    navigationButtonClose.on("click", closeNav);
    $(window).on("load resize", function() {
      removeChapters();
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
