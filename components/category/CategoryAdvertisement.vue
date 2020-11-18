<template>
  <div class="advertisement">
    <div class="desktop-advert">
      <span>Digital Atria</span>
      <client-only>
      <vue-particles
        color="#ffffff"
        :particleOpacity="0.7"
        :particlesNumber="180"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="1"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        style="height: 90px; background-color: #0b0b0b"></vue-particles>
      </client-only>
    </div>
  </div>
</template>
<script>


</script>
