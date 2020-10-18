<template>
  <div class="review-box">
    <div class="title-section">
      <h1 id="overview"><span>Reviewer overview</span></h1>
    </div>
    <div v-for="review in post.review_scores" :key="review.title" class="member-skills">
      <p>{{review.title}} - {{review.score}}/10</p>
      <div class="meter nostrips design">
        <p :style="percent(review.score)"></p>
      </div>
    </div>
    <div class="summary-box">
      <h2 id="summary">Summary</h2>
      <p>{{post.summary}} </p>
      <div class="summary-degree">
        <p><span>{{post.average_score}}</span>{{post.score_description}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      default: null,
      required: true
    }
  },methods:{
    percent(score)
    {
      return `width: ${score*10}%`
    }
  }
}
</script>
