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

  }

}
</script>


