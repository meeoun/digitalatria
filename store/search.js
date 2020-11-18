import APIService from "@/services/APIService";

export const state = () =>({
  posts: [],
  links: [],
  filter: ''
})

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts
  },
  ADD_POSTS(state, posts){
    posts.forEach(function (item) {
      state.posts.push(item)
    });
  },
  SET_LINKS(state, links){
    state.links = links
  },
  SET_FILTER(state, filter){
    state.filter = filter
  },
  REMOVE_LINK(state, link){
    state.links = state.links.filter((item)=>{
      return item !== link
    })
  }
}

export const actions = {
  searchPosts({ commit },filter) {
    return APIService.getSearch(filter).then(response => {
      let links = response.data.meta.links.filter((link)=>{
        return  !isNaN(link.label) && !link.active
      })
      links = links.map((link)=>{
        return  link.url
      })
      commit('SET_LINKS',links)
      commit('SET_FILTER',filter)
      commit('SET_POSTS', response.data.data)
    })
  },
  fetchMorePosts({ commit }, link){
    return APIService.getMoreAuthors(link).then(response => {
      commit('ADD_POSTS', response.data.data)
      commit('REMOVE_LINK', link)
    })
  }

}
