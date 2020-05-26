$(document).ready(function(){

    $('#loader').hide();

	/* Video player JS */
	
    jQuery('.play').click(function(){
        $('.video-player figure').css('visibility', 'hidden');
        $('.play').css('visibility', 'hidden');
        $('.video-player .video iframe').css('visibility', 'visible');
    });


	/* JS For mobile view menu */
	$( ".fa-times" ).hide();
    $( ".nav-menu" ).hide();
    jQuery('.fa-bars').click(function(){
        jQuery('.nav-menu').slideToggle(function() {
            $( ".fa-bars" ).hide();
            $( ".fa-times" ).show();        
          });
    });

    jQuery(".fa-times" ).click(function() {
        jQuery( ".nav-menu" ).slideToggle(function() {
            $( ".fa-times" ).hide();
            $( ".fa-bars" ).show();
          });
    });

    $(".fa-bars").click(function(){
        $("body").addClass("stop-scroll");
    });
    $(".fa-times").click(function(){
    	$("body").removeClass("stop-scroll");
	});


	/* Slider for Section*/
	$('.card-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrow: false,
		dots: false,
		responsive: [
			{
				breakpoint: 774,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 490,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
				}
			}
		]
	});

    /* Company Slider*/
    $('.company-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrow: false,
        dots: false,
        responsive: [
            {
                breakpoint: 998,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 774,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 487,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                }
            }
        ]
    });

    $( ".datepicker" ).datepicker();
});


