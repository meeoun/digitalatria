export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = {
  async nuxtServerInit ({dispatch}) {
    await dispatch('layout/fetchTop');
    await dispatch('layout/fetchPopular');
    await dispatch('layout/fetchRecent');
    await dispatch('layout/fetchSideTop');
  }
}
