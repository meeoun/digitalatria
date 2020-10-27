import APIService from "@/services/APIService";

export const state = () =>({
  authors: [],
})

export const mutations = {
  SET_AUTHORS(state, authors) {
    state.authors = authors
  }
}

export const actions = {
  fetchAuthors({ commit }) {
    return APIService.getAuthors().then(response => {
      commit('SET_AUTHORS', response.data.data)
    })
  }

}
