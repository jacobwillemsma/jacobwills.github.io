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

    // Parallax

    $('.content-23').each(function() {
        if(! isMobile.any())
            $(this).parallax('50%', 0.3, true);
        else
            $(this).css('background-attachment', 'initial');
    });


    //Custom video-gallery

    $('.header-23-sub#second').hide();

    $('.choose-video .second').click(function(){
        $(this).addClass('active');
        $('.choose-video .first').removeClass('active');
        $('.header-23-sub#first').hide();
        $('.header-23-sub#second').show();

    });
    $('.choose-video .first').click(function(){
        $(this).addClass('active');
        $('.choose-video .second').removeClass('active');
        $('.header-23-sub#second').hide();
        $('.header-23-sub#first').show();
    });


    $('body').prepend($('.mask, .popup-video-1').not('pre .mask, pre .popup-video'));
    $('.header-23 .mask, .header-23 .popup-video-1').not('pre .mask, pre .popup-video').detach();
    var iframe = $('#pPlayer1')[0];
    var player = $f(iframe);
    player.addEvent('ready', function() {});
    $('#second .play').on('click', function(evt) {
        evt.preventDefault();
        $('.popup-video-1').addClass('shown');
        $('.popup-video-1, .mask').fadeIn('slow', function() {
            player.api('play')
        });
        $('.mask').on('click', function() {
            player.api('pause');
            $('.popup-video-1, .mask').fadeOut('slow', function() {
                $('.popup-video-1').removeClass('shown');
            });
        });
    });
});