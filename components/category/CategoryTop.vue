<template>
  <div class="category-posts-head">
    <div class="news-post image-post" v-if="posts[0]">
      <img :src=posts[0].images.banner.dimension_770_310.url :alt=posts[0].images.banner.dimension_770_310.name>
      <div class="hover-box">
        <div class="inner-hover">
          <div class="rate-level" v-if="posts[0].type === 'reviews'">
            <p><span>{{posts[0].average_score}}</span> {{posts[0].score_description}}</p>
          </div>
          <h2><nuxt-link :to="'/'+posts[0].type+'/'+posts[0].slug">{{posts[0].title}}</nuxt-link></h2>
          <ul class="post-tags">
            <li><i class="fa fa-clock-o"></i>{{posts[0].dates.created}}</li>
            <li><i class="fa fa-user"></i>by <nuxt-link :to="'/authors/'+posts[0].author.slug">{{posts[0].author.name}}</nuxt-link></li>
            <li><i class="fa fa-eye"></i>{{posts[0].views}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="news-post image-post" v-if="posts[1]">
          <img :src=posts[1].images.main.dimension_380_250.url :alt=posts[1].images.main.dimension_380_250.name>
          <div class="hover-box">
            <div class="inner-hover">
              <h2><nuxt-link :to="'/'+posts[1].type+'/'+posts[1].slug">{{posts[1].title}}</nuxt-link></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>{{posts[1].dates.created}}</li>
                <li><i class="fa fa-user"></i>by <nuxt-link :to="'/authors/'+posts[1].author.slug">{{posts[1].author.name}}</nuxt-link></li>
                <li><i class="fa fa-eye"></i>{{posts[1].comments}}</li>
              </ul>
              <p>{{posts[1].excerpt}} </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="news-post image-post" v-if="posts[2]">
          <img :src=posts[2].images.main.dimension_380_250.url :alt=posts[2].images.main.dimension_380_250.name>
          <div class="hover-box">
            <div class="inner-hover">
              <h2><nuxt-link :to="'/'+posts[2].type+'/'+posts[2].slug">{{posts[2].title}}</nuxt-link></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>{{posts[2].dates.created}}</li>
                <li><i class="fa fa-user"></i>by <nuxt-link :to="'/authors/'+posts[2].author.slug">{{posts[2].author.name}}</nuxt-link></li>
                <li><i class="fa fa-eye"></i>{{posts[2].comments}}</li>
              </ul>
              <p>{{posts[2].excerpt}} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  props: ['posts'],

}

</script>
