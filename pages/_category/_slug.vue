<template>
  <!-- block content -->
  <div class="block-content">
    <div class="single-post-box">
      <div class="js-toc-content">
        <Title :post=post />
        <h1>{{post.id}}</h1>

        <PostCarousel :images=post.images.carousel :caption=post.gallery_caption />

        <PostData :content=post.content />
      </div>
      <PostGallery :images=post.images.gallery  />
      <div v-if="post.type === 'reviews'">
        <ReviewBox :post=post />
      </div>
      <PostTags :tags="post.tags" />
      <MoreAuthor :author=post.author />

      <AlsoLike :posts="post.also_like" />

      <CommentForm :post="post.id" />

      <CommentBox />

    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  async fetch({store, error, params}) {

    try {
      await store.dispatch('posts/fetchPost', params)
    }catch (e) {
      error({
        statusCode: 404,
        message: 'Unable to fetch post'
      })
    }
  },computed: mapState({
    post: state => state.posts.post,
    author: state=>state.posts.author,
    comment_count: state=>state.posts.comment_count,
    comments: state=>state.posts.comments
  })
  ,mounted() {
    tocbot.init({
      // Where to render the table of contents.
      tocSelector: '.js-toc',
      // Where to grab the headings to build the table of contents.
      contentSelector: '.js-toc-content',
      // Which headings to grab inside of the contentSelector element.
      headingSelector: 'h1, h2, h3',
      // For headings inside relative or absolute positioned containers within content.
      hasInnerContainers: true,

    })
  }, beforeDestroy() {
    tocbot.destroy();
  }
}
</script>
