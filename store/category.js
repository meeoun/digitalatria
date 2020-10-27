import APIService from "@/services/APIService";

export const state = () =>({
  posts: [],
})

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts
  }
}

export const actions = {
  fetchPosts({ commit },params) {
    return APIService.getCategory(params.category).then(response => {
      commit('SET_POSTS', response.data.data)
    })
  }

}
