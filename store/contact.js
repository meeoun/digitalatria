import APIService from "@/services/APIService";

export const state = () =>({
  contactMessage: '',
})

export const mutations = {
  SET_CONTACT_MESSAGE(state, message) {
    state.contactMessage = message
  },
}

export const actions = {
  fetchContactMessage({ commit }){
    return APIService.getContactMessage().then(response => {
      commit('SET_CONTACT_MESSAGE', response.data.data.contact_message)
    })
  },
  storeContactMessage({ commit }, form) {
    return APIService.storeContactMessage(form).then(response => {
    })
  }


  }
