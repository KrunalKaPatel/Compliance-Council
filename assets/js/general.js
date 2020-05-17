$(document).ready(function(){

	/* Video player JS */
	
    $( ".video" ).hide();
    jQuery('.play').click(function(){
        jQuery('.video-player').slideToggle(function() {
            $( ".play" ).hide();
            $( ".video" ).show();        
          });
    });
/*
    jQuery(".fa-times" ).click(function() {
        jQuery( ".nav-menu" ).slideToggle(function() {
            $( ".fa-times" ).hide();
            $( ".fa-bars" ).show();
          });
    });*/


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
				breakpoint: 487,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
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
                slidesToShow: 2,
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
                }
            }
        ]
    });

    $( ".datepicker" ).datepicker();
});