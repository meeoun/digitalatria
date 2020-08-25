<template>
  <div>
    <Ticker />
    <Headingnews />
    <Latestnews />
    <Bottom />
  </div>
</template>

<script>

import Ticker from '~/components/news/Ticker'
import Headingnews from '~/components/news/Headingnews'
import Latestnews from '~/components/news/Latestnews'
import Bottom from '@/components/bottom/Bottom'

export default {
  components: {
    Ticker,
    Headingnews,
    Latestnews,
    Bottom
  }
}
</script>
