<template>
    <div class="megadropdown">
      <div class="container">
        <div class="inner-megadropdown">

          <div class="owl-wrapper">
            <div class="owl-carousel" data-num="5">

              <div v-for="item in tutorials" :key="item.id" class="item news-post standard-post">
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

            </div>
          </div>

        </div>
      </div>
    </div>
</template>
<script>
export default {
  props: ['tutorials']
}
</script>
