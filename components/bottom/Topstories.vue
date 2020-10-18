<template>
  <div class="block-content">

  <!-- grid box -->
  <div class="grid-box">

    <div class="title-section">
      <h1><span>Top Articles</span></h1>
    </div>

    <div v-for="index in 1" :key="index"  class="news-post standard-post2" v-if="posts">
      <div class="post-gallery">
        <img :src=posts[index].images.banner.dimension_770_200.url :alt=posts[index].images.banner.dimension_770_200.name>
        <div class="rate-level" v-if="posts[index] === 'type'">
          <p><span>{{posts[index].average_score}}</span>{{posts[index].score_description}}</p>
        </div>
      </div>
      <div class="post-title">
        <h2><nuxt-link :to="'/'+posts[index].type+'/'+posts[index].slug">{{ posts[index].title}}</nuxt-link></h2>
        <ul class="post-tags">
          <li><i class="fa fa-clock-o"></i>{{posts[index].dates.created}}</li>
          <li><i class="fa fa-user"></i>by <a href="#">{{posts[index].author.name}}</a></li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <ul class="list-posts">
          <li v-for="index in 3" :key="index" v-if="posts[index]">
            <img :src=posts[index].images.main.dimension_100_80.url :alt=posts[index].images.main.dimension_100_80.name>
            <div class="post-content">
              <h2><nuxt-link :to="'/'+posts[index].type+'/'+posts[index].slug">{{ posts[index].title}}</nuxt-link></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>{{posts[index].dates.created}}</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <ul class="list-posts">
          <li v-for="index in 3" :key="index" v-if="posts[index+2]">
            <img :src=posts[index+2].images.main.dimension_100_80.url :alt=posts[index+2].images.main.dimension_100_80.name>
            <div class="post-content">
              <h2><nuxt-link :to="'/'+posts[index+2].type+'/'+posts[index+2].slug">{{ posts[index+2].title}}</nuxt-link></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>{{posts[index+2].dates.created}}</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>

  </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: ''
    }
  },
  mounted() {
    let top = `${this.$config.baseURL}/api/posts?published_at!=null&sort_by!=views&limit=10&assets`
    const requestOne = axios.get(top);
    axios.all([requestOne]).then(axios.spread((...responses) => {
      this.posts = responses[0].data.data
      // use/access the results
    })).catch(errors => {
      // react on errors.
    })
  }
}


</script>
