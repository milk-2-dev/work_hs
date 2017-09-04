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
    // Single athlete SPONSORS
    $("#sa-sponsors").owlCarousel({
        items: 4,
        loop: true,
        lazyLoad: true,
        margin: 30,
        autoplay: true,
        autoplayHoverPause: true,
        nav: true,
        navText: [
            "<img src='/img/owl-prev.png'>",
            "<img src='/img/owl-next.png'>"
        ]
    });
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



    //scroll to link
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

    //Calendar page
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
        nav: true,
        navText: [
            "<i class='icon icon-calendar-left'></i>",
            "<i class='icon icon-calendar-right'></i>"
        ]
    }).data('owlCarousel');


    //profile page prof-image
    var owl = $("#profile-img-slider").owlCarousel({
        items: 3,
        slideSpeed: 500,
        autoplay: true,
        autoplayTimeout: 4500,
        loop: false,
        mouseDrag: true,
        singleItem: true,
        dots: false,
        margin: 2,
        nav: true,
        navText: [
            "<i class='icon icon-slider-nav-left'></i>",
            "<i class='icon icon-slider-nav'></i>"
        ],
        responsiveClass: true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1200:{
                items:3
            }
        }
    }).data('owlCarousel');


    //profile page prof-news
    var owl = $("#profile-news-slider").owlCarousel({
        items: 4,
        slideSpeed: 500,
        autoplay: false,
        //autoplayTimeout: 4500,
        loop: false,
        mouseDrag: true,
        singleItem: true,
        dots: true,
        margin: 0,
        nav: true,
        navText: [
            "<i class='icon icon-slider-nav2-left'></i>",
            "<i class='icon icon-slider-nav2'></i>"
        ],

        owl2row: true,
        owl2rowTarget: 'slider__item',
        owl2rowContainer: 'owl2row-item',
        owl2rowDirection: 'utd',
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
                owl2row: false,
            },
            768:{
                items:1,
                owl2row: false,
            },
            992:{
                items:2,
                owl2row: false,
            },
            1200:{
                items:4
            }
        }
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

    $('.collapse-toggle').on('click', function(){
        if( !$(this).parent().hasClass("open")){
            var rezult = 0;

            $(this).parent().find('.collapse-wrap >div').each(function() {
                var blockHeight = $(this).outerHeight(true);

                rezult = rezult + blockHeight;
                return rezult;
            });

            $('.collapse-wrap').css('height', rezult);

            $(this).parent().addClass('open');
        }

        else {
            $('.collapse-wrap').css('height', 0);
            $(this).parent().removeClass('open');
        }
    })

    //Dynamic margin for header
    function marginTopHeader(){
        var headerHeight = $('.header').outerHeight(true);

        $('.margin-top').css('padding-top', headerHeight);
    }

    marginTopHeader();

    //Hiding header on mob
    function ReverseFixedHeader() {
        var myWidth = $('body').innerWidth();
        if (myWidth < 768) {
            var heightScrollLocal, heightScroll = 0;
            $(window).on("scroll", function() {
                if ($(window).scrollTop() > 95){
                    heightScroll = $(this).scrollTop();
                    if(heightScroll > heightScrollLocal){
                        $('.header').addClass('fixed--hide');
                    }
                    else {
                        $('.header').removeClass('fixed--hide');
                    }
                    heightScrollLocal = heightScroll;
                }
            });
        }
    }

    ReverseFixedHeader();


});

$(window).resize(function(){
    setSaHeight($("#sa-video-slider"));
});


