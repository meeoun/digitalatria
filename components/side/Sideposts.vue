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
              <h2><a href="single-post.html">Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. </a></h2>
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
              <h2><a href="single-post.html">Phasellus ultrices nulla quis nibh. Quisque a lectus. </a></h2>
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
              <h2><a href="single-post.html">Donec consectetuer ligula vulputate sm tristique curss. </a></h2>
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
export default {
  props: ['popular', 'recent', 'top']

}

</script>
