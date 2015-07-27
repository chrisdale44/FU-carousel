function Carousel(carouselContainer, animationSpeed, intervalTime) {
    this.animationSpeed = animationSpeed;
    this.intervalTime = intervalTime;
    this.carousel = carouselContainer.find('.carousel');
    this.previousLink = carouselContainer.find('.previousLink');
    this.nextLink = carouselContainer.find('.nextLink');
}

Carousel.prototype = {
    init: function() {
        // if more there is more than one slide, display carousel nav and start carousel loop
        if (this.carousel.find('.slide').length > 1) {
            var self = this;
            setInterval(function() {
                self.nextSlide();
            },this.intervalTime);
            this.previousLink.click(function() {
                self.previousSlide();
            });
            this.nextLink.click(function () {
                self.nextSlide();
            });
        }
    },
    nextSlide: function() {
        // function to animate the first slide out of view and move it to the last position
        var firstSlide = this.carousel.find('.slide:first'),
            lastSlide = this.carousel.find('.slide:last'),
            slideWidth;
        if (!firstSlide.is(":animated")) {
            slideWidth = firstSlide.outerWidth();
            // TODO: use CSS3 transition here, rather than jquery animate:            
            firstSlide.animate({ marginLeft: -slideWidth},this.animationSpeed,function(){
                lastSlide.after(this);
                $(this).css({marginLeft:0});
            });
            //firstSlide.css('marginLeft', -slideWidth);
        }
    },
    previousSlide: function() {
        // function to move the last slide into first position and then animate it into view
        var firstSlide = this.carousel.find('.slide:first'),
            lastSlide = this.carousel.find('.slide:last'),
            slideWidth;
        if (!firstSlide.is(":animated")) {
            slideWidth = firstSlide.outerWidth();
            lastSlide.css("marginLeft", -slideWidth);
            firstSlide.before(lastSlide);
            lastSlide.animate({marginLeft:0}, this.animationSpeed);
        }
    }
};