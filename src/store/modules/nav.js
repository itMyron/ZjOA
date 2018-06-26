
const nav={
    namespaced: true,
    state:{
        isCollapse : false ,    //侧边菜单折叠开关按钮
        back : false //导航栏后退按钮
    },
    mutations:{
        _changeCollapse(state, data) {
        	state.isCollapse = data;
        },
        _changeBack(state,data){
            state.back = data;
        }
    },
    actions:{
        changeCollapse(context, data) {
        	context.commit("_changeCollapse", data)
        },
        changeBack(context,data){
            context.commit("_changeBack",data)
        }
    },
    getters:{	//暴露出注册的getter,只读
        list(state){
            return state.isCollapse;
        },
        reback(state){
            return state.back ;
        }
    }

}
export default nav;

