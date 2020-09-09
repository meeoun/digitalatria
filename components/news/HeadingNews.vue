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
                <img :src=$config.baseURL+post.front_page_carousel.url :alt=post.front_page_carousel.name>
                <div class="hover-box">
                  <div class="inner-hover">
                    <nuxt-link class="category-post" :to="'/'+post.type+'/'">{{post.type}}</nuxt-link>
                    <h2><nuxt-link :to="'/'+post.type+'/'+post.slug">{{post.title}}</nuxt-link></h2>
                    <ul class="post-tags">
                      <li><i class="fa fa-clock-o"></i>{{post.publish_date}}</li>
                      <li><i class="fa fa-user"></i>by <a href="#">{{post.author.name}}</a></li>
                      <li><i class="fa fa-eye"></i>{{post.views}}</li>
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
    console.log(this.posts[0])
  }
}
</script>
