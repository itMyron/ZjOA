<template>
	<div class="contain">
		<header>
			保理业务审核
		</header>
		<section>
				<article class="barTop">
				<p>
					<font>日期：</font>
					<span>{{baseInfo.createTime}}</span>
				</p>
				<p v-if="baseInfo.orderNo!=null">
					<font>订单编号：</font>
					<span>{{baseInfo.orderNo}}</span>
				</p>
				</article>
				<article>
					<h3 class="title">债务人基本信息</h3>
					<div class="list clear">
						<p class="item">
							<span class="bar">产品类型：</span>
							<span>{{baseInfo.comComProductType}}</span>
						</p>
						<p class="item">
							<span class="bar">保理业务类型：</span>
							<span>{{baseInfo.comFactorType}}</span>
						</p>
					</div>
					<div class="list clear">
						<p class="item">
							<span class="bar">转让额度种类：</span>
							<span>{{baseInfo.comTransferMoneyType}}</span>
						</p>
						<p class="item">
							<span class="bar">企业名称：</span>
							<span>{{baseInfo.comCompanyName}}</span>
						</p>
					</div>
					<div class="list clear">
						<p class="item">
							<span class="bar">企业性质：</span>
							<span>{{baseInfo.comCompanyNature}}</span>
						</p>
						<p class="item">
							<span class="bar">注册地址：</span>
							<span>{{baseInfo.comRegisterAddress}}</span>
						</p>
					</div>
					<div class="list clear">
						<p class="item">
							<span class="bar">注册资金：</span>
							<span>{{baseInfo.comRegisterCapital}} 万</span>
						</p>
						<p class="item">
							<span class="bar">法定代表人：</span>
							<span>{{baseInfo.comLegalPerson}}</span>
						</p>
					</div>
					<div class="list clear">
						<p class="item">
							<span class="bar">实缴资金：</span>
							<span>{{baseInfo.comPaidCapital}} 万</span>
						</p>
						<p class="item">
							<span class="bar">成立时间：</span>
							<span>{{baseInfo.comRegisterTime}}</span>
						</p>
					</div>
					<div class="list clear">
						<p class="item">
							<span class="bar">联系方式：</span>
							<span>{{baseInfo.comContactTel}}</span>
						</p>
					</div>
				</article>
				<article>
					<h3 class="title">债权人基本信息</h3>
					<div class="list clear">
						<p class="item">
							<span class="bar">企业名称：</span>
							<span>{{baseInfo.supCompanyName}}</span>
						</p>
						<p class="item">
							<span class="bar">企业性质：</span>
							<span>{{baseInfo.supCompanyNature}}</span>
						</p>
					</div>
					<div class="list clear">
						<p class="item">
							<span class="bar">注册地址：</span>
							<span>{{baseInfo.supAddress}}</span>
						</p>
						<p class="item">
							<span class="bar">注册资金：</span>
							<span>{{baseInfo.supRegisterCapital}} 万</span>
						</p>
					</div>
					<div class="list clear">
						<p class="item">
							<span class="bar">法定代表人：</span>
							<span>{{baseInfo.supName}}</span>
						</p>
						<p class="item">
							<span class="bar">实缴资金：</span>
							<span>{{baseInfo.supPaidCapital}} 万</span>
						</p>
					</div>
					<div class="list clear">
						<p class="item">
							<span class="bar">成立时间：</span>
							<span>{{baseInfo.supRegisterTime}}</span>
						</p>
						<p class="item">
							<span class="bar">联系方式：</span>
							<span>{{baseInfo.supTel}}</span>
						</p>
					</div>
				</article>
				<article>
					<h3 class="title">保理融资信息</h3>
					<div class="list clear">
						<p class="item">
							<span class="bar">基础合同编号：</span>
							<span>{{baseInfo.compactCode}}</span>
						</p>
						<p class="item">
							<span class="bar">融资利率：</span>
							<span>{{baseInfo.financingRate}} %</span>
						</p>
					</div>
					<div class="list clear">
						<p class="item">
							<span class="bar">融资金额：</span>
							<span>{{baseInfo.receivablesBalance}} 元</span>
						</p>
						<p class="item">
							<span class="bar">应收账款本余额：</span>
							<span>{{baseInfo.financingMoney}} 元</span>
						</p>
					</div>
					<div class="list clear">
						<p class="item">
							<span class="bar">应收账款到期日：</span>
							<span>{{baseInfo.compactTime}}</span>
						</p>
						<p class="item">
							<span class="bar">保理到期日：</span>
							<span>{{baseInfo.factoringTime}}</span>
						</p>
					</div>
				</article>
				<article class="imgView">
					<h3 class="title">应收账款单据资料</h3>
					<div class="list clear">
						<div class="item" v-for="item in baseInfo.imgs" >
							<uploadImg :dialogImageUrl="item.dialogImageUrl" :title='item.title' ></uploadImg>
						</div>
					</div>
				</article>
		</section>
	</div>
</template>
<script>
	import uploadImg from '@/views/components/uploadImg/index'
	import API from "@/config/api";
	let baseInfo ={}
	export default {
		data(){
			return {
				baseInfo : baseInfo,
			}
		},
		components:{
			"uploadImg" : uploadImg ,
		},
		methods: {
			setImgs(_this,data){
				let imgs = [
					{title:"发票",dataType:"发票"},{title:"应收账单",dataType:"应收账单"},
				];				
				if(data.accessoryList !=null){
					let imgArr = data.accessoryList;
					console.log(data.accessoryList);
					if( imgArr!=null && imgArr.length >0  ){
						for( let i = 0;i < imgArr.length; i++ ){
							for( let j = 0;j < imgs.length; j++){
								if( imgArr[i].fileType == imgs[j].dataType ){
									imgs[j].dialogImageUrl = imgArr[i].fileUrl;
									break;
								}
							}
						}
					}
				}
				_this.baseInfo.imgs = imgs;
			},
			init(){
				let _this = this ;
				let params = {
					id:_this.$route.query.id
				}
				API.queryFatoringInfo(params).then(result => {
			       	let data = result.data;
			       	if (data.code == 0) {
			       		_this.baseInfo = data.data;
			        } else {
			          this.$message({ message: data.msg,type: "warning"});
			        }
			         _this.setImgs(_this,data.data);
			    });
			   
			},
    	},
		created(){
			let _this = this ;
			_this.init();
		}
	}
	
</script>
<style lang="scss" scoped type="text/css">
   @import "./index.scss";
</style>
