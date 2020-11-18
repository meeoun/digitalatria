<template>
  <el-form :inline="true" :model="form" class="navbar-form navbar-right" role="search" @submit.prevent.native
           element-loading-text="Searching..."
           element-loading-spinner="el-icon-loading"
           element-loading-background="rgba(0, 0, 0, 0.8)"
           v-loading="loading"
  >
    <el-form-item label="Search">
      <el-input v-model="form.filter" placeholder="Search" @keyup.enter.native="onSubmit"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" id="search-submit" @click="onSubmit" icon="el-icon-search" style="margin-right: 20px;"></el-button>
    </el-form-item>

  </el-form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        filter: ''
      },
      loading: false
    }
  },
  methods: {
    async onSubmit() {
      if(this.$router.currentRoute.name === "search-search")
      {
        this.loading = true;
        await this.$store.dispatch('search/searchPosts', this.form.filter)
        this.loading = false;
      }else{
        await this.$router.push({ path: '/search', query: { search: this.form.filter } })
      }

    }
  }
}
</script>
