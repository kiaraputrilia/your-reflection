$(document).ready(function() {

    const changeBgLink = document.getElementById('change-bg-link');
const body = document.body;



changeBgLink.addEventListener('click', () => {
  body.style.backgroundImage = "url('background.mov')";
});

    paypal.minicart.render();

    $('#intro-page').delay(1000).fadeOut(400);
    $( ".guide" ).draggable({ axis: 'x' });

    $(".info").click( function(event){
    event.preventDefault();
    if ($(".drawer").hasClass("isOpen") ) {
        $(".logo, .info").removeClass( "active" );
        $(".drawer").animate({
            top: "-671px",
            display: "block"
        }, 200);          
        $(".drawer").removeClass("isOpen");
    } else {
        $(".logo, .info").addClass( "active" );
        $(".drawer").animate({
            top: "0px",
            display: "block"
        }, 200);   
        $(".drawer").addClass("isOpen");
    }
    return false;
    });

    $(".pub-a").hover(function() {
            link_id = $(this).attr('id');
            $("html").addClass("bgfade" + link_id);
            $("#" + link_id + "-img").show();
        },
        function() {
            $("html").removeClass("bgfade" + link_id);
            $("#" + link_id + "-img").hide();
        });

    //enter bookdetail
    $('.pub-a').click(function(e) {
        link_id = $(this).attr('id');
        e.preventDefault();

        //fadein bookdetail
        $('#' + link_id + '-gallery').fadeIn({
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0',
            right: '0',
        }, 0).addClass("bg" + link_id);

        //start slideshow
        $('#' + link_id + '-gallery .box').append('<img src="./img/' + link_id + '/1.jpg"><img src="./img/' + link_id + '/2.jpg"><img src="./img/' + link_id + '/3.jpg"><img src="./img/' + link_id + '/4.png">');
    

        //next slide
        $('.box img').click(function() {
            nextSlide($(this).parents('#' + link_id + '-gallery').find('.box'));
        });

        //exit bookdetail & empty
        $('.exit').click(function(e) {

            $('#' + link_id + '-gallery').fadeOut({
                position: 'absolute',
                width: '0%',
                height: '0%',
                top: '0',
                right: '0',
            }, 0);

            $('#' + link_id + '-gallery .box').empty();
            e.preventDefault();
        });

        //initialize slideshow
        initBookdetail();

        function initBookdetail() {
            //show first image
            $('#' + link_id + '-gallery').each(function() {
                $(this).find('img:first').show(0).addClass("active");
            })
        }

        function nextSlide($slides) {
            $slides.find('img:first').appendTo($slides);
            showSlide($slides);
        }

        function showSlide($slides) {
            //hide (reset) all slides
            $slides.find('img').hide();
            //fade in next slide
            $slides.find('img:first').show(0);
        }



    });

});