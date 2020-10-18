<template>
  <div>
    <Nav />
    <nuxt />
    <section class="block-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-sm-8">
            <TopStories :top="top"/>
          </div>
          <div class="col-sm-4">
            <div class="sidebar">
              <Social />
              <SidePosts />

            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Nav from '~/components/navigation/Nav'
import Footer from '@/components/footer/Footer'
import TopStories from '@/components/bottom/Topstories'
import Social from '@/components/side/Social'
import SidePosts from '@/components/side/Sideposts'
import axios from "axios";
export default {

data(){
  return{
    top: ''
  }
},
  components: {
    Nav,
    Footer,
    Social,
    SidePosts,
    TopStories
  }
  , async mounted() {
  }
}
</script>
