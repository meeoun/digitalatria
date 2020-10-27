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
          <li v-for="post in popular" :key="post.id">
            <img :src=post.images.main.dimension_80_70.url :alt=post.images.main.dimension_80_70.name>
            <div class="post-content">
              <h2><nuxt-link :to="'/'+post.type+'/'+post.slug">{{ post.title}}</nuxt-link></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>{{post.dates.created}}</li>
              </ul>
            </div>
          </li>

        </ul>
      </div>
      <div class="tab-pane" id="option2">
        <ul class="list-posts">
          <li v-for="post in recent" :key="post.id">
            <img :src=post.images.main.dimension_80_70.url :alt=post.images.main.dimension_80_70.name>
            <div class="post-content">
              <h2><nuxt-link :to="'/'+post.type+'/'+post.slug">{{ post.title}}</nuxt-link></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>{{post.dates.created}}</li>
              </ul>
            </div>
          </li>

        </ul>
      </div>
      <div class="tab-pane" id="option3">
        <ul class="list-posts">
          <li v-for="post in top" :key="post.id">
            <img :src=post.images.main.dimension_80_70.url :alt=post.images.main.dimension_80_70.name>
            <div class="post-content">
              <h2><nuxt-link :to="'/'+post.type+'/'+post.slug">{{ post.title}}</nuxt-link></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>{{post.dates.created}}</li>
              </ul>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>
<script>

import {mapState} from "vuex";

export default {
  computed: mapState({
    popular: state => state.layout.popular,
    recent: state => state.layout.recent,
    top: state => state.layout.sideTop
  })
}

</script>
