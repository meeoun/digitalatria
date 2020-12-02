import APIService from "@/services/APIService";

export const state = () =>({
  news: [],
  reviews: [],
  latest: [],
  tutorials: [],
  top:[],
  post: {},
  comments: [],
  comment_links: [],
  comment_count: 0,
  author: {}
})

export const mutations = {
  SET_NEWS(state, news) {
    state.news = news
  },
  SET_REVIEWS(state, reviews) {
    state.reviews = reviews
  },
  SET_TUTORIALS(state, tutorials) {
    state.tutorials = tutorials
  },
  SET_LATEST(state, latest) {
    state.latest = latest
  },
  SET_POST(state, post)
  {
    state.post = post
    state.comment_count = state.post.comments
  },
  SET_AUTHOR(state, author)
  {
    state.author = author
  },
  SET_TOP(state, post)
  {
    state.top = post
  },
  SET_COMMENTS(state, comments) {
    state.comments = comments
  },
  ADD_COMMENT(state, comment){
    state.comments.push(comment)
    state.comment_count++
  },
  ADD_COMMENTS(state,comments){
     comments.forEach((comment) => {
     state.comments.push(comment)
     })
  },
  ADD_REPLY(state, reply){
    state.comments.forEach((comment) =>{
      if(comment.id === reply.reply_id){
         comment.reply_data.replies.push(reply)
      }
    })
  },
  ADD_REPLIES(state, replies){
    state.comments.forEach((comment) =>{
      replies.forEach((reply)=>{
        if(comment.id === reply.reply_id){
          comment.reply_data.replies.push(reply)
        }
      })

    })
  },SET_COMMENT_LINKS(state, links){
   state.comment_links = links
  },
  REMOVE_COMMENT_LINK(state, link){
    state.comment_links = state.comment_links.filter((item)=>{
      return item !== link
    })
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
  },fetchFront({commit}){
    return APIService.getFront().then(response => {
      commit('SET_TUTORIALS', response.data.data.tutorials);
      commit('SET_REVIEWS', response.data.data.reviews);
      commit('SET_NEWS', response.data.data.news);
    })
  },
  fetchPost({ commit },params) {
    return APIService.getPost(params.category, params.slug).then(response => {
      let links = response.data.data[0].comment_data.links.filter((link)=>{
        return  !isNaN(link.label) && !link.active
      })
      links = links.map((link)=>{
        return  link.url
      })
      commit('SET_POST', response.data.data[0])
      commit('SET_COMMENTS',response.data.data[0].comment_data.comments)
      commit('SET_COMMENT_LINKS',links)
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
  }, fetchMoreComments({ commit }, link){
    return APIService.getMoreLink(link).then(response => {
      commit('ADD_COMMENTS', response.data.data)
      commit('REMOVE_COMMENT_LINK', link)
    })
  }, fetchMoreReplies({ commit }, link){
    return APIService.getMoreLink(link).then(response => {
      commit('ADD_REPLIES', response.data.data)
    })
  }

}
