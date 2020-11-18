<template>
  <div>

    <Nav />
    <nuxt />
    <section class="block-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-sm-8">
            <CategoryAdvertisement />
            <TopStories :top="top"/>
          </div>
          <div class="col-sm-4">
            <div class="sidebar">
              <Social />
              <SidePosts />
              <div class="advertisement">
                <div class="desktop-advert">
                  <span>Welcome!</span>
                  <img src="gifs/sidegif.gif" alt="Digital Atria"  style="width:300px;height:250px;" >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>

import {mapState} from "vuex";

export default {
  layout: 'front',
  fetch({store, error}){
     store.dispatch('posts/fetchTop');

  },
  computed: mapState({
    top: state => state.posts.top
  })
}
</script>
