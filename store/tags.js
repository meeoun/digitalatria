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
  fetchPosts({ commit },slug) {
    return APIService.getTag(slug).then(response => {
      commit('SET_POSTS', response.data.data)
    })
  }

}
