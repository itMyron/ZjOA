<template>
	<div class="contain">
			<p class="title">{{title}}</p>
		<p>
			<img :src="url"/>
		</p>
		<p class="btns">
			<span>下载</span>
			<span>查看</span>
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
	      		type:""
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
	    			
	    		}
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