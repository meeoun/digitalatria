<template>
  <div class="article-box">
    <div class="title-section">
      <h1><span>Latest Articles</span></h1>
    </div>

    <div v-for="post in posts"  class="news-post article-post">
      <div class="row">
        <div class="col-sm-4">
          <div class="post-gallery">
            <img :src=post.images.main.dimension_270_150.url :alt=post.images.main.dimension_270_150.name>
          </div>
        </div>

        <div class="col-sm-8">
          <div class="post-content">
            <h2><nuxt-link :to="'/'+post.type+'/'+post.slug">{{post.title}}</nuxt-link></h2>
            <ul class="post-tags">
              <li><i class="fa fa-clock-o"></i>{{post.dates.created}}</li>
              <li><i class="fa fa-user"></i>by <a href="#">{{post.author.name}} </a></li>
              <li><a href="#"><i class="fa fa-comments-o"></i><span>{{post.comments}}</span></a></li>
              <li><i class="fa fa-eye"></i>{{post.views}}</li>
            </ul>
            <p>{{post.excerpt}}</p>
          </div>
        </div>

      </div>
    </div>

    <div class="center-buttonm">
      <a href="#">Show me more</a>
    </div>

  </div>
</template>

<script>
export default {
  props:['posts'],


}

</script>
