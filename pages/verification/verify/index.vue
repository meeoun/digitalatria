<template>
  <div class="text-center">
    <div class="title-post">
  <h1>{{status}}</h1>
    </div>
    <br />
    <br />
    <br />
    <br />

        <img src="/images/logo.png" class="image rounded mx-auto d-block">
<br />
    <br />
    <br />

    <nuxt-link to="/login" class="button">Click here to Login</nuxt-link>

  </div>
</template>
<script>
import APIService from "@/services/APIService";

export default {
  middleware: ['guest'],
  async asyncData({query}){
    const q = Object.keys(query).map(k => `${k}=${query[k]}`).join('&');

    try{
      const { data } = await APIService.verification(q)
      console.log(data)
      return {success: true, status: data.data.message}
    }catch (e) {
      return {success: false, status: e.response.data.data.errors}
    }
  }
}
</script>
