import APIService from "@/services/APIService";

export const state = () =>({
  top: [],
  popular: [],
  recent: [],
  sideTop: []
})

export const mutations = {
  SET_TOP(state, top) {
    state.top = top
  },
  SET_POPULAR(state, popular) {
    state.popular = popular
  },
  SET_RECENT(state, recent) {
    state.recent = recent
  },
  SET_SIDE_TOP(state, sideTop) {
    state.sideTop = sideTop
  }

}

export const actions = {
  fetchTop({ commit }) {
    return APIService.getTop().then(response => {
      commit('SET_TOP', response.data.data)
    })
  },
  fetchPopular({ commit }) {
    return APIService.getPopular().then(response => {
      commit('SET_POPULAR', response.data.data)
    })
  },
  fetchRecent({ commit }) {
    return APIService.getRecent().then(response => {
      commit('SET_RECENT', response.data.data)
    })
  },
  fetchSideTop({ commit }) {
    return APIService.getSideTop().then(response => {
      commit('SET_SIDE_TOP', response.data.data)
    })
  }
}
