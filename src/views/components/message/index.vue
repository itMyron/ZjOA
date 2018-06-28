<template>
	<div @click.stop="" class="contain" ref="moveBox">
			<p class="close">
				<i class="fa fa-close" @click="turnOff"></i>
			</p>
			<header>
					<div class="item1 item">
							<el-input class="textarea" type="textarea" autosize  placeholder="我要留言……"></el-input>
					</div>
					<div class="item2 item">
							<el-button type="primary" icon="el-icon-plus" size="mini">添加留言</el-button>
					</div>
			</header>
			<section>
					<div class="msgBox">
							<i class="fa fa-briefcase"></i>
							<div class="item1 item"><h3>超级管理员</h3></div>
							<p class="item2 item"><font>111111</font></p>
							<p class="item3 item">
								<font>2018-06-28</font>
								<strong>项目进度</strong>
							</p>
					</div>
					<div class="msgBox">
							<i class="fa fa-briefcase"></i>
							<div class="item1 item"><h3>超级管理员</h3></div>
							<p class="item2 item"><font>111111</font></p>
							<p class="item3 item">
								<font>2018-06-28</font>
								<strong>项目进度</strong>
							</p>
					</div>	
			</section>
			
	</div>
</template>

<script>
	import {mapGetters,mapState,mapMutations,mapActions} from 'vuex';
  	export default {
	    data() {
		    return {
		      	timer : null ,
		    }
	    },
	    computed:{
	        ...mapState({	//将store中的状态映射过来
	            isTurn:state=> state.message.isTurn,
	        })
	    },
	    methods: {
	     	startMover(itarget){//目标值
				const self = this ;
				clearInterval(self.timer);//执行当前动画同时清除之前的动画
				const odiv = self.$refs.moveBox ;
				let left = document.documentElement.clientWidth || document.body.clientWidth
				if(itarget){
					left = left - 300 ;
				}
				self.timer = setInterval(function(){
					var speed = 0;
					if(itarget){
						speed = -20;
						if(odiv.offsetLeft < left){
				  			clearInterval(self.timer);
				  			return false ;
				    	}
					}else{
						speed = 20;
						if(odiv.offsetLeft > left){
				  			clearInterval(self.timer);
				  			return false ;
				    	}
					}
				    odiv.style.left = odiv.offsetLeft+speed+'px';
				},30);
			},
			turnOff(){
				const self = this ;
        		self.$store.dispatch("message/changeTurn",false) ;
			}
	    },
	    watch:{
	    	isTurn:function(data){
	    		const self = this ;
				self.startMover(data);
	    	}
	    },
	    mounted(){
	    	const self = this ;
			//self.startMover(true);
	    }
  	}
</script>
<style lang="scss" scoped type="text/css">

		.contain{
				width: 300px;
				height: 100%;
				position: fixed;
				right: -300px;
				top: 0;
				background: #eee;
				.close{
					height: 28px;
					line-height: 40px;
					text-align: right;
					padding-right: 15px;
					i{
						font-size: 22px;
						cursor: pointer;
					}
				}
				header{
						padding: 10px 0;	
						.item1{
								min-height: 50px;
								.textarea{
										height: 50px;
								}
								.textarea /deep/ textarea{
										height: 50px !important;
								}
						}
						.item2{
								padding-top:8px ;
								text-align: right;
						}
				}
				section{
					.msgBox{
				        position: relative;
				        padding-left: 60px;
				        padding-top: 20px;
				        height: 120px;
				        i{  
						        position: absolute;
						        top: 7px;
						        left: 10px;
						        width: 34px !important;
						        text-align: center;
						        height: 34px;
						        line-height: 34px !important;
						        border-radius: 50%;
						        color: #fff;
						        background: #23b7e5;
						    }
						    .item{
						    		padding : 7px 0 ;
						    		h3{
						    				font-size: 18px;
						    		}
						    		strong{
								    		color: #ff5001;
								    }
						    }
						    
				    }
				    .msgBox:after{
				        position: absolute;
				        content: "";
				        height: 106px;
				        display: inline-block;
				        width: 5px;
				        background: #DCDFE6;
				        left: 24px;
				        top: 41px;
				    }
				}
		}
    
    

</style>