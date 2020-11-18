import APIService from "@/services/APIService";

export const state = () =>({
  top: [],
  navigation: {
    reviews: [],
    tutorials: []
  },
  popular: [],
  recent: [],
  sideTop: [],
  about: '',
  footerPosts: [],
  footerTags: [],
  footerImages: []
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
  },
  SET_ABOUT(state, about) {
    state.about = about
  },
  SET_FOOTER_POSTS(state, posts) {
    state.footerPosts = posts
  },
  SET_FOOTER_TAGS(state, tags) {
    state.footerTags = tags
  },
  SET_FOOTER_IMAGES(state, images) {
    state.footerImages = images
  },
  SET_NAV_REVIEWS(state, posts) {
    state.navigation.reviews = posts
  },
  SET_NAV_TUTORIALS(state, posts) {
    state.navigation.tutorials = posts
  }

}

export const actions = {
  fetchLayout({ commit }){
    return APIService.getLayout().then(response => {
      commit('SET_ABOUT',response.data.data.footer.about.setting)
      commit('SET_FOOTER_POSTS', response.data.data.footer.random_posts)
      commit('SET_FOOTER_TAGS', response.data.data.footer.random_tags)
      commit('SET_FOOTER_IMAGES', response.data.data.footer.images)
      commit('SET_SIDE_TOP', response.data.data.side.top)
      commit('SET_RECENT', response.data.data.side.recent)
      commit('SET_POPULAR', response.data.data.side.popular)
      commit('SET_TOP', response.data.data.top.recent)
      commit('SET_NAV_REVIEWS', response.data.data.navigation.reviews)
      commit('SET_NAV_TUTORIALS', response.data.data.navigation.tutorials)
    })
  }
}
