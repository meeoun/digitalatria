import APIService from "@/services/APIService";

export const state = () =>({
  authors: [],
  links: [],
  author: {},
  posts: []
})

export const mutations = {
  SET_AUTHORS(state, authors) {
    state.authors = authors
  },
  SET_LINKS(state, links){
    state.links = links
  },
  REMOVE_LINK(state, link){
    state.links = state.links.filter((item)=>{
      return item !== link
    })
  },
  ADD_AUTHORS(state, authors){
    authors.forEach(function (item) {
      state.authors.push(item)
    });
  },
  SET_AUTHOR(state, author){
    state.author = author
  },
  SET_POSTS(state, posts) {
    state.posts = posts
  }
}

export const actions = {
  fetchAuthors({ commit, state }) {

    if(state.authors.length < 1)
    {
      return APIService.getAuthors().then(response => {
        let links = response.data.meta.links.filter((link)=>{
          return  !isNaN(link.label) && !link.active
        })
        links = links.map((link)=>{
          return  link.url
        })
        commit('SET_AUTHORS', response.data.data)
        commit('SET_LINKS',links)
      })
    }

  },
  fetchMoreAuthors({ commit }, link){
    return APIService.getMoreAuthors(link).then(response => {
      commit('ADD_AUTHORS', response.data.data)
      commit('REMOVE_LINK', link)
    })
  },
  fetchAuthor({ commit }, slug){
    return APIService.getAuthor(slug).then(response => {
      commit('SET_AUTHOR', response.data.data)
  })
  }

}
