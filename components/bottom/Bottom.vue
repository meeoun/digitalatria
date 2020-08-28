<template>
  <section class="block-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
      <Topstories />
        </div>
        <div class="col-sm-4">
          <div class="sidebar">
            <Social />
            <Posts :popular="popular" :recent="recent" :top="top" />

          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

import Topstories from '@/components/bottom/Topstories'
import Social from '@/components/side/Social'
import Posts from '@/components/side/Sideposts'
export default {
  props: ['popular', 'recent', 'top'],
  components:{
    Topstories,
    Social,
    Posts
  }

}
</script>
