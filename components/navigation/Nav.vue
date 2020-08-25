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
        <ul class="social-icons">
          <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
          <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
          <li><a class="rss" href="#"><i class="fa fa-rss"></i></a></li>
          <li><a class="google" href="#"><i class="fa fa-google-plus"></i></a></li>
          <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
          <li><a class="pinterest" href="#"><i class="fa fa-pinterest"></i></a></li>
        </ul>
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

    <div class="advertisement">
      <div class="desktop-advert">
        <img src="/upload/addsense/468x60.jpg" alt="">
      </div>
      <div class="tablet-advert">
        <img src="/upload/addsense/468x60.jpg" alt="">
      </div>
    </div>
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
          <div class="megadropdown">
            <div class="container">
              <div class="inner-megadropdown">

                <div class="owl-wrapper">
                  <div class="owl-carousel" data-num="5">

                    <div class="item news-post standard-post">
                      <div class="post-gallery">
                        <img src="/upload/news-posts/st1.jpg" alt="">
                        <div class="rate-level">
                          <p><span>7.4</span> Good</p>
                        </div>
                      </div>
                      <div class="post-content">
                        <h2><a href="single-post.html">Donec odio. Quisque volutpat mattis eros. </a></h2>
                        <ul class="post-tags">
                          <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                          <li><a href="#"><i class="fa fa-comments-o"></i><span>23</span></a></li>
                        </ul>
                      </div>
                    </div>

                    <div class="item news-post standard-post">
                      <div class="post-gallery">
                        <img src="/upload/news-posts/st2.jpg" alt="">
                        <div class="rate-level">
                          <p><span>7.4</span> Good</p>
                        </div>
                      </div>
                      <div class="post-content">
                        <h2><a href="single-post.html">Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. </a></h2>
                        <ul class="post-tags">
                          <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                          <li><a href="#"><i class="fa fa-comments-o"></i><span>23</span></a></li>
                        </ul>
                      </div>
                    </div>

                    <div class="item news-post standard-post">
                      <div class="post-gallery">
                        <img src="/upload/news-posts/st3.jpg" alt="">
                        <div class="rate-level">
                          <p><span>7.4</span> Good</p>
                        </div>
                      </div>
                      <div class="post-content">
                        <h2><a href="single-post.html">Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</a></h2>
                        <ul class="post-tags">
                          <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                          <li><a href="#"><i class="fa fa-comments-o"></i><span>23</span></a></li>
                        </ul>
                      </div>
                    </div>

                    <div class="item news-post standard-post">
                      <div class="post-gallery">
                        <img src="/upload/news-posts/st4.jpg" alt="">
                        <div class="rate-level">
                          <p><span>7.4</span> Good</p>
                        </div>
                      </div>
                      <div class="post-content">
                        <h2><a href="single-post.html">Donec nec justo eget felis facilisis fermentum. </a></h2>
                        <ul class="post-tags">
                          <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                          <li><a href="#"><i class="fa fa-comments-o"></i><span>23</span></a></li>
                        </ul>
                      </div>
                    </div>

                    <div class="item news-post standard-post">
                      <div class="post-gallery">
                        <img src="/upload/news-posts/st5.jpg" alt="">
                        <div class="rate-level">
                          <p><span>7.4</span> Good</p>
                        </div>
                      </div>
                      <div class="post-content">
                        <h2><a href="single-post.html">Donec nec justo eget felis facilisis fermentum. </a></h2>
                        <ul class="post-tags">
                          <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                          <li><a href="#"><i class="fa fa-comments-o"></i><span>23</span></a></li>
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </li>
        <li class="drop-arrow"><nuxt-link to="/tutorials">Tutorials</nuxt-link>
          <div class="megadropdown">
            <div class="container">
              <div class="inner-megadropdown">

                <div class="owl-wrapper">
                  <div class="owl-carousel" data-num="5">

                    <div class="item news-post standard-post">
                      <div class="post-gallery">
                        <img src="/upload/news-posts/st1.jpg" alt="">
                        <div class="rate-level">
                          <p><span>7.4</span> Good</p>
                        </div>
                      </div>
                      <div class="post-content">
                        <h2><a href="single-post.html">Donec odio. Quisque volutpat mattis eros. </a></h2>
                        <ul class="post-tags">
                          <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                          <li><a href="#"><i class="fa fa-comments-o"></i><span>23</span></a></li>
                        </ul>
                      </div>
                    </div>

                    <div class="item news-post standard-post">
                      <div class="post-gallery">
                        <img src="/upload/news-posts/st2.jpg" alt="">
                        <div class="rate-level">
                          <p><span>7.4</span> Good</p>
                        </div>
                      </div>
                      <div class="post-content">
                        <h2><a href="single-post.html">Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. </a></h2>
                        <ul class="post-tags">
                          <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                          <li><a href="#"><i class="fa fa-comments-o"></i><span>23</span></a></li>
                        </ul>
                      </div>
                    </div>

                    <div class="item news-post standard-post">
                      <div class="post-gallery">
                        <img src="/upload/news-posts/st3.jpg" alt="">
                        <div class="rate-level">
                          <p><span>7.4</span> Good</p>
                        </div>
                      </div>
                      <div class="post-content">
                        <h2><a href="single-post.html">Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</a></h2>
                        <ul class="post-tags">
                          <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                          <li><a href="#"><i class="fa fa-comments-o"></i><span>23</span></a></li>
                        </ul>
                      </div>
                    </div>

                    <div class="item news-post standard-post">
                      <div class="post-gallery">
                        <img src="/upload/news-posts/st4.jpg" alt="">
                        <div class="rate-level">
                          <p><span>7.4</span> Good</p>
                        </div>
                      </div>
                      <div class="post-content">
                        <h2><a href="single-post.html">Donec nec justo eget felis facilisis fermentum. </a></h2>
                        <ul class="post-tags">
                          <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                          <li><a href="#"><i class="fa fa-comments-o"></i><span>23</span></a></li>
                        </ul>
                      </div>
                    </div>

                    <div class="item news-post standard-post">
                      <div class="post-gallery">
                        <img src="/upload/news-posts/st5.jpg" alt="">
                        <div class="rate-level">
                          <p><span>7.4</span> Good</p>
                        </div>
                      </div>
                      <div class="post-content">
                        <h2><a href="single-post.html">Donec nec justo eget felis facilisis fermentum. </a></h2>
                        <ul class="post-tags">
                          <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                          <li><a href="#"><i class="fa fa-comments-o"></i><span>23</span></a></li>
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </li>
        <li><nuxt-link to="/authors">Authors</nuxt-link></li>
        <li><a href="game-category.html">Contact Us</a></li>
      </ul>
      <form class="navbar-form navbar-right" role="search">
        <input type="text" id="search" name="search" placeholder="Search here">
        <button type="submit" id="search-submit"><i class="fa fa-search"></i></button>
      </form>
    </div>
    <!-- /.navbar-collapse -->
  </div>
</div>
<!-- End navbar list container -->

</nav>
  </header>
</template>
<script>
export default {
  mounted() {
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
            });

          });
        }
      }

    } catch(err) {

    }
  }
}
</script>
