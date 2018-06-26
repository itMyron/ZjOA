const login = {
  namespaced: true,
  state: {
    user: 'admin'
  },
  mutations: {
    _changeUser(state, data) {
      state.user = data;
    }
  },
  actions: {
    changeCollapse(context, data) {
      context.commit("_changeUser", data)
    }
  },
  getters: { //暴露出注册的getter,只读
    list(state) {
      return state.user;
    },
  }
}
export default login;

