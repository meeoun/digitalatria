<template>
  <div>
    <Nav />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Nav from '~/components/navigation/Nav'
import Footer from '@/components/footer/Footer'
export default {
    components:{
    Nav,
    Footer
  },
  mounted() {


  }

}
</script>


