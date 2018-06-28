<template>
	<div class="contain">
		<p class="title">
			<span v-show="isCollapse"></span>
			<strong v-show="!isCollapse">中均OA系统</strong>
		</p>
		<el-menu  :collapse="isCollapse" default-active="0" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router=true collapse-transition=false background-color="#00142A" text-color="#A0AAB5" active-text-color="#FFD04B" unique-opened=true >
			<el-menu-item index="index">
				<template slot="title">
					<i class="fa fa-home"></i>
					<span slot="title">主页</span>
				</template>
			</el-menu-item>
			<el-submenu :index="index"  v-for="(key,index) in obj" :key="index">
				<template slot="title">
					<i class="fa" :class="key.bar" ></i>
					<span slot="title">{{key.title}}</span>
				</template>
				<el-menu-item :index="item.hash" v-for="(item,_index)  in key.children" :key="_index">{{item.item}}</el-menu-item>
			</el-submenu>
		</el-menu>
	</div>
</template>
<script>
import API from "../../../config/api";	
import menuData from "@/mock/data.js";
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      menuData,
      obj: ""
    };
  },
  computed: {
    ...mapState({
      isCollapse: state => state.nav.isCollapse
    })
  },
  methods: {
    init() {
      	const self = this;
      	API.postMenu().then( result => {
        	console.log("菜单列表：",result)
        	self.obj = result.data.list ;
        })
    }
  },
  created() {
    const self = this;
    self.init();
    
    
  }
};
</script>
<style lang="scss" scoped type="text/css">
@import "./index.scss";
</style>



