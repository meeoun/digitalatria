<template>
  <div class="block-content">

  <!-- grid box -->
  <div class="grid-box">

    <div class="title-section">
      <h1><span>Top Articles</span></h1>
    </div>

    <div class="news-post standard-post2">
      <div class="post-gallery">
        <img src="/upload/news-posts/1.jpg" alt="">
        <div class="rate-level">
          <p><span>9.5</span> Amazing</p>
        </div>
      </div>
      <div v-for="index in 1" :key="index" class="post-title" v-if="posts">
        <h2><a href="single-post.html">{{ posts[index].title}}</a></h2>
        <ul class="post-tags">
          <li><i class="fa fa-clock-o"></i>27 may 2013</li>
          <li><i class="fa fa-user"></i>by <a href="#">John Doe</a></li>
          <li><a href="#"><i class="fa fa-comments-o"></i><span>23</span></a></li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <ul class="list-posts">
          <li v-for="index in 3" :key="index" v-if="posts[index]">
            <img src="/upload/news-posts/list1.jpg" alt="">
            <div class="post-content">
              <h2><a href="single-post.html">{{posts[index].title}}</a></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <ul class="list-posts">
          <li v-for="index in 3":key="index" v-if="posts[index+2]">
            <img src="/upload/news-posts/list4.jpg" alt="">
            <div class="post-content">
              <h2><a href="single-post.html">{{posts[index+2].title}} </a></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
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
    let top = "https://jsonplaceholder.typicode.com/posts?_limit=6"
    const requestOne = axios.get(top);
    axios.all([requestOne]).then(axios.spread((...responses) => {
      this.posts = responses[0].data
      // use/access the results
    })).catch(errors => {
      // react on errors.
    })
  }
}


</script>
