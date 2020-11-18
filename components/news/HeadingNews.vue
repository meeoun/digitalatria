<template>

  <section class="heading-news3">

    <div class="heading-news-box">
      <div class="container">
        <h1>Most Recent Reviews</h1>
      </div>
      <div class="owl-wrapper">
        <div class="owl-carousel" data-num="4">

          <div v-for="post in posts" :key="post.id" class="item">
            <div class="news-post image-post">
              <div class="post-gallery">
                <img :src=post.images.main.dimension_400_430.url :alt=post.images.main.dimension_400_430.name>
                <div class="hover-box">
                  <div class="inner-hover">
                    <nuxt-link class="category-post" :to="'/'+post.type+'/'">{{post.type}}</nuxt-link>
                    <h2><nuxt-link :to="'/'+post.type+'/'+post.slug">{{post.title}}</nuxt-link></h2>
                    <ul class="post-tags">
                      <li><i class="fa fa-clock-o"></i>{{post.dates.created}}</li>
                      <li><i class="fa fa-user"></i>by <nuxt-link :to="'/authors/'+post.author.slug">{{post.author.name}}</nuxt-link></li>
                      <li><i class="fa fa-eye"></i>{{post.views}}</li>


                    </ul>
                    <p>{{post.body}}</p>
                    <div v-if="post.type === 'reviews'" class="rate-level">
                      <p><span>{{post.average_score}}</span> {{post.score_description}}</p>
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

  props: { posts: {
    type: Array,
    default: null
  }
  },

}

</script>
