<template>
    <div class="megadropdown">
      <div class="container">
        <div class="inner-megadropdown">

          <div class="owl-wrapper">
            <div class="owl-carousel" data-num="5">

              <div v-for="post in tutorials" :key="post.id" class="item news-post standard-post">
                <div class="post-gallery">
                  <img :src=post.images.main.dimension_270_200.url :alt=post.images.main.dimension_270_200.name>
                </div>
                <div class="post-content">
                  <h2><nuxt-link :to="'/'+post.type+'/'+post.slug">{{post.title}}</nuxt-link></h2>
                  <ul class="post-tags">
                    <li><i class="fa fa-clock-o"></i>{{post.dates.created}}</li>
                    <li><i class="fa fa-comments-o"></i><span>{{post.views}}</span></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
</template>
<script>
export default {
  props: ['tutorials']
}
</script>
