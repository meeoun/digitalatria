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
  },
  ADD_POSTS(state, posts){
    posts.forEach(function (item) {
      state.posts.push(item)
    });
  }
}

export const actions = {
  fetchAuthors({ commit, state }) {

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
  },
  fetchAuthorPosts({ commit }, slug) {
    return APIService.getAuthorPosts(slug).then(response => {
        let links = response.data.data.post_data.links.filter((link) => {
          return !isNaN(link.label) && !link.active;
        })
        links = links.map((link) => {
          return link.url;
        })
        commit('SET_AUTHOR', response.data.data);
        commit('SET_POSTS', response.data.data.post_data.posts);
        commit('SET_LINKS', links);

    })
  },
  fetchMoreAuthorPosts({ commit }, link){
    return APIService.getMorePosts(link).then(response => {
      commit('ADD_POSTS', response.data.data)
      commit('REMOVE_LINK', link)
    })
  }

}
