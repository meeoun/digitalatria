import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: ''
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
          .then(res => {
            vuexContext.commit('setPosts', res.data)
          })
          .catch(e => context.error(e));
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
