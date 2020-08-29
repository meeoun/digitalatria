<template>
  <div class="widget tab-posts-widget">

    <ul class="nav nav-tabs" id="myTab">
      <li class="active">
        <a href="#option1" data-toggle="tab">Popular</a>
      </li>
      <li>
        <a href="#option2" data-toggle="tab">Recent</a>
      </li>
      <li>
        <a href="#option3" data-toggle="tab">Top Reviews</a>
      </li>
    </ul>

    <div class="tab-content">
      <div class="tab-pane active" id="option1">
        <ul class="list-posts">
          <li v-for="item in popular" :key="item.id">
            <img src="/upload/news-posts/listw1.jpg" alt="">
            <div class="post-content">
              <h2><a href="single-post.html">{{item.title}} </a></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
              </ul>
            </div>
          </li>

        </ul>
      </div>
      <div class="tab-pane" id="option2">
        <ul class="list-posts">
          <li v-for="item in recent" :key="item.id">
            <img src="/upload/news-posts/listw3.jpg" alt="">
            <div class="post-content">
              <h2><a href="single-post.html">{{item.title}} </a></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
              </ul>
            </div>
          </li>

        </ul>
      </div>
      <div class="tab-pane" id="option3">
        <ul class="list-posts">
          <li v-for="item in recent" :key="item.id">
            <img src="/upload/news-posts/listw4.jpg" alt="">
            <div class="post-content">
              <h2><a href="single-post.html">{{item.title}} </a></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
              </ul>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data(){
    return{
      popular: '',
      recent: '',
      top: ''
    }

  },
  async mounted() {
    let popular = "https://jsonplaceholder.typicode.com/posts?_limit=5"
    let recent = "https://jsonplaceholder.typicode.com/posts?_limit=5"
    let top = "https://jsonplaceholder.typicode.com/posts?_limit=5"
    const requestOne = axios.get(popular)
    const requestTwo = axios.get(recent)
    const requestThree = axios.get(top)
    axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
      this.popular = responses[0].data
      this.recent = responses[1].data
      this.top = responses[2].data
      // use/access the results
    })).catch(errors => {
      // react on errors.
    })
  }
}

</script>
