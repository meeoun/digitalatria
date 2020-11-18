import APIService from "@/services/APIService";

export const state = () =>({
  news: [],
  reviews: [],
  latest: [],
  top:[],
  post: {},
  author: {}
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
  },
  SET_AUTHOR(state, author)
  {
    state.author = author
  },
  SET_TOP(state, post)
  {
    state.top = post
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
  },
  fetchAuthor({ commit }, id) {
    return APIService.getAuthorPosts(id).then(response => {
      commit('SET_AUTHOR', response.data.data)
    })
  },
  fetchTop({ commit }) {
    return APIService.getTop.then(response => {
      commit('SET_TOP', response.data.data)
    })
  }

}
