<template>
          <!-- block content -->
          <div class="block-content">
            <div class="single-post-box">
              <div class="js-toc-content">
              <Title :post=post />

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

              <CommentBox :count=post.comments :comments=post.comment_data.comments />

            </div>
            </div>



</template>

<script>

export default {
  props: {
    post: {
      type: Object,
      required: true
    },
    author: {
      type: Object,
      required: true
    }
  }

}

</script>
