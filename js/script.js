jQuery(function () {
    $(window).resize(function () {
        if ($(window).height() > 600) {
            var sH = $(window).height();
        } else {
            var sH = 600;
        }
        $('.header-10-sub').css('height', sH + 'px');
    });

    $('.show_more').click(function(){
      $(this).next('div.hidden-box').slideDown(800);
      $(this).css('visibility', 'hidden');
       return false;
    });

    $(".links a, .nav a").click(function (event) {
        event.preventDefault();
        var dest = 0;
        if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
            dest = $(document).height() - $(window).height();
        } else {
            dest = $(this.hash).offset().top;
        }
        $('html,body').animate({scrollTop: dest}, 800, 'swing');
    });
});

(function($) {
 
    $.fn.parallax = function(options) {
 
        var windowHeight = $(window).height();
 
        // Establish default settings
        var settings = $.extend({
            speed        : 0.15
        }, options);
 
        // Iterate over each object in collection
        return this.each( function() {
 
            // Save a reference to the element
            var $this = $(this);
 
            // Set up Scroll Handler
            $(document).scroll(function(){
 
                    var scrollTop = $(window).scrollTop();
                        var offset = $this.offset().top;
                        var height = $this.outerHeight();
 
            // Check if above or below viewport
            if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
                return;
            }
 
            var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
 
                 // Apply the Y Background Position to Set the Parallax Effect
                $this.css('background-position', 'center ' + yBgPosition + 'px');
                
            });
        });
    }
}(jQuery));

$('.bg-1,.bg-3').parallax({
    speed : 0.15
});