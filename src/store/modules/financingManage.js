const financingManage = {
  namespaced: true,
  state: {
    isFlag: false
  },
  mutations: {
    _changeFlag(state, data) {
      state.isFlag = data;
    }
  },
  actions: {
    changeFlag(context, data) {
      context.commit("_changeFlag", data)
    }
  },
  getters: { //暴露出注册的getter,只读
    list(state) {
      return state.isFlag;

    },
  }

}
export default financingManage;