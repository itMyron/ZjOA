<template>
	<div class="contain">
		<header>
			<h2 class="titile">查看项目立项</h2>
		</header>
		<section class="clear">
			<article class="barTop">
				<p>
					<font>日期：</font>
					<span>{{projectInfo.createTime}}</span>
				</p>
				<p>
					<font>项目编号：</font>
					<span>{{projectInfo.projectNo}}</span>
				</p>
			</article>
			<article>
				<h3 class="title">产品类型</h3>
				<div class="list clear">
					<div class="item">
						<span class="bar">产品类型：</span>
						<el-input class="inp len" v-model="projectInfo.productType" :disabled="!flag"></el-input>
					</div>
					<div class="item">
						<span class="bar">保理业务类型：</span>
						<el-input class="inp len" v-model="projectInfo.factorType" :disabled="!flag"></el-input>
					</div>
					<div class="item">
						<span class="bar">转让额度类型：</span>
						<el-input class="inp len" v-model="projectInfo.transferMoneyType"  :disabled="!flag"></el-input>
					</div>
				</div>

			</article>
			<article>
				<h3 class="title">增信措施</h3>
				<div class="list clear">
					<div class="item item4">
						<span class="bar">增信措施：</span>
						<el-input class="inp textarea" v-model="projectInfo.customCreditMethod" :disabled="!flag" type="textarea"></el-input>
					</div>
				</div>
			</article>
			<article>
				<h3 class="title">项目来源</h3>
				<div class="list clear">
					<div class="item">
						<span class="bar">项目名称：</span>
						<el-input class="inp len" v-model="projectInfo.projectName" :disabled="!flag"></el-input>
					</div>
					<divp class="item">
						<span class="bar">项目来源：</span>
						<el-input class="inp" v-model="projectInfo.projectSource" :disabled="!flag"></el-input>
					</divp>
					<div class="item">
						<span class="bar">经办部门：</span>
						<el-input class="inp" v-model="projectInfo.projectHandleDept" :disabled="!flag"></el-input>
					</div>
					<div class="item">
						<span class="bar">经办人员：</span>
						<el-input class="inp" v-model="projectInfo.projectOprator" :disabled="!flag"></el-input>
					</div>
				</div>
			</article>
			<article>
				<h3 class="title">客户基本信息</h3>
				<div class="list clear">
					<p class="item">
						<span class="bar">企业名称：</span>
						<el-input class="inp" v-model="projectInfo.companyName" :disabled="!flag"></el-input>
					</p>
					<p class="item">
						<span class="bar">企业性质：</span>
						<el-input class="inp" v-model="projectInfo.companyNature" :disabled="!flag"></el-input>
					</p>
					<p class="item">
						<span class="bar">法定代表人：</span>
						<el-input class="inp" v-model="projectInfo.legalPerson" :disabled="!flag"></el-input>
					</p>
					<p class="item">
						<span class="bar">实缴资金：</span>
						<el-input class="inp" v-model="projectInfo.paidCapital" :disabled="!flag"></el-input>
					</p>
				</div>
				<div class="list clear">
					<p class="item">
						<span class="bar">成立时间：</span>
						<el-input class="inp" v-model="projectInfo.registerTime" :disabled="!flag"></el-input>
					</p>
					<p class="item">
						<span class="bar">联系方式：</span>
						<el-input class="inp" v-model="projectInfo.contactTel" :disabled="!flag"></el-input>
					</p>
					<p class="item">
						<span class="bar">注册资金（万）：</span>
						<el-input class="inp" v-model="projectInfo.registerCapital" :disabled="!flag"></el-input>
					</p>
				</div>
				<div class="list clear">
					<div class="item item4">
						<span class="bar">注册地址：</span>
						<el-input class="inp" v-model="projectInfo.registerAddress" :disabled="!flag"></el-input>
					</div>
				</div>
				<div class="list clear">
					<div class="item item4">
						<span class="bar">主营业务：</span>
						<el-input class="inp textarea" v-model="projectInfo.businessScope" :disabled="!flag" type="textarea"></el-input>
					</div>
				</div>
				<div class="list clear">
					<div class="item item4">
						<span class="bar">股东构成：</span>
						<el-input class="inp textarea" v-model="projectInfo.corporateArchitecture" :disabled="!flag" type="textarea"></el-input>
					</div>
				</div>
			</article>

			<article>
				<h3 class="title">财务数据（最近一期）</h3>
				<div class="list clear">
					<p class="item">
						<span class="bar">总资产：</span>
						<el-input class="inp" v-model="projectInfo.totalAssets" :disabled="!flag"></el-input>
					</p>
					<p class="item">
						<span class="bar">主要收入：</span>
						<el-input class="inp" v-model="projectInfo.primaryIncome" :disabled="!flag"></el-input>
					</p>
					<p class="item">
						<span class="bar">总负债：</span>
						<el-input class="inp" v-model="projectInfo.totalLiability" :disabled="!flag"></el-input>
					</p>
					<p class="item">
						<span class="bar">营业利润：</span>
						<el-input class="inp" v-model="projectInfo.profit" :disabled="!flag"></el-input>
					</p>
				</div>
				<div class="list clear">
					<p class="item">
						<span class="bar">净资产：</span>
						<el-input class="inp" v-model="projectInfo.netAsset" :disabled="!flag"></el-input>
					</p>
					<p class="item">
						<span class="bar">净利润：</span>
						<el-input class="inp" v-model="projectInfo.netProfits" :disabled="!flag"></el-input>
					</p>
					<p class="item">
						<span class="bar">应收账款：</span>
						<el-input class="inp" v-model="projectInfo.receivables" :disabled="!flag"></el-input>
					</p>
					<p class="item">
						<span class="bar">应付账款：</span>
						<el-input class="inp" v-model="projectInfo.accountsPayable" :disabled="!flag"></el-input>
					</p>
				</div>
				<div class="list clear">
					<p class="item">
						<span class="bar">资产负债率：</span>
						<el-input class="inp" v-model="projectInfo.assetsLiabilitiesRate" :disabled="!flag"></el-input>
					</p>
					<p class="item">
						<span class="bar">流动比例：</span>
						<el-input class="inp" v-model="projectInfo.flowRate"  :disabled="!flag"></el-input>
					</p>
					<p class="item">
						<span class="bar">经营性现金流：</span>
						<el-input class="inp" v-model="projectInfo.runCashFlow"  :disabled="!flag"></el-input>
					</p>
					<p class="item">
						<span class="bar">投资性现金流：</span>
						<el-input class="inp" v-model="projectInfo.investCashFlow"  :disabled="!flag"></el-input>
					</p>
				</div>
				<div class="list clear">
					<p class="item">
						<span class="bar">统筹性现金流：</span>
						<el-input class="inp" v-model="projectInfo.planCashflow"  :disabled="!flag"></el-input>
					</p>
				</div>
			</article>
			<article>
				<h3 class="title">客户融资意向信息</h3>
				<div class="list clear">
					<div class="item">
						<span class="bar">融资金额：</span>
						<el-input class="inp len" v-model="projectInfo.financeAmount" :disabled="!flag"></el-input>
					</div>
					<divp class="item">
						<span class="bar">融资用途：</span>
						<el-input class="inp" v-model="projectInfo.financeUsed" :disabled="!flag"></el-input>
					</divp>
					<div class="item">
						<span class="bar">联系方式：</span>
						<el-input class="inp" v-model="projectInfo.financeTel" :disabled="!flag"></el-input>
					</div>
				</div>
			</article>

			<article>
				<h3 class="title">业务建议额度</h3>
				<div class="list clear">
					<div class="item">
						<span class="bar">额度：</span>
						<el-input class="inp len" v-model="projectInfo.limitMoney" :disabled="!flag"></el-input>
					</div>
					<divp class="item">
						<span class="bar">年化利率：</span>
						<el-input class="inp" v-model="projectInfo.rate" :disabled="!flag"></el-input>
					</divp>
					<div class="item">
						<span class="bar">期限：</span>
						<el-input class="inp" v-model="projectInfo.monthNum" :disabled="!flag"></el-input>
					</div>
				</div>
			</article>
			<article>
				<h3 class="title">应收账款基本信息</h3>
				<div class="list clear">
					<el-table :data="tableData" style="width: 100%" border=true size="mini" stripe=true highlight-current-row=true>
						<el-table-column prop="unit" label="应收单位" width="180"></el-table-column>
						<el-table-column prop="money" label="应收账单金额" width="180"></el-table-column>
						<el-table-column prop="age" label="账龄"></el-table-column>
						<el-table-column prop="formingReason" label="形成原因"></el-table-column>
					</el-table>
				</div>
			</article>
			<article>
				<h3 class="title">营业执照</h3>
				<div class="list clear">
					<div class="item">
						<uploadImg @url="getUrl" :dialogImageUrl="dialogImageUrl" :fileName="营业执照" :fileType="flag" :flag="flag" :title="'营业执照'"></uploadImg>
					</div>
				</div>
			</article>
		</section>
		<footer v-if="flag">
			<el-button size="small" @click="cancel">取消</el-button>
			<el-button size="small" @click="save" type="primary">保存</el-button>
		</footer>
	</div>
</template>
<script>
	import uploadImg from "../../components/uploadImg/index";
	import API from "@/config/api";
	export default {
		components: {
			uploadImg: uploadImg
		},
		data() {
			return {
				projectInfo: {
					productType: '',
					factorType: '',
					transferMoneyType: '',
					customCreditMethod: '',
					projectName: '',
					projectSource: '',
					projectHandleDept: '',
					projectOprator: '',
					companyName:'',
					companyNature:'',
					legalPerson:'',
					paidCapital:'',
					registerTime:'',
					contactTel:'',
					registerCapital:'',
					registerAddress:'',
					businessScope:'',
					corporateArchitecture:'',
					totalAssets:'',
					primaryIncome:'',
					totalLiability:'',
					profit:'',
					netAsset:'',
					netProfits:'',
					receivables:'',
					accountsPayable:'',
					assetsLiabilitiesRate:'',
					flowRate:'',
					runCashFlow:'',
					investCashFlow:'',
					planCashflow:'',
					financeAmount:'',
					financeUsed:'',
					financeTel:'',
					limitMoney:'',
					rate:'',
					monthNum:'',
					createTime:'',
					projectNo:''
				},
				flag: false,
				dialogImageUrl: "",
				tableData: [],

			};
		},
		methods: {
			init() {
				let _this = this;
				let params = {
					id: _this.$route.query.id,
					cid: _this.$route.query.cid
				}
				//查看接口
				console.log(params)
				API.postCheckProject(params).then(result => {
					console.log(result)
					if(null != result && result.status == 200) {
						if(null != result.data.projectDo) {
							let getProjectDo = result.data.projectDo;
							console.log(getProjectDo.projectName)
							if(getProjectDo.productType == 1) {
								_this.projectInfo.productType = "应收账款转让";
							} else if(getProjectDo.productType == 2) {
								_this.projectInfo.productType = "票据";
							}
							if(getProjectDo.factorType == 1) {
								_this.projectInfo.factorType = "公开型有追索权保理";
							} else if(getProjectDo.factorType == 2) {
								_this.projectInfo.factorType = "隐蔽型有追索权保理";
							} else if(getProjectDo.factorType == 3) {
								_this.projectInfo.factorType = "公开型无追索权保理";
							} else if(getProjectDo.factorType == 4) {
								_this.projectInfo.factorType = "隐蔽型无追索权保理";
							}
							if(getProjectDo.transferMoneyType == 1) {
								_this.projectInfo.transferMoneyType = "循环额度";
							} else if(getProjectDo.transferMoneyType == 2) {
								_this.projectInfo.transferMoneyType = "非循环额度";
							}
							_this.projectInfo.customCreditMethod = getProjectDo.customCreditMethod; //增信措施
							_this.projectInfo.projectName = getProjectDo.projectName; //项目名称
							_this.projectInfo.projectSource = getProjectDo.projectSource; //项目来源
							_this.projectInfo.projectHandleDept = getProjectDo.projectHandleDept; //经办部门
							_this.projectInfo.projectOprator = getProjectDo.projectOprator; //经办人员projectNo
							_this.projectInfo.projectNo = getProjectDo.projectNo;//项目编号
							_this.projectInfo.createTime = getProjectDo.createTime;//项目创建时间
						}
						//核心企业信息
						if(null != result.data.compareDo) {
							let getCompareDo = result.data.compareDo;
							_this.projectInfo.companyName = getCompareDo.companyName; //企业名称
							_this.projectInfo.companyNature = getCompareDo.companyNature; //企业性质
							_this.projectInfo.legalPerson = getCompareDo.legalPerson; //法人代表
							_this.projectInfo.paidCapital = getCompareDo.paidCapital; //实缴资金
							_this.projectInfo.registerTime = getCompareDo.registerTime; //成立时间
							_this.projectInfo.contactTel = getCompareDo.contact_tel; //联系方式
							_this.projectInfo.registerCapital = getCompareDo.registerCapital; //注册资金
							_this.projectInfo.registerAddress = getCompareDo.registerAddress; //注册地址
							_this.projectInfo.businessScope = getCompareDo.businessScope; //主营业务
							_this.projectInfo.corporateArchitecture = getCompareDo.corporateArchitecture; //股东构成
							_this.projectInfo.totalAssets = getCompareDo.totalAssets; //总资产
							_this.projectInfo.primaryIncome = getCompareDo.primaryIncome; //主营收入
							_this.projectInfo.totalLiability = getCompareDo.totalLiability; //总负债
							_this.projectInfo.profit = getCompareDo.profit; //营业利润
							_this.projectInfo.netAsset = getCompareDo.netAsset; //净资产
							_this.projectInfo.netProfits = getCompareDo.netProfits; //净利润
							_this.projectInfo.receivables = getCompareDo.receivables; //应收账款
							_this.projectInfo.accountsPayable = getCompareDo.accountsPayable; //应付账款
							_this.projectInfo.assetsLiabilitiesRate = getCompareDo.assetsLiabilitiesRate; //资产负债率
							_this.projectInfo.flowRate = getCompareDo.flowRate; //流动比率
							_this.projectInfo.runCashFlow = getCompareDo.runCashFlow; //经营性现金流
							_this.projectInfo.investCashFlow = getCompareDo.investCashFlow; //投资性现金流
							_this.projectInfo.planCashflow = getCompareDo.planCashflow; //统筹性现金流

						}
						//融资信息
						if(null != result.data.financeDo) {
							let getFinance = result.data.financeDo;
							_this.projectInfo.financeAmount = getFinance.financeAmount; //融资金额
							_this.projectInfo.financeUsed = getFinance.financeUsed; //融资用途
							_this.projectInfo.financeTel = getFinance.financeTel; //融资联系方式
						}
						//建议额度信息
						if(null != result.data.limitDo) {
							let getLimit = result.data.limitDo;
							_this.projectInfo.limitMoney = getLimit.limitMoney; //建议额度
							_this.projectInfo.rate = getLimit.rate; //年化利率
							_this.projectInfo.monthNum = getLimit.monthNum; //期限
						}
						//应收账款信息
						if(result.data.receiveDo){
							_this.tableData = result.data.receiveDo;
						}
						//附件信息
						if(null!=result.data.accessoryDo){
							_this.projectInfo.dialogImageUrl = result.data.accessoryDo.fileName;
						}
					}

				});

			},

			getUrl(data) {
				this.dialogImageUrl.map(item => {
					if(item.fileType == data.fileType) {
						item.fileName = data.fileName;
					}
				});
			},

		},
		created() {
			this.init();
		}
	};
</script>
<style lang="scss" scoped type="text/css">
	@import "./index.scss";
</style>
