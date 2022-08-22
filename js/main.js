$(document).ready(function(){

    window.addEventListener("scroll", function () {
        let header = document.querySelector("header");
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    $('.himo__slider').slick({
        autoplay: true,
        dots: true,
        fade: true,
        arrows: false,
        dotsClass: 'himo__slider-btns',
        autoplaySpeed: 2700,
    });

    $('.slider__items').slick({
        autoplay: true,
        dots: true,
        fade: true,
        adaptiveHeight: true,
        arrows: false,
        dotsClass: 'slider__btns',
        autoplaySpeed: 2700,
    });

  
    // Add smooth scrolling to all links
    $(".menu__link").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    
    $('.burger').on('click', function(e) {
        e.preventDefault;
        $(this).toggleClass('burger_active');
        $('.menu').toggleClass('menu_active');
        $('#body_overlay').toggleClass('overlay_active');
        
    });
    
    if (window.innerWidth <= 767) {
        $('.menu__link').on('click', function(e) {
            e.preventDefault;
            $('.burger').removeClass('burger_active');
            $('.menu').removeClass('menu_active');
            $('#body_overlay').removeClass('overlay_active');
        });
    }

     

});

function imgchange() {
    let color = document.querySelector('[name="color"]:checked').value;
    let colorPhoto = {
        'grey': './img/color-2.jpg',
        'white': './img/color-1.jpg',
        'red': './img/color-3.jpg'
    };

    let colorText = {
        'grey': '33 999 грн.',
        'white': '32 999 грн.',
        'red': '34 999 грн.'
    };

    $imgUrl = colorPhoto[color];


    $("#bikeImage").fadeOut(500, function() {
        $("#bikeImage").attr('src', $imgUrl);
    }).fadeIn(500);

    $("#bikeText").fadeOut(500, function() {
        document.getElementById('bikeText').innerHTML = colorText[color];
    }).fadeIn(500);
    
}  

