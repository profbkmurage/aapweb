$(document).ready(function(){
    $('.slider').owlCarousel({
        loop:true,
        center: true,
        item: 1,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 2000,
        smartSpeed: 450,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    }); 

});  

