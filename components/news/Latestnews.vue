<template>
  <section class="feature-video">
    <div class="container">
      <div class="title-section white">
        <h1><span>Latest Reviews</span></h1>
      </div>

      <div class="features-video-box owl-wrapper">
        <div class="owl-carousel" data-num="4">

          <div class="item news-post image-post3">
            <img alt="" src="upload/news-posts/h1.jpg">
            <div class="rate-level">
              <p><span>9.2</span> Amazing</p>
            </div>
            <div class="hover-box">
              <h2><a href="single-post.html">Lorem ipsum dolor sit consectetuer adipiscing elit. Donec odio. </a></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
              </ul>
            </div>
          </div>

          <div class="item news-post image-post3">
            <img alt="" src="upload/news-posts/h2.jpg">
            <div class="rate-level">
              <p><span>7.1</span> Good</p>
            </div>
            <div class="hover-box">
              <h2><a href="single-post.html">Quisque volutpat mattis eros. </a></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
              </ul>
            </div>
          </div>

          <div class="item news-post image-post3">
            <img alt="" src="upload/news-posts/h3.jpg">
            <div class="rate-level">
              <p><span>9.2</span> Amazing</p>
            </div>
            <div class="hover-box">
              <h2><a href="single-post.html">Nullam malesuada erat ut turpis. </a></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
              </ul>
            </div>
          </div>

          <div class="item news-post image-post3">
            <img alt="" src="upload/news-posts/h4.jpg">
            <div class="rate-level">
              <p><span>5.5</span> Okay</p>
            </div>
            <div class="hover-box">
              <h2><a href="single-post.html">Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</a></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
              </ul>
            </div>
          </div>

          <div class="item news-post image-post3">
            <img alt="" src="upload/news-posts/h5.jpg">
            <div class="rate-level">
              <p><span>7.4</span> Good</p>
            </div>
            <div class="hover-box">
              <h2><a href="single-post.html">Lorem ipsum dolor sit consectetuer adipiscing elit. Donec odio. </a></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
              </ul>
            </div>
          </div>

          <div class="item news-post image-post3">
            <img alt="" src="upload/news-posts/h6.jpg">
            <div class="rate-level">
              <p><span>9.2</span> Amazing</p>
            </div>
            <div class="hover-box">
              <h2><a href="single-post.html">Quisque volutpat mattis eros. </a></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
              </ul>
            </div>
          </div>

          <div class="item news-post image-post3">
            <img alt="" src="upload/news-posts/h1.jpg">
            <div class="rate-level">
              <p><span>8.0</span> Good</p>
            </div>
            <div class="hover-box">
              <h2><a href="single-post.html">Nullam malesuada erat ut turpis. </a></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
              </ul>
            </div>
          </div>

          <div class="item news-post image-post3">
            <img alt="" src="upload/news-posts/h2.jpg">
            <div class="rate-level">
              <p><span>6.5</span> Okay</p>
            </div>
            <div class="hover-box">
              <h2><a href="single-post.html">Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</a></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

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
