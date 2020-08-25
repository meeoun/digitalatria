<template>
  <div>
    <Nav />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Nav from '~/components/navigation/Nav'
import Footer from '@/components/footer/Footer'
export default {
  components:{
    Nav,
    Footer
  },
  mounted() {
    "use strict";

    /* global google: false */
    /*jshint -W018 */

    /*-------------------------------------------------*/
    /* =  portfolio isotope
    /*-------------------------------------------------*/

    var winDow = $(window);
    // Needed variables
    var $container=$('.iso-call');
    var $filter=$('.filter');

    try{
      $container.imagesLoaded( function(){
        // init
        winDow.trigger('resize');
        $container.isotope({
          filter:'*',
          layoutMode:'masonry',
          itemSelector: '.iso-call > div',
          masonry: {
            columnWidth: '.default-size'
          },
          animationOptions:{
            duration:750,
            easing:'linear'
          }
        });
      });
    } catch(err) {
    }

    winDow.on('resize', function(){
      var selector = $filter.find('a.active').attr('data-filter');

      try {
        $container.isotope({
          filter	: selector,
          animationOptions: {
            duration: 750,
            easing	: 'linear',
            queue	: false,
          }
        });
      } catch(err) {
      }
      return false;
    });

    // Isotope Filter
    $filter.find('a').on('on', function(){
      var selector = $(this).attr('data-filter');

      try {
        $container.isotope({
          filter	: selector,
          animationOptions: {
            duration: 750,
            easing	: 'linear',
            queue	: false,
          }
        });
      } catch(err) {

      }
      return false;
    });


    var filterItemA	= $('.filter li a');

    filterItemA.on('click', function(){
      var $this = $(this);
      if ( !$this.hasClass('active')) {
        filterItemA.removeClass('active');
        $this.addClass('active');
      }
    });

    $('#container').addClass('active');
    $('.iso-call').css('opacity', 0);
    $('.iso-call').imagesLoaded( function(){
      $('.iso-call').css('opacity', 1);
    });


    /*-------------------------------------------------*/
    /* = bxslider
    /*-------------------------------------------------*/

    try {
      $('.bxslider').bxSlider({
        mode: 'fade',
        auto: true
      });

      $('.big-bxslider').bxSlider({
        mode: 'horizontal',
        auto: true
      });

      $('.slider-call').bxSlider({
        pagerCustom: '#bx-pager'
      });

      $('.slider-call2').bxSlider({
        pagerCustom: '#bx-pager2'
      });


    } catch(err) {
    }

    /* ---------------------------------------------------------------------- */
    /*	magnific-popup
    /* ---------------------------------------------------------------------- */

    try {
      // Example with multiple objects
      $('.zoom').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true
        }
      });

    } catch(err) {

    }

    try {
      // Example with multiple objects
      $('.video-link').magnificPopup({
        type: 'iframe'
      });
    } catch(err) {

    }

    try {
      var magnLink = $('.log-in-popup');
      magnLink.magnificPopup({
        closeBtnInside:true
      });
    } catch(err) {

    }

    /*-------------------------------------------------*/
    /* =  comming soon & error height fix
    /*-------------------------------------------------*/

    /*$('.error-section, .comming-soon-section').css('min-height', $(window).height() - $('.navbar-default').height());*/

    try {

      $('#clock').countdown("2016/04/29", function(event) {
        var $this = $(this);
        switch(event.type) {
          case "seconds":
          case "minutes":
          case "hours":
          case "days":
          case "daysLeft":
            $this.find('span#'+event.type).html(event.value);
            break;
          case "finished":
            $this.hide();
            break;
        }
      });

    } catch(err) {

    }

    /*-------------------------------------------------*/
    /* = skills animate
    /*-------------------------------------------------*/

    try{

      var skillBar = $('.review-box');
      skillBar.appear(function() {

        var animateElement = $(".meter > p");
        animateElement.each(function() {
          $(this)
            .data("origWidth", $(this).width())
            .width(0)
            .animate({
              width: $(this).data("origWidth")
            }, 1200);
        });

      });
    } catch(err) {
    }

    /* ---------------------------------------------------------------------- */
    /*	register login forms
    /* ---------------------------------------------------------------------- */

    $('.register-line a').on('click', function(event){
      event.preventDefault();
      $('form.login-form').slideUp(400);
      $('form.register-form').slideDown(400);
    });

    $('a.lost-password').on('click', function(event){
      event.preventDefault();
      $('form.login-form').slideUp(400);
      $('form.lost-password-form').slideDown(400);
    });

    $('.login-line a').on('click', function(){
      console.log("clicked");
      $('form.lost-password-form').slideUp(400);
      $('form.register-form').slideUp(400);
      $('form.login-form').slideDown(400);
    });

    /* ---------------------------------------------------------------------- */
    /*	Contact Map
    /* ---------------------------------------------------------------------- */

    var contact = {"lat":"-38.3945495", "lon":"144.9187974"}; //Change a map coordinate here!-38.3945495,144.9187974

    try {
      var mapContainer = $('#map');
      mapContainer.gmap3({
          action: 'addMarker',
          marker:{
            options:{
              icon : new google.maps.MarkerImage('images/marker.png')
            }
          },
          latLng: [contact.lat, contact.lon],
          map:{
            center: [contact.lat, contact.lon],
            zoom: 10
          },
        },
        {action: 'setOptions', args:[{scrollwheel:false}]}
      );
    } catch(err) {

    }

    /* ---------------------------------------------------------------------- */
    /*	Header animate after scroll
    /* ---------------------------------------------------------------------- */

    (function() {

      var docElem = document.documentElement,
        didScroll = false,
        changeHeaderOn = 300;
      document.querySelector( 'header' );
      function init() {
        window.addEventListener( 'scroll', function() {
          if( !didScroll ) {
            didScroll = true;
            setTimeout( scrollPage, 100 );
          }
        }, false );
      }

      function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
          $( 'header' ).addClass('active');
        }
        else {
          $( 'header' ).removeClass('active');
        }
        didScroll = false;
      }

      function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
      }

      init();

    })();

  }

}
</script>


