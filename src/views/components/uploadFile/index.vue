<template>
	<div class="contain">
			<p class="title">{{title}}</p>
		<p>
			<img :src="url"/>
		</p>
		<p class="btns">
			<span @click="download" :class="isDownload ? '' : 'disable'">下载</span>
			<span @click="view" :class="isDownload ? 'disable' : ''">查看</span>
			<span>上传</span>
		</p>
		
	</div>
</template>
<script>
	
  	export default {
  		components:{
			
		},
	    data() {
	     	return {
	      		type:"" ,
	      		isDownload:false
	      	}
	    },
	    props:{
	        "title" :{
	          type:String ,
	          default:""
	        },
	        "url" :{
	          type:String ,
	          default:" "
	        },
	        "name":{
	          type:String ,
	          default:""
	        },
	        
	
		},
	    methods: {
	      	init(){
	    		let self = this ;
	    		let ext = self.url.split(".") ;
	    		const type = ext[ext.length-1] ;
	    		switch(type){
	    			case "pdf" : console.log("这是pdf文件") ;break;
	    			case "doc" : console.log("这是doc文件") ;break;
	    			case "docx" : console.log("这是docx文件") ;break;
	    			case "xls" : console.log("这是xls文件") ;break;
	    			case "ppt" : console.log("这是ppt文件") ;break;
	    			default: console.log("这是图片文件") ;
	    		}
	    	},
	    	//下载文件
	    	download(){
	    		const self = this ;
	    		if(!self.isDownload){
	    			self.$message({
			          	message: '该文件不支持下载',
			          	type: 'warning'
			        });
	    		}else{
	    			self.$message({
			          	message: '下载成功',
			          	type: 'success'
			        });
	    		}
	    	},
	    	view(){
	    		
	    	}
	    },
	    mounted(){
	    	const self = this ;
	    	self.init()
	    }
  	}
</script>
<style lang="scss" scoped type="text/css">
	@import "./index.scss";
</style>