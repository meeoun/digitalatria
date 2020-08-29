<template>
  <header class="clearfix">
    <nav class="navbar navbar-default navbar-static-top" role="navigation">

      <!-- Top line -->
      <div class="top-line">
        <div class="container">
          <div class="row">
            <div class="col-md-9">
            </div>
            <div class="col-md-3">
              <NavSocial />
            </div>
          </div>
        </div>
      </div>
      <!-- End Top line -->

      <!-- Logo & advertisement -->
      <div class="logo-advertisement">
        <div class="container">

          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index.html"><img src="/images/logo.png" alt=""></a>
          </div>

         <NavAdd />
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
              <li><nuxt-link :to="{path: '/'+newsLink, params: { category: newsLink } }">News</nuxt-link></li>
              <NavReviews :reviews="reviews" />
              <NavTutorials :tutorials="tutorials" />
              <li><nuxt-link to="/authors">Authors</nuxt-link></li>
              <li><a href="game-category.html">Contact Us</a></li>
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

import NavSocial from "@/components/navigation/NavSocial";
import NavReviews from "@/components/navigation/NavReviews"
import NavTutorials from "@/components/navigation/NavTutorials"
import NavSearch from "@/components/navigation/NavSearch"
import NavAdd from "@/components/navigation/NavAdvertisement"
import axios from "axios"

export default {
  components: {
    NavSocial,
    NavReviews,
    NavTutorials,
    NavSearch,
    NavAdd

  },
  data(){
    return{
      reviews: '',
      tutorials: '',
      newsLink: 'news'
    }

  },
  async mounted() {

    let reviews = "https://jsonplaceholder.typicode.com/posts?_limit=5"
    let tutorials = "https://jsonplaceholder.typicode.com/posts?_limit=5"
    const requestOne = axios.get(reviews);
    const requestTwo = axios.get(tutorials)
    axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
      this.reviews = responses[0]
      this.tutorials = responses[1]
      // use/access the results
    })).catch(errors => {
      // react on errors.
    })


  },updated: function () {
    this.$nextTick(function () {
      try {
        var owlWrap = $('.owl-wrapper');

        if (owlWrap.length > 0) {

          if (jQuery().owlCarousel) {
            owlWrap.each(function(){

              var carousel= $(this).find('.owl-carousel'),
                dataNum = $(this).find('.owl-carousel').attr('data-num'),
                dataNum2,
                dataNum3;

              if ( dataNum == 1 ) {
                dataNum2 = 1;
                dataNum3 = 1;
              } else if ( dataNum == 2 ) {
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
    })
  }


}
</script>
