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