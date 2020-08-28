<template>

  <section class="heading-news3">

    <div class="heading-news-box">
      <div class="container">
        <h1>Popular Games Out Now</h1>
      </div>
      <div class="owl-wrapper">
        <div class="owl-carousel" data-num="4">

          <div v-for="post in posts" :key="post.id" class="item">
            <div class="news-post image-post">
              <div class="post-gallery">
                <img src="/upload/news-posts/h9.jpg" alt="">
                <div class="hover-box">
                  <div class="inner-hover">
                    <a class="category-post" href="game-category.html">adventure</a>
                    <h2><a href="single-post.html">{{post.title}}</a></h2>
                    <ul class="post-tags">
                      <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                      <li><i class="fa fa-user"></i>by <a href="#">John Doe</a></li>
                      <li><a href="#"><i class="fa fa-comments-o"></i><span>23</span></a></li>
                      <li><i class="fa fa-eye"></i>872</li>
                    </ul>
                    <p>{{post.body}}</p>
                    <div class="rate-level">
                      <p><span>9.2</span> Amazing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

  </section>
</template>
<script>
export default {
  props:['posts'],
  mounted() {

  }
}
</script>
