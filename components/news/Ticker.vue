<template>
  <section class="ticker-news">

    <div class="container">
      <div class="ticker-news-box">
        <span class="breaking-news">breaking news</span>
        <span class="new-news">New</span>
        <ul id="js-news" class="js-hidden">
          <li class="news-item"><span class="time-news">11:36 pm</span>  <a href="#">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</a> Donec odio. Quisque volutpat mattis eros... </li>
          <li class="news-item"><span class="time-news">12:40 pm</span>  <a href="#">Dëshmitarja Abrashi: E kam parë Oliverin në turmë,</a> ndërsa neve na shpëtoi “çika Mille” </li>
          <li class="news-item"><span class="time-news">11:36 pm</span>  <a href="#">Franca do të bashkëpunojë me Kosovën në fushën e shëndetësisë. </a></li>
          <li class="news-item"><span class="time-news">01:00 am</span>  <a href="#">DioGuardi, kështu e mbrojti Kosovën në Washington, </a> para serbit Vejvoda </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>

export default {
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
