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
