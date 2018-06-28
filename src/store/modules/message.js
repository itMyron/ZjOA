const message = {
  namespaced: true,
  state: {
    isTurn: false
  },
  mutations: {
    _changeTurn(state, data) {
      state.isTurn = data;
    }
  },
  actions: {
    changeTurn(context, data) {
      context.commit("_changeTurn", data)
    }
  },
  getters: { //暴露出注册的getter,只读
    list(state) {
      return state.isTurn;

    },
  }

}
export default message;