var buttonOpenContainer = $(".navigation__button-open-container");
var hamburgerBar = $(".navigation__hamburger-bar");
var navigationOverlay = $(".navigation__overlay");
var buttonCloseContainer = $(".navigation__button-close-container");

function openNav() {
    buttonOpenContainer.css("pointer-events", "none");
    buttonOpenContainer.toggle(500, showCloseButton);
    hamburgerBar.css("background-color", "transparent");
    navigationOverlay.css("width", "100%");
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
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


