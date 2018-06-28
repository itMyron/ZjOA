<template>
  	<div id="app">
		<bmp-menu id="menu" />
		<div id="contain" >
			<bmp-top id="top" />
			<router-view id="content" />
		</div>
  </div>
</template>
<script>
	import menu from '@/views/components/menu';
	import top from '@/views/components/top';
	export default {
		name: 'app',
		components:{
			'bmp-menu':menu,
			'bmp-top':top
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
<style lang="scss" scoped type="text/css">
	#app{
		#menu{
				float: left;
				height: 100%;	
			}
		#contain{
			overflow: hidden;
			word-break: break-all;
			position: relative;
			height: 100%;
			#top{
				height: 100px ;
				border-bottom: 1px solid #eee;
			}
			#content{
				height: calc(100% - 100px) ;
				overflow: auto;
			}
		}
		
		
	}
</style>