<template>
  	<div id="app">
		<router-view id="content" />
  </div>
</template>
<script>
	export default {
		name: 'app',
		components:{
			
			},
			data(){
				return{
					screenWidth: document.body.clientWidth
				}
			},
			methods:{


			},
			watch : {
				screenWidth (val) {
					if(val < 1000){
						//console.log("屏幕的变化",val)
						this.$store.dispatch("nav/changeCollapse",true) ;
					}else{
						this.$store.dispatch("nav/changeCollapse",false) ;
					}
				}
			},
			mounted () {
				const self = this
				window.onresize = () => {
					return (() => {
						window.screenWidth = document.body.clientWidth
						self.screenWidth = window.screenWidth
					})()
				} 
			},
			created () {
				
				
				
				
			}
	}
</script>
<style>
#content{  
  height: 100%;  
}  

</style>



