const state = {
    isSideBarOpen: true
  }
  
  const mutations = {
    setIsSideBarOpen(state,val){
      state.isSideBarOpen = val;
    },
  }
  
  const actions = {
    setIsSideBarOpen({ commit }, val) {
      commit('setIsSideBarOpen',val)
    },
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }