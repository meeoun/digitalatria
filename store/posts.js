import APIService from "@/services/APIService";

export const state = () =>({
  news: [],
  reviews: [],
  latest: [],
  post: {}
})

export const mutations = {
  SET_NEWS(state, news) {
    state.news = news
  },
  SET_REVIEWS(state, reviews) {
    state.reviews = reviews
  },
  SET_LATEST(state, latest) {
    state.latest = latest
  },
  SET_POST(state, post)
  {
    state.post = post
  }
}

export const actions = {
  fetchNews({ commit }) {
    return APIService.getNews().then(response => {
      commit('SET_NEWS', response.data.data)
    })
  },
  fetchReviews({ commit }) {
    return APIService.getReviews().then(response => {
      commit('SET_REVIEWS', response.data.data)
    })
  },
  fetchLatest({ commit }) {
    return APIService.getLatest().then(response => {
      commit('SET_LATEST', response.data.data)
    })
  },
  fetchPost({ commit },params) {
    return APIService.getPost(params.category, params.slug).then(response => {
      commit('SET_POST', response.data.data[0])
    })
  }


}
