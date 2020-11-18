<template>
  <section class="ticker-news">

    <div class="container">
      <div class="ticker-news-box">
        <span class="breaking-news">breaking news</span>
        <span class="new-news">New</span>
        <ul id="js-news" class="js-hidden">
          <li v-for="item in news" :key="item.id"><span class="time-news">{{ item.dates.created}}</span><nuxt-link :to="'/news/'+item.slug">{{item.title}}</nuxt-link></li>
        </ul>
      </div>
    </div>
  </section>
</template>


<script>

export default {
  props: {
    news: {
      type: Array,
      default: null
    }
  },
mounted() {
  try{
    $('#js-news').ticker({
      speed: 0.20,			// The speed of the reveal
      controls: true,			// Whether or not to show the jQuery News Ticker controls
      titleText: '',	// To remove the title set this to an empty String
      displayType: 'reveal',	// Animation type - current options are 'reveal' or 'fade'
      direction: 'ltr',		// Ticker direction - current options are 'ltr' or 'rtl'
      pauseOnItems: 2000,		// The pause on a news item before being replaced
      fadeInSpeed: 600,		// Speed of fade in animation
      fadeOutSpeed: 300		// Speed of fade out animation
    });
  } catch(err) {
  }
}
}
</script>
