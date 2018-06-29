<template>
	<div class="contain">
		<header>
			<h3>附件列表</h3>
		</header>
		<section>
			<el-tabs :tab-position="tabPosition" type="border-card" @tab-click="change" style="height: 40px;"> 
			  	<el-tab-pane label="企业基础资料"></el-tab-pane>
			  	<el-tab-pane label="应收账款材料"></el-tab-pane>
			  	<el-tab-pane label="实际控制人"></el-tab-pane>
			</el-tabs>
			<article>
				<p class="bar">卖方资料</p>
				<div class="box">
					<aside>原件</aside>
					<uploadFile class="uploadFile" v-for="item in imgList" :title="item.title" :name="item.name" :url="item.url"></uploadFile>
					
				</div>
			</article>
		</section>
	</div>
</template>
<script>
	import uploadFile from '../components/uploadFile/index'
	const imgList = [
		{
			"title":"保理融资业余申请书" ,
			"name":"img1" ,
			"url":"http://qa.firedai.com/static/img/banner.5d64775.png" ,
		},
		{
			"title":"保理融资业余申请书" ,
			"name":"img1" ,
			"url":"http://qa.firedai.com/static/img/banner.5d64775.png" ,
		},
		{
			"title":"保理融资业余申请书" ,
			"name":"img1" ,
			"url":"http://qa.firedai.com/static/img/banner.5d64775.png" ,
		},
		{
			"title":"保理融资业余申请书" ,
			"name":"img1" ,
			"url":"http://qa.firedai.com/static/img/banner.5d64775.png" ,
		},
		{
			"title":"保理融资业余申请书" ,
			"name":"img1" ,
			"url":"http://qa.firedai.com/static/img/banner.5d64775.png" ,
		},
		{
			"title":"保理融资业余申请书" ,
			"name":"img1" ,
			"url":"http://qa.firedai.com/static/img/banner.5d64775.png" ,
		},
		{
			"title":"保理融资业余申请书" ,
			"name":"img1" ,
			"url":"http://qa.firedai.com/static/img/banner.5d64775.png" ,
		}
	]
  	export default {
  		components:{
			"uploadFile":uploadFile
		},
	    data() {
	     	return {
	      		imgList,	
	      	}
	    },
	    methods: {
	    	
	    },
	    mounted(){
	    	const self = this ;
	    		self.item = 1 ;
	    }
  	}
</script>
<style lang="scss" scoped type="text/css">
	@import "./index.scss";
</style>