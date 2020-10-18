<template>
  <div class="about-more-autor">
    <ul class="nav nav-tabs">
      <li class="active">
        <a href="#about-autor" data-toggle="tab">About The Autor</a>
      </li>
      <li>
        <a href="#more-autor" data-toggle="tab">More From Autor</a>
      </li>
    </ul>

    <div class="tab-content">

      <div class="tab-pane active" id="about-autor">
        <div class="autor-box">
          <img src="/upload/users/avatar1.jpg" alt="">
          <div class="autor-content">
            <div class="autor-title">
              <h1><span>Jane Smith</span><a href="autor-details.html">18 Posts</a></h1>
              <ul class="autor-social">
                <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#" class="google"><i class="fa fa-google-plus"></i></a></li>
                <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#" class="youtube"><i class="fa fa-youtube"></i></a></li>
                <li><a href="#" class="instagram"><i class="fa fa-instagram"></i></a></li>
                <li><a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a></li>
                <li><a href="#" class="dribble"><i class="fa fa-dribbble"></i></a></li>
              </ul>
            </div>
            <p>
              Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem. Nullam quis massa sit amet nibh viverra malesuada.
            </p>
          </div>
        </div>
      </div>

      <div class="tab-pane" id="more-autor">
        <div class="more-autor-posts">

          <div class="news-post image-post3">
            <img src="/upload/news-posts/gal1.jpg" alt="">
            <div class="hover-box">
              <h2><a href="single-post.html">Donec odio. Quisque volutpat mattis eros.</a></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
              </ul>
            </div>
          </div>

          <div class="news-post image-post3">
            <img src="/upload/news-posts/gal2.jpg" alt="">
            <div class="hover-box">
              <h2><a href="single-post.html">Nullam malesuada erat ut turpis. </a></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
              </ul>
            </div>
          </div>

          <div class="news-post image-post3">
            <img src="/upload/news-posts/gal3.jpg" alt="">
            <div class="hover-box">
              <h2><a href="single-post.html">Suspendisse urna nibh.</a></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
              </ul>
            </div>
          </div>

          <div class="news-post image-post3">
            <img src="/upload/news-posts/gal4.jpg" alt="">
            <div class="hover-box">
              <h2><a href="single-post.html">Donec nec justo eget felis facilisis fermentum. Aliquam </a></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  props: {
    author: {
      type: Object,
      default: null,
      required: true
    }
  }
}
</script>
