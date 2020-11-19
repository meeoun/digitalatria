<template>
  <header class="clearfix">
    <nav class="navbar navbar-default navbar-static-top" role="navigation">

      <!-- Top line -->
      <div class="top-line" style="height: 30px; padding: 0px;">
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <ul class="top-line-list">
                <li><nuxt-link to="/login">Login</nuxt-link></li>
                <li><nuxt-link to="/register">Register</nuxt-link></li>
              </ul>
            </div>
            <div class="col-md-3">
              <!--  <NavSocial /> -->
            </div>
          </div>
        </div>
      </div>
      <!-- End Top line -->

      <!-- Logo & advertisement -->
      <div class="logo-advertisement">
        <div class="container">

          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header"  style="height: 95px">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <nuxt-link class="navbar-brand" to="/"><img src="/images/NewLogo.PNG" alt="Logo"></nuxt-link>
          </div>

         <NavAdvertisement />
        </div>
      </div>
      <!-- End Logo & advertisement -->
      <!-- navbar list container -->
      <div class="nav-list-container">
        <div class="container">
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-left">

              <li><nuxt-link to="/">Home</nuxt-link></li>
              <li><nuxt-link to="/news">News</nuxt-link></li>
              <li class="drop-arrow"><nuxt-link to="/reviews">Reviews</nuxt-link>
              <NavReviews :reviews="reviews" />
              </li>
              <li class="drop-arrow"><nuxt-link to="/tutorials">Tutorials</nuxt-link>
              <NavTutorials :tutorials="tutorials" />
              </li>
              <li><nuxt-link to="/authors">Authors</nuxt-link></li>
              <li><nuxt-link to="/contact">Contact Us</nuxt-link></li>
            </ul>
          <NavSearch />
          </div>
          <!-- /.navbar-collapse -->
        </div>
      </div>
      <!-- End navbar list container -->

    </nav>
  </header>
</template>
<script>

import axios from "axios"
import {mapState} from "vuex";

export default {
  computed: mapState({
    reviews: state => state.layout.navigation.reviews,
    tutorials: state => state.layout.navigation.tutorials
  }),mounted() {
    try {
      let owlWrap = $('.owl-wrapper');

      if (owlWrap.length > 0) {

        if (jQuery().owlCarousel) {
          owlWrap.each(function(){

            let carousel= $(this).find('.owl-carousel'),
              dataNum = $(this).find('.owl-carousel').attr('data-num'),
              dataNum2,
              dataNum3;

            if ( dataNum === 1 ) {
              dataNum2 = 1;
              dataNum3 = 1;
            } else if ( dataNum === 2 ) {
              dataNum2 = 2;
              dataNum3 = dataNum - 1;
            } else {
              dataNum2 = dataNum - 1;
              dataNum3 = dataNum - 2;
            }

            carousel.owlCarousel({
              autoPlay: 10000,
              navigation : true,
              items : dataNum,
              itemsDesktop : [1199,dataNum2],
              itemsDesktopSmall : [979,dataNum3]
            }).bind(this);

          });
        }
      }

    } catch(err) {

    }

    (function() {

      let docElem = document.documentElement,
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
        let sy = scrollY();
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


  },updated: function () {
    this.$nextTick(function () {


    })




  }


}
</script>
