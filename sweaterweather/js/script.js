jQuery(function () {
    $(window).resize(function () {
        if ($(window).height() > 600) {
            var sH = $(window).height();
        } else {
            var sH = 600;
        }
        $('.header-10-sub').css('height', sH + 'px');
    });
});

$(document).ready(function() {
  $.simpleWeather({
    location: 'Waterloo, Canada',
    woeid: '',
    unit: 'f',
    success: function(weather) {
        var temp = weather.temp;

        if (temp < 46.4) {
            // Coat
            html1 = 'it\'s frozen out there';
            html2 = 'forget the sweater, grab a coat.'

            $("#top-text").html(html1);
            $("#bottom-text").html(html2);

             // Somehow generate random number (mod it 3)
             // Random associated background image.
            var pictureNumber = temp % 3;
            console.log(pictureNumber);
            $('#background').css({'background-image':'url(assets/coat/coat' + pictureNumber + '.jpg)'});


        }

        else if (temp < 60.8) {
            // Sweater
            html1 = 'perfect weather for a hike';
            html2 = 'wear a sweater though.'

            $("#top-text").html(html1);
            $("#bottom-text").html(html2);

            var pictureNumber = temp % 3;
            console.log(pictureNumber);
            $('#background').css({'background-image':'url(assets/sweater/sweater' + pictureNumber + '.jpg)'});
        }

        else {
            // Shirt
            html1 = 'it\'s a scorcher';
            html2 = 'short sleeve kind of day.'

            $("#top-text").html(html1);
            $("#bottom-text").html(html2);

            var pictureNumber = temp % 3;
            console.log(pictureNumber);
            $('#background').css({'background-image':'url(assets/shirt/shirt' + pictureNumber + '.jpg)'});
        }
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
