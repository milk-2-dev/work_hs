function setSaHeight(saVideo) {
    saVideo.find('.sa-video__item').css({
        height: saVideo.find('.owl-item').width(),
    });
}

$('document').ready(function(){

    // Single blog page - slider
    // $("#single-blog-page").owlCarousel({
    //     items: 1,
    //     loop: true,
    //     lazyLoad: true,
    //     autoplay: true,
    //     autoplayHoverPause: true,
    //     nav: true,
    //     navText: [
    //         "<img src='/img/owl-prev.png'>",
    //         "<img src='/img/owl-next.png'>"
    //     ]
    // });
    //
    // // Athlete list - slider
    // $("#athletes-slider").owlCarousel({
    //     items: 1,
    //     loop: true,
    //     lazyLoad: true,
    //     autoplay: true,
    //     autoplayHoverPause: true,
    //     nav: true,
    //     navText: [
    //         "<img src='/img/owl-prev.png'>",
    //         "<img src='/img/owl-next.png'>"
    //     ]
    // });
    //
    // // Athlete list - slider
    // $("#sa-video-slider").owlCarousel({
    //     autoplayHoverPause: true,
    //     items: 3,
    //     autoplay: true,
    //     loop: true,
    //     margin: 0,
    //     video: true,
    //     lazyLoad: false,
    //     nav: true,
    //     navText: [
    //         "<i class='fa fa-chevron-left' aria-hidden='true'></i>",
    //         "<i class='fa fa-chevron-right' aria-hidden='true'></i>"
    //     ]
    // });
    //
    // // Single athlete career history
    // $("#sa-carier-history").owlCarousel({
    //     items: 4,
    //     loop: true,
    //     lazyLoad: true,
    //     autoplay: false,
    //     autoplayHoverPause: true,
    //     nav: true,
    //     navText: [
    //         "<img src='/img/owl-prev.png'>",
    //         "<img src='/img/owl-next.png'>"
    //     ]
    // });
    //
    // // Single athlete ACHIEVEMENTS
    // $("#sa-achievements").owlCarousel({
    //     items: 4,
    //     loop: true,
    //     lazyLoad: true,
    //     autoplay: false,
    //     autoplayHoverPause: true,
    //     nav: true,
    //     navText: [
    //         "<img src='/img/owl-prev.png'>",
    //         "<img src='/img/owl-next.png'>"
    //     ]
    // });
    //
    // // Single athlete SPONSORS
    // $("#sa-sponsors").owlCarousel({
    //     items: 4,
    //     loop: true,
    //     lazyLoad: true,
    //     margin: 30,
    //     autoplay: true,
    //     autoplayHoverPause: true,
    //     nav: true,
    //     navText: [
    //         "<img src='/img/owl-prev.png'>",
    //         "<img src='/img/owl-next.png'>"
    //     ]
    // });
    //
    // setSaHeight($("#sa-video-slider"));
    //
    // // single-athlete page social media progress
    // $('.social-media__progres-item').each(function(){
    //     var smProgress = $(this).data('progres');
    //     $(this).css({
    //         width: smProgress + '%',
    //     });
    // });
    //
    // // Single athlete video player
    // var videoPlayer;
    // $('.show-modal').click(function(){
    //     var modalName = $(this).data('modal');
    //     if (modalName == 'youtube-modal') {
    //         var videoID = $(this).data('video');
    //         $('.youtube-set-video').attr('data-video-id', videoID);
    //     }
    //     $('#'+modalName).modal('show');
    //     if (modalName == 'youtube-modal') {
    //         videoPlayer = plyr.setup(document.querySelector('.js-player'));
    //     }
    // });
    //
    // $('#youtube-modal').on('hide.bs.modal', function (e) {
    //     videoPlayer[0].destroy();
    //     $('.youtube-set-video').removeAttr('data-video-id');
    // });



    $(document).ready(function () {
        var pie1 = $('.pie-1'),
            pie2 = $('.pie-2'),
            pie3 = $('.pie-3');
        progressBarUpdate(95, 100, pie1);
        progressBarUpdate(47, 100, pie2);
        progressBarUpdate(33, 100, pie3);
    });


    var pie1 = $('.pie-1'),
        pie2 = $('.pie-2'),
        pie3 = $('.pie-3');
    progressBarUpdate(11, 100, pie1);
    progressBarUpdate(22, 100, pie2);
    progressBarUpdate(33, 100, pie3);


    function rotate(element, degree) {
        element.css({
            '-webkit-transform': 'rotate(' + degree + 'deg)',
            '-moz-transform': 'rotate(' + degree + 'deg)',
            '-ms-transform': 'rotate(' + degree + 'deg)',
            '-o-transform': 'rotate(' + degree + 'deg)',
            'transform': 'rotate(' + degree + 'deg)',
            'zoom': 1
        });
    }

    function progressBarUpdate(x, outOf, elem) {
        var firstHalfAngle = 180;
        var secondHalfAngle = 0;

        // caluclate the angle
        var drawAngle = x / outOf * 360;

        // calculate the angle to be displayed if each half
        if (drawAngle <= 180) {
            firstHalfAngle = drawAngle;
        } else {
            secondHalfAngle = drawAngle - 180;
        }

        // set the transition
        rotate(elem.find(".slice1"), firstHalfAngle);
        rotate(elem.find(".slice2"), secondHalfAngle);

        // set the values on the text
        elem.find(".status").html(x + "<span>%</span>");
    }



    $(".anchor").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        // top = +top -100;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

    //$("#sa-sponsors").owlCarousel({
        //     items: 4,
        //     loop: true,
        //     lazyLoad: true,
        //     margin: 30,
        //     autoplay: true,
        //     autoplayHoverPause: true,
        //     nav: true,
        //     navText: [
        //         "<img src='/img/owl-prev.png'>",
        //         "<img src='/img/owl-next.png'>"
        //     ]
        // });
    var date = new Date();
    var todayMonth = date.getMonth();

    var owl = $("#page-calendar").owlCarousel({
        items: 1,
        slideSpeed: 500,
        autoplay: false,
        //autoplayTimeout: 4500,
        loop: true,
        mouseDrag: true,
        singleItem: true,
        dots: true,
        margin: 0,
        dotsClass:'slider__pager',
        dotsData: true,
        startPosition: todayMonth,
        // responsive:true,
        // navContainer: 'page-calendar__slider-nav',
        // dotsContainer: 'page-calendar__slider-dots',
        nav: true,
        navText: [
            "<i class='icon icon-calendar-left'></i>",
            "<i class='icon icon-calendar-right'></i>"
        ]
    }).data('owlCarousel');

    function SocialProgressBar(){
        var el = $('#social-progress-bar span');

        el.each(function(spanItem) {
            var elParam = $(this).attr('data-progress');
            $(this).css('width', elParam +'%');
            $(this).find('em').text(elParam +'%');
        });
    }

    SocialProgressBar();


});

$(window).resize(function(){
    setSaHeight($("#sa-video-slider"));
});