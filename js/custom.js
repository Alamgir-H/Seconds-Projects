$(function () {

    $('.slick_slide').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        nextArrow: '.right_arrow',
        prevArrow: '.left_arrow',
        dots: true

    });
 
//	preelada
	 $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });
	    //==== Show or hide the sticky footer button
$(window).on('scroll', function(event) {
    if($(this).scrollTop() > 600){
        $('.back-to-top').fadeIn(200)
    } else{
        $('.back-to-top').fadeOut(200)
    }
});
	
    //==== Animate the scroll to top
$('.back-to-top').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1500);
});

     
//    mixitup js
    
    var mixer = mixitup('.work-wraper');
 
 
    
    $('.slider_active').slick({
      autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
    	arrows:false,
    	dots:true,
});
    
    
    //    gallery active  
     $('.venobox').venobox({
         spinner: 'wandering-cubes'
     }); 
    
    
    
    $('.videoBtn').venobox({
         spinner: 'wandering-cubes'
     }); 

    
});
