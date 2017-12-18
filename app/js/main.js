function setSaHeight(saVideo) {
    saVideo.find('.sa-video__item').css({
        height: saVideo.find('.owl-item').width(),
    });
}



$(document).ready(function(){

    // Single blog page - slider
    $("#single-blog-page").owlCarousel({
        items: 1,
        loop: true,
        lazyLoad: true,
        autoplay: true,
        autoplayHoverPause: true,
        nav: true,
        navText: [
            "<img src='/img/owl-prev.png'>",
            "<img src='/img/owl-next.png'>"
        ]
    });

    // Athlete list - slider
    $("#athletes-slider").owlCarousel({
        items: 1,
        loop: true,
        lazyLoad: true,
        autoplay: true,
        autoplayHoverPause: true,
        nav: true,
        navText: [
            "<img src='/img/owl-prev.png'>",
            "<img src='/img/owl-next.png'>"
        ]
    });

    // Athlete list - slider
    $("#sa-video-slider").owlCarousel({
        autoplayHoverPause: true,
        items: 3,
        autoplay: true,
        loop: true,
        margin: 0,
        video: true,
        lazyLoad: false,
        nav: true,
        navText: [
            "<i class='fa fa-chevron-left' aria-hidden='true'></i>",
            "<i class='fa fa-chevron-right' aria-hidden='true'></i>"
        ]
    });

    // Single athlete career history
    $("#sa-carier-history").owlCarousel({
        items: 4,
        loop: false,
        lazyLoad: true,
        mouseDrag: true,
        singleItem: true,
        autoplay: false,
        autoplayHoverPause: true,
        nav: true,
        //nestedItemSelector: "slider__item",
        navText: [
            "<i class='icon icon-owl-prev'></i>",
            "<i class='icon icon-owl-next'></i>"
        ]
    });

    // Single athlete ACHIEVEMENTS
    $("#sa-achievements").owlCarousel({
        items: 4,
        loop: false,
        lazyLoad: true,
        mouseDrag: true,
        singleItem: true,
        autoplay: false,
        autoplayHoverPause: true,
        nav: true,
        navText: [
            "<i class='icon icon-owl-prev'></i>",
            "<i class='icon icon-owl-next'></i>"
        ]
    });

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

    setSaHeight($("#sa-video-slider"));

    // single-athlete page social media progress
    $('.social-media__progres-item').each(function(){
        var smProgress = $(this).data('progres');
        $(this).css({
            width: smProgress + '%',
        });
    });

    // Single athlete video player
    var videoPlayer;
    $('.show-modal').click(function(){
        var modalName = $(this).data('modal');
        if (modalName == 'youtube-modal') {
            var videoID = $(this).data('video');
            $('.youtube-set-video').attr('data-video-id', videoID);
        }
        $('#'+modalName).modal('show');
        if (modalName == 'youtube-modal') {
            videoPlayer = plyr.setup(document.querySelector('.js-player'));
        }
    });

    $('#youtube-modal').on('hide.bs.modal', function (e) {
        videoPlayer[0].destroy();
        $('.youtube-set-video').removeAttr('data-video-id');
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
    function ScrollToLink(indent) {
        $(".anchor").on("click", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;

            if(indent){top = top - indent}

            $('body,html').animate({scrollTop: top}, 1500);
        });
    }

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

    //search page slider
    var owl = $("#search-top-slider").owlCarousel({
        items: 1,
        slideSpeed: 500,
        autoplay: false,
        autoplayTimeout: 4500,
        loop: false,
        mouseDrag: true,
        singleItem: true,
        dots: false,
        margin: 0,
        nav: true,
        navText: [
            "<i class='icon icon-slider-nav-left'></i>",
            "<i class='icon icon-slider-nav'></i>"
        ]
    }).data('owlCarousel');

    //individual campaign slider
    var owl = $("#individual-campaign__slider-images").owlCarousel({
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

    $("#individual-campaign__products_slider").owlCarousel({
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

    //campaign create tasks
    var owl = $(".individual-campaign__task-items .owl-carousel").owlCarousel({
        items: 5,
        slideSpeed: 500,
        //autoplay: true,
        //autoplayTimeout: 4500,
        loop: false,
        mouseDrag: true,
        singleItem: true,
        dots: false,
        margin: 0,
        nav: true,
        navText: [
            "<i class='icon icon-calendar-left'></i>",
            "<i class='icon icon-calendar-right'></i>"
        ],
        responsiveClass: true,
        responsive:{
            0:{
                items:3
            },
            768:{
                items:5
            },
            1200:{
                items:5
            }
        }
    }).data('owlCarousel');


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

    //Hiding header on mob
    function ReverseFixedHeader() {
        return{
            set:function(){
                var heightScrollLocal, heightScroll = 0;
                $('.header').addClass('tablet-header');
                $(window).on("scroll", function() {
                    if ($(window).scrollTop() > 95 & $('.header').hasClass('tablet-header')){
                        heightScroll = $(this).scrollTop();
                        if(heightScroll > heightScrollLocal){
                            $('.header').addClass('fixed--hide');

                            var LocalHeaderHeight = $('.header').outerHeight(true);

                            $('.fixed--hide').css('top', LocalHeaderHeight * (-1));
                        }
                        else {
                            $('.header').removeClass('fixed--hide');
                            $('.header').css('top', '0');
                        }
                        heightScrollLocal = heightScroll;
                    }
                });
            },

            reset: function(){
                $('.header').removeClass('tablet-header');
            }
        }
    }

    //for input[type="file"]

    function InputTypeFile(block){
        var wrapper = $('#' + block),
            inp = wrapper.find( "input" ),
            btn = wrapper.find( "button" ),
            lbl = wrapper.find( "div" );

        // Crutches for the :focus style:
        btn.focus(function(){
            wrapper.addClass( "focus" );
        }).blur(function(){
            wrapper.removeClass( "focus" );
        });

        // Yep, it works!
        btn.add( lbl ).click(function(){
            inp.click();
        });

        var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

        inp.change(function(){

            var file_name;
            if( file_api && inp[ 0 ].files[ 0 ] )
                file_name = inp[ 0 ].files[ 0 ].name;
            else
                file_name = inp.val().replace( "C:\\fakepath\\", '' );
            if( ! file_name.length )
                return;

            if( lbl.is( ":visible" ) ){
                lbl.text( file_name );
                btn.text( "Выбрать" );
            }else
                btn.text( file_name );
        }).change();

    };

    InputTypeFile('bannerImage');
    InputTypeFile('mainImage');
    InputTypeFile('promotedProdImage');
    InputTypeFile('campaignImage');
    InputTypeFile('imageForCampaign');
    InputTypeFile('contractFile');

    $( window ).resize(function(){
        $( ".upload-block input" ).triggerHandler( "change" );
    });


    //search form user-profile-bar

    $('.user-profile-bar__search').find('.search-prev').on('click', function(){
        $(this).parent().find('form').css('width', '300px');
        $(this).parent().find('form input').focus();
        $(this).hide();
        $(this).parent().find('.icon-close-menu').show();
    });

    $('.user-profile-bar__search').find('.icon-close-menu').on('click', function(){
        $(this).parent().find('form').css('width', '0');
        $(this).parent().find('.search-prev').show();
        $(this).hide();
    });

    //alert message
    $('.messages .close').on('click', function(){
        $('.messages').removeClass('active');
        $('.messages').addClass('close-alert');
    })

    if($('.messages').hasClass('active')){
        setTimeout(function(){
            $('.messages').addClass('close-alert');
            $('.messages').removeClass('active');
        }, 10000);
    }

    function SocialProgressBar(){
        var el = $('#social-progress-bar span');

        el.each(function(spanItem) {
            var elParam = $(this).attr('data-progress');
            $(this).css('width', elParam +'%');
        });
    }

    SocialProgressBar();

    $(window).resize(function(){
        setSaHeight($("#sa-video-slider"));
    });

    //toggle mobile chat

    function toggleMobileChat() {
        return{
            set: function(){
                $('.chat-modal__column-wrapper').addClass('open-users');
                $('.chats a').on('click', function(){
                    $('.chat-modal__column-wrapper').removeClass('open-users');
                    $('.chat-modal__column-wrapper').addClass('open-chat');
                })

                $('.mobile-chat-toggle').on('click', function(){
                    $('.chat-modal__column-wrapper').removeClass('open-chat');
                    $('.chat-modal__column-wrapper').addClass('open-users');
                })

            },

            reset: function(){
                $('.chat-modal__column-wrapper').removeClass('open-users');
                $('.chat-modal__column-wrapper').removeClass('open-chat');
            }
        }
    }

    ///responsive
    function responsive() {

        var myWidth = $('body').innerWidth();

        if (myWidth < 768) {
            if (!$('body').hasClass("tablet")) {

                marginTopHeader();
                ReverseFixedHeader().set();
                ScrollToLink();
                toggleMobileChat().set();

                $('body').removeClass("desctop");
                $('body').addClass("tablet");
            }
        } else {
            if (!$('body').hasClass("desctop")) {
                marginTopHeader();
                ReverseFixedHeader().reset();
                ScrollToLink(107);
                toggleMobileChat().reset();

                $('body').removeClass("tablet");
                $('body').addClass("desctop");
            }
        }
    }

    responsive();

    $(window).resize(function () {
        responsive();
    });


    $('.individual-campaign__task-items').each(function(){
      var el = $(this);
      // console.log(el);
      $(this).find('.individual-campaign__task-item').hover(function(){
        // console.log(el);
        var title = $.trim($(this).find('.task-title').text());
        // console.log(title);
        if (!title) {
          title = 'here is no title';
        };
        $(el).find('.task-item__tool-tip').addClass("task-item__tool-tip--show");
        $(el).find('.task-item__tool-tip').find('.task-item__tool-tip__body').html(title);
      },
      function(){
        // console.log(el);
        $(el).find('.task-item__tool-tip').removeClass("task-item__tool-tip--show");
      }
      );
    });
    $('.athletes-list__item-text').ThreeDots({ max_rows:2 });



});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
