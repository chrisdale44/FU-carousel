$(document).ready(function(){
    'use strict';

    //Set carousel vars for animation time and interval time
  	var carousel_width,
        animationTime = 1500,
        intervalTime = 8000;

    function nextSlide() {
        if (!$('.carousel .slide:first').is(":animated")) {
            carousel_width = $('.carousel').width();
            $('.carousel .slide:first').animate({ marginLeft:-carousel_width},animationTime,function(){
                $(".carousel .slide:last").after(this);
                $(this).css({marginLeft:0});
            });
        }
    }

    function previousSlide() {
        if (!$('.carousel .slide:first').is(":animated")) {
            carousel_width = $('.carousel').width();
            $(".carousel .slide:last").css("marginLeft", -carousel_width);
            $(".carousel .slide:first").before($(".carousel .slide:last"));
            $(".carousel .slide:first").animate({marginLeft:0}, animationTime);
        }
    }

    if ($('.carousel .slide').length > 1) {
            $('.carousel-nav').removeClass('hide');
            setInterval(function() {
                nextSlide();
            },intervalTime);
            $('#previous').click(function() {
                previousSlide();
            });
            $('#next').click(function () {
                nextSlide();
            });
    }
});