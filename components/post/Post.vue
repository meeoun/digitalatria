<template>

          <!-- block content -->

          <div class="block-content">
            <div class="single-post-box">
              <Title :post=post />
              <Sharepost />
              <Postgallery />
              <Post />

            </div>
          </div>
</template>

<script>
import Title from '@/components/post/Title'
import Sharepost from '@/components/post/Sharepost'
import Postgallery from '@/components/post/Postgallery'
import Post from '@/components/post/Postdata'


export default {
  props: ['post'],
  components:{
    Title,
    Sharepost,
    Postgallery,
    Post
  }
  , mounted() {
    try {
      $('.bxslider').bxSlider({
        mode: 'fade',
        auto: true
      });

      $('.big-bxslider').bxSlider({
        mode: 'horizontal',
        auto: true
      });

      $('.slider-call').bxSlider({
        pagerCustom: '#bx-pager'
      });

      $('.slider-call2').bxSlider({
        pagerCustom: '#bx-pager2'
      });


    } catch(err) {
    }

  }
}

</script>
