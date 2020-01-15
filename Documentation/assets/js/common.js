/*
 * Author: ArtStyles (Art)
 * Template Name: Documentation
 * Version: 1.3
*/

(function($) {
	"use strict";
	
    /*-----------------------------------------------------------------
      Detect device mobile
    -------------------------------------------------------------------*/
	
    var isMobile = false; 
    if( /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('html').addClass('touch');
        isMobile = true;
    }
    else {
        $('html').addClass('no-touch');
        isMobile = false;
    }
    
	var isMacLike = /(Mac)/i.test(navigator.platform);


	/*-----------------------------------------------------------------
	  Preload
	-------------------------------------------------------------------*/

    $(window).on('load', function(){
		$('.loading').fadeOut(600);
	});


    /*-----------------------------------------------------------------
      Hamburger
    -------------------------------------------------------------------*/

    $('.hamburger').on('click', function() {
        $(this).toggleClass('is-active');
	    $('body').toggleClass('open');
    });

    // Closing the menu by Esc
    $(document).on('keyup', function(e) {
        if (e.keyCode === 27) $('.open .hamburger').click();
    });
	
	
    /*-----------------------------------------------------------------
      niceScroll
    -------------------------------------------------------------------*/		
    
	if (!isMobile) {
	    $('.prettyprint').niceScroll({
		    cursorcolor: "#424242",
		    cursorborder: "none"
	    });
    }
	
    /*-----------------------------------------------------------------
	  Masonry
	-------------------------------------------------------------------*/

	var $photoFixed=$('.grid-portfolio').isotope({
        itemSelector: '.item-portfolio',
		percentPosition: true,
		layoutMode: 'fitRows',
		transitionDuration: '0.8s',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        },
        fitRows: {
            gutter: '.gutter-sizer'
        },			
		masonry: {
			columnWidth: '.item-portfolio',
            gutter: '.gutter-sizer',
            isFitWidth: true
        }
    });
	
    $photoFixed.imagesLoaded().progress( function() {
        $photoFixed.isotope ({
	        columnWidth: '.item-portfolio',
            gutter: '.gutter-sizer',
            isAnimated: true,
			isFitWidth: true,
	        layoutMode: 'fitRows',
            fitRows: {
                gutter: '.gutter-sizer'
            }
	    });
    });


	/*-----------------------------------------------------------------
	  Anchor scroll
	-------------------------------------------------------------------*/	
	
	$('a[href^="!#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });


	/*-----------------------------------------------------------------
	  objectFit
	-------------------------------------------------------------------*/
	
	objectFitImages();
	
	
	/*-----------------------------------------------------------------
	  Code Line
	-------------------------------------------------------------------*/
	
    var $window = $(window)
    window.prettyPrint && prettyPrint()

	
	/*-----------------------------------------------------------------
	  Magnific Popup
	-------------------------------------------------------------------*/

	/*$('.grid__portfolio').magnificPopup({
        delegate: 'a',
        type: 'image',
		gallery:{
            enabled:true
        },
        removalDelay: 500,
        callbacks: {
            beforeOpen: function() {
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        closeOnContentClick: true,
        midClick: true
    });*/
	
})(jQuery);