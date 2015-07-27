requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min'
    }
});

requirejs(['jquery'], function() {
    requirejs(['carousel'], function() {
        var carousel = new Carousel($('.fu-carousel-container'), 2000, 5000);
		carousel.init();
    });
});