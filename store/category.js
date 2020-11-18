import APIService from "@/services/APIService";

export const state = () =>({
  posts: [],
  links: []
})

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts
  },
  SET_LINKS(state, links){
    state.links = links
  },
  REMOVE_LINK(state, link){
    state.links = state.links.filter((item)=>{
      return item !== link
    })
  },
  ADD_POSTS(state, posts){
    posts.forEach(function (item) {
      state.posts.push(item)
    });
  }
}

export const actions = {
  fetchPosts({ commit },params) {
    return APIService.getCategory(params.category).then(response => {
      let links = response.data.meta.links.filter((link)=>{
        return  !isNaN(link.label) && !link.active
      })
      links = links.map((link)=>{
        return  link.url
      })
      commit('SET_LINKS',links)
      commit('SET_POSTS', response.data.data)
    })
  },
  fetchMorePosts({ commit }, link){
    return APIService.getMorePosts(link).then(response => {
      commit('ADD_POSTS', response.data.data)
      commit('REMOVE_LINK', link)
    })
  }

}
