<template>
	<div class="contain">
		<header>
			<h2 class="titile">项目立项</h2>
		</header>
		<section class="clear">
			<!--<article class="barTop">
				<p>
					<font>日期：</font>
					<span>{{projectInfo.createTime}}</span>
				</p>
				<p>
					<font>项目编号：</font>
					<span>{{projectInfo.projectNo}}</span>
				</p>
			</article>-->

			<article>
				<h3 class="title">产品类型</h3>
				<div class="list clear">
					<div class="item">
						<span class="bar">产品落地区域：</span>
						<el-select class="inp" v-model="projectInfo.productArea" placeholder="请选择">
							<el-option label="杭州" value="杭州"></el-option>
							<el-option label="长兴" value="长兴"></el-option>
							<el-option label="长春" value="长春"></el-option>
							<el-option label="上海" value="上海"></el-option>
							<el-option label="大连" value="大连"></el-option>
						</el-select>
					</div>
					<div class="item">
						<span class="bar">产品类型：</span>
						<el-select class="inp" v-model="projectInfo.productType" placeholder="请选择">
							<el-option label="应收账款转让" value="1"></el-option>
							<el-option label="票据" value="2"></el-option>
						</el-select>
					</div>
					<div class="item">
						<span class="bar">保理业务类型：</span>
						<el-select class="inp len" v-model="projectInfo.factorType" placeholder="请选择">
							<el-option label="公开型有追索权保理" value="1"></el-option>
							<el-option label="隐蔽型有追索权保理" value="2"></el-option>
							<el-option label="公开型无追索权保理" value="3"></el-option>
							<el-option label="隐蔽型无追索权保理" value="4"></el-option>
						</el-select>
					</div>
					<div class="item">
						<span class="bar">转让额度类型：</span>
						<el-select class="inp" v-model="projectInfo.transferMoneyType" placeholder="请选择">
							<el-option label="循环额度" value="1"></el-option>
							<el-option label="非循环额度" value="2"></el-option>
						</el-select>
					</div>
				</div>

			</article>
			<article>
				<h3 class="title">增信措施</h3>
				<div class="list clear">
					<div class="item item4">
						<span class="bar">增信措施：</span>
						<el-input class="inp textarea" v-model="projectInfo.customCreditMethod" type="textarea"></el-input>
					</div>
				</div>
			</article>
			<article>
				<h3 class="title">项目来源</h3>
				<div class="list clear">
					<div class="item">
						<span class="bar">项目名称：</span>
						<el-input class="inp len" v-model="projectInfo.projectName"></el-input>
					</div>
					<divp class="item">
						<span class="bar">项目来源：</span>
						<el-input class="inp" v-model="projectInfo.projectSource"></el-input>
					</divp>
					<div class="item">
						<span class="bar">经办部门：</span>
						<el-input class="inp" v-model="projectInfo.projectHandleDept"></el-input>
					</div>
					<div class="item">
						<span class="bar">经办人员：</span>
						<el-input class="inp" v-model="projectInfo.projectOprator"></el-input>
					</div>
				</div>
			</article>
			<article>
				<h3 class="title">客户基本信息</h3>
				<div class="list clear">
					<p class="item">
						<span class="bar">企业名称：</span>
						<el-input class="inp" v-model="projectInfo.companyName"></el-input>
					</p>
					<p class="item">
						<span class="bar">企业性质：</span>
						<el-input class="inp" v-model="projectInfo.companyNature"></el-input>
					</p>
					<p class="item">
						<span class="bar">法定代表人：</span>
						<el-input class="inp" v-model="projectInfo.legalPerson"></el-input>
					</p>
					<p class="item">
						<span class="bar">实缴资金：</span>
						<el-input class="inp" v-model="projectInfo.paidCapital"></el-input>
					</p>
				</div>
				<div class="list clear">
					<p class="item">
						<span class="bar">成立时间：</span>
						<el-input class="inp" v-model="projectInfo.registerTime"></el-input>
					</p>
					<p class="item">
						<span class="bar">联系方式：</span>
						<el-input class="inp" v-model="projectInfo.contactTel"></el-input>
					</p>
					<p class="item">
						<span class="bar">注册资金（万）：</span>
						<el-input class="inp" v-model="projectInfo.registerCapital"></el-input>
					</p>
				</div>
				<div class="list clear">
					<div class="item item4">
						<span class="bar">注册地址：</span>
						<el-input class="inp" v-model="projectInfo.registerAddress"></el-input>
					</div>
				</div>
				<div class="list clear">
					<div class="item item4">
						<span class="bar">主营业务：</span>
						<el-input class="inp textarea" v-model="projectInfo.businessScope" type="textarea"></el-input>
					</div>
				</div>
				<div class="list clear">
					<div class="item item4">
						<span class="bar">股东构成：</span>
						<el-input class="inp textarea" v-model="projectInfo.corporateArchitecture" type="textarea"></el-input>
					</div>
				</div>
			</article>

			<article>
				<h3 class="title">财务数据（最近一期）</h3>
				<div class="list clear">
					<p class="item">
						<span class="bar">总资产：</span>
						<el-input class="inp" v-model="projectInfo.totalAssets"></el-input>
					</p>
					<p class="item">
						<span class="bar">主要收入：</span>
						<el-input class="inp" v-model="projectInfo.primaryIncome"></el-input>
					</p>
					<p class="item">
						<span class="bar">总负债：</span>
						<el-input class="inp" v-model="projectInfo.totalLiability"></el-input>
					</p>
					<p class="item">
						<span class="bar">营业利润：</span>
						<el-input class="inp" v-model="projectInfo.profit"></el-input>
					</p>
				</div>
				<div class="list clear">
					<p class="item">
						<span class="bar">净资产：</span>
						<el-input class="inp" v-model="projectInfo.netAsset"></el-input>
					</p>
					<p class="item">
						<span class="bar">净利润：</span>
						<el-input class="inp" v-model="projectInfo.netProfits"></el-input>
					</p>
					<p class="item">
						<span class="bar">应收账款：</span>
						<el-input class="inp" v-model="projectInfo.receivables"></el-input>
					</p>
					<p class="item">
						<span class="bar">应付账款：</span>
						<el-input class="inp" v-model="projectInfo.accountsPayable"></el-input>
					</p>
				</div>
				<div class="list clear">
					<p class="item">
						<span class="bar">资产负债率：</span>
						<el-input class="inp" v-model="projectInfo.assetsLiabilitiesRate"></el-input>
					</p>
					<p class="item">
						<span class="bar">流动比例：</span>
						<el-input class="inp" v-model="projectInfo.flowRate"></el-input>
					</p>
					<p class="item">
						<span class="bar">经营性现金流：</span>
						<el-input class="inp" v-model="projectInfo.runCashFlow"></el-input>
					</p>
					<p class="item">
						<span class="bar">投资性现金流：</span>
						<el-input class="inp" v-model="projectInfo.investCashFlow"></el-input>
					</p>
				</div>
				<div class="list clear">
					<p class="item">
						<span class="bar">统筹性现金流：</span>
						<el-input class="inp" v-model="projectInfo.planCashflow"></el-input>
					</p>
				</div>
			</article>
			<article>
				<h3 class="title">客户融资意向信息</h3>
				<div class="list clear">
					<div class="item">
						<span class="bar">融资金额：</span>
						<el-input class="inp len" v-model="projectInfo.financeAmount"></el-input>
					</div>
					<divp class="item">
						<span class="bar">融资用途：</span>
						<el-input class="inp" v-model="projectInfo.financeUsed"></el-input>
					</divp>
					<div class="item">
						<span class="bar">联系方式：</span>
						<el-input class="inp" v-model="projectInfo.financeTel"></el-input>
					</div>
				</div>
			</article>

			<article>
				<h3 class="title">业务建议额度</h3>
				<div class="list clear">
					<div class="item">
						<span class="bar">额度：</span>
						<el-input class="inp len" v-model="projectInfo.limitMoney"></el-input>
					</div>
					<divp class="item">
						<span class="bar">年化利率：</span>
						<el-input class="inp" v-model="projectInfo.rate"></el-input>
					</divp>
					<div class="item">
						<span class="bar">期限：</span>
						<el-input class="inp" v-model="projectInfo.monthNum"></el-input>
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
			<!--<article>
				<h3 class="title">营业执照</h3>
				<div class="list clear">
					<div class="item">
						<uploadImg @url="getUrl" :dialogImageUrl="dialogImageUrl" :fileName="营业执照" :fileType="flag" :flag="flag" :title="'营业执照'"></uploadImg>
					</div>
				</div>
			</article>-->
		</section>
		<footer>
			<el-button size="small" @click="cancel">取消</el-button>
			<el-button size="small" @click="save" type="primary">保存</el-button>
		</footer>
	</div>
</template>
<script>
	import uploadImg from "../../../components/uploadImg/index";
	import API from "@/config/api";
	import validate from "@/utils/validate";
	export default {
		components: {
			uploadImg: uploadImg
		},
		data() {
			return {
				projectInfo: {
					operatorStatus: 1
				},
				flag: false,
				dialogImageUrl: "",
				tableData: [],

			};
		},
		methods: {
			save() {
				let _this = this;
				let productArea = _this.projectInfo.productArea;
				if(productArea == null || productArea == "") {
					_this.$message({
						type: 'warning',
						message: '产品落地区域为空!'
					})
					return false;
				}
				let productType = _this.projectInfo.productType;
				if(null==productType||productType==""){
					_this.$message({
						type: 'warning',
						message: '产品类型为空!'
					})
					return false;
				}
				let factorType = _this.projectInfo.factorType;
				if(null==productType||productType==""){
					_this.$message({
						type: 'warning',
						message: '产品类型为空!'
					})
					return false;
				}
				let transferMoneyType = _this.projectInfo.transferMoneyType;
				if(null==transferMoneyType||transferMoneyType==""){
					_this.$message({
						type: 'warning',
						message: '转让额度类型!'
					})
					return false;
				}
				let customCreditMethod = _this.projectInfo.customCreditMethod;
				if(null==customCreditMethod||customCreditMethod==""){
					_this.$message({
						type: 'warning',
						message: '增信措施为空!'
					})
					return false;
				}
				let projectName = _this.projectInfo.projectName;
				if(null==projectName||projectName==""){
					_this.$message({
						type: 'warning',
						message: '项目名称为空!'
					})
					return false;
				}
				let projectSource = _this.projectInfo.projectSource;
				if(null==projectSource||projectSource==""){
					_this.$message({
						type: 'warning',
						message: '项目来源为空!'
					})
					return false;
				}
				let projectHandleDept = _this.projectInfo.projectHandleDept;
				if(null==projectHandleDept||projectHandleDept==""){
					_this.$message({
						type: 'warning',
						message: '项目经办部分为空!'
					})
					return false;
				}
				let projectOprator = _this.projectInfo.projectOprator;
				if(null==projectOprator||projectOprator==""){
					_this.$message({
						type: 'warning',
						message: '项目经办人为空!'
					})
					return false;
				}
				let companyName = _this.projectInfo.companyName;
				if(null==companyName||companyName==""){
					_this.$message({
						type: 'warning',
						message: '企业名称为空!'
					})
					return false;
				}
				let companyNature = _this.projectInfo.companyNature;
				if(null==companyNature||companyNature==""){
					_this.$message({
						type: 'warning',
						message: '企业性质为空!'
					})
					return false;
				}
				let legalPerson = _this.projectInfo.legalPerson;
				if(null==legalPerson||legalPerson==""){
					_this.$message({
						type: 'warning',
						message: '法人代表为空!'
					})
					return false;
				}
				let paidCapital = _this.projectInfo.paidCapital;
				if(null==paidCapital||paidCapital==""){
					_this.$message({
						type: 'warning',
						message: '实缴资金为空!'
					})
					return false;
				}
				let registerTime = _this.projectInfo.registerTime;
				if(null==registerTime||registerTime==""){
					_this.$message({
						type: 'warning',
						message: '成立时间为空!'
					})
					return false;
				}
				let contactTel = _this.projectInfo.contactTel;
				if(null==contactTel||contactTel==""){
					_this.$message({
						type: 'warning',
						message: '联系方式为空!'
					})
					return false;
				}
				let registerCapital = _this.projectInfo.registerCapital;
				if(null==registerCapital||registerCapital==""){
					_this.$message({
						type: 'warning',
						message: '注册资金为空!'
					})
					return false;
				}
				let registerAddress = _this.projectInfo.registerAddress;
				if(null==registerAddress||registerAddress==""){
					_this.$message({
						type: 'warning',
						message: '注册地址为空!'
					})
					return false;
				}
				let businessScope = _this.projectInfo.businessScope;
				let corporateArchitecture = _this.projectInfo.corporateArchitecture;
				let totalAssets = _this.projectInfo.totalAssets;
				let primaryIncome = _this.projectInfo.primaryIncome;
				let totalLiability = _this.projectInfo.totalLiability;
				let profit = _this.projectInfo.profit;
				let netAsset = _this.projectInfo.netAsset;
				let netProfits = _this.projectInfo.netProfits;
				let receivables = _this.projectInfo.receivables;
				let accountsPayable = _this.projectInfo.accountsPayable;
				let assetsLiabilitiesRate = _this.projectInfo.assetsLiabilitiesRate;
				let flowRate = _this.projectInfo.flowRate;
				let runCashFlow = _this.projectInfo.runCashFlow;
				let investCashFlow = _this.projectInfo.investCashFlow;
				let planCashflow = _this.projectInfo.planCashflow;
				let financeAmount = _this.projectInfo.financeAmount;
				let financeUsed = _this.projectInfo.financeUsed;
				let financeTel = _this.projectInfo.financeTel;
				let limitMoney = _this.projectInfo.limitMoney;
				let rate = _this.projectInfo.rate;
				let monthNum = _this.projectInfo.monthNum;
				console.log(_this.projectInfo)
				API.postAddProject(_this.projectInfo).then(result => {
					console.log(result.status)
					if(null != result) {
						if(result.status == "200") {
							_this.$message({
								type: 'success',
								message: '立项成功!'
							})
						} else {
							_this.$message({
								type: 'waring',
								message: '立项失败!'
							})
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
		created() {}
	};
</script>
<style lang="scss" scoped type="text/css">
	@import "./index.scss";
</style>