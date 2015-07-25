function Carousel(carousel, carouselNav, animationSpeed, intervalTime) {
    this.animationSpeed = animationSpeed;
    this.intervalTime = intervalTime;
    this.carousel = carousel;
    this.carouselNav = carouselNav;
    this.carousel_width = carousel.width();
}

Carousel.prototype = {
    init: function() {
        // if more there is more than one slide, display carousel nav and start carousel loop
        if (this.carousel.find('.slide').length > 1) {
            var self = this;
            this.carouselNav.removeClass('hide');
            setInterval(function() {
                self.nextSlide();
            },this.intervalTime);
            $('#previous').click(function() {
                self.previousSlide();
            });
            $('#next').click(function () {
                self.nextSlide();
            });
        }
    },
    nextSlide: function() {
        // function to animate the first slide out of view and move it to the last position
        var firstSlide = this.carousel.find('.slide:first'),
            lastSlide = this.carousel.find('.slide:last');
        if (!firstSlide.is(":animated")) {
            firstSlide.animate({ marginLeft:-this.carousel_width},this.animationSpeed,function(){
                lastSlide.after(this);
                $(this).css({marginLeft:0});
            });
        }
    },
    previousSlide: function() {
        // function to move the last slide into first position and then animate it into view
        var firstSlide = this.carousel.find('.slide:first'),
            lastSlide = this.carousel.find('.slide:last');
        if (!firstSlide.is(":animated")) {
            lastSlide.css("marginLeft", -this.carousel_width);
            firstSlide.before(lastSlide);
            lastSlide.animate({marginLeft:0}, this.animationSpeed);
        }
    }
};