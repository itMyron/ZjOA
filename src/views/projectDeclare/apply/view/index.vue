<template>
	<div class="contain">
		<header>
			<div class="barTop">
				<p>
					<font>日期：</font>
					<span></span>
				</p>
				<p>
					<font>项目编号：</font>
					<span></span>
				</p>
			</div>
		</header>
		<section>
			<article>
				<div class="switch">
					<el-switch
						style="display: block"
						v-model="flag"
						active-color="#409EFF"
						inactive-color="#ff4949"
						active-text="编辑"
						inactive-text="">
					</el-switch>
				</div>
			</article>
			<article>
				<h3 class="title">产品类型</h3>
				<div class="list clear">
					<div class="item">
						<span class="bar">产品落地区域：</span>
						<el-select class="inp" v-model="projectInfo.productArea" :disabled="!flag" placeholder="请选择">
							<el-option label="杭州" value="杭州"></el-option>
							<el-option label="长兴" value="长兴"></el-option>
							<el-option label="长春" value="长春"></el-option>
							<el-option label="上海" value="上海"></el-option>
							<el-option label="大连" value="大连"></el-option>
						</el-select>
					</div>
					<div class="item">
						<span class="bar">产品类型：</span>
						<el-select class="inp" v-model="projectInfo.productType" :disabled="!flag" placeholder="请选择">
							<el-option label="应收账款转让" value="1"></el-option>
							<el-option label="票据" value="2"></el-option>
						</el-select>
					</div>
					<div class="item">
						<span class="bar">保理业务类型：</span>
						<el-select class="inp len" v-model="projectInfo.factorType" :disabled="!flag" placeholder="请选择">
							<el-option label="公开型有追索权保理" value="1"></el-option>
							<el-option label="隐蔽型有追索权保理" value="2"></el-option>
							<el-option label="公开型无追索权保理" value="3"></el-option>
							<el-option label="隐蔽型无追索权保理" value="4"></el-option>
						</el-select>
					</div>
					<div class="item">
						<span class="bar">转让额度类型：</span>
						<el-select class="inp" v-model="projectInfo.transferMoneyType" :disabled="!flag" placeholder="请选择">
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
						<el-input class="inp textarea" type="textarea" :disabled="!flag"></el-input>
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
						<el-input class="inp textarea" v-model="projectInfo.businessScope" type="textarea" :disabled="!flag"></el-input>
					</div>
				</div>
				<div class="list clear">
					<div class="item item4">
						<span class="bar">股东构成：</span>
						<el-input class="inp textarea" v-model="projectInfo.corporateArchitecture" type="textarea" :disabled="!flag"></el-input>
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
						<el-input class="inp" v-model="projectInfo.flowRate" :disabled="!flag"></el-input>
					</p>
					<p class="item">
						<span class="bar">经营性现金流：</span>
						<el-input class="inp" v-model="projectInfo.runCashFlow" :disabled="!flag"></el-input>
					</p>
					<p class="item">
						<span class="bar">投资性现金流：</span>
						<el-input class="inp" v-model="projectInfo.investCashFlow" :disabled="!flag"></el-input>
					</p>
				</div>
				<div class="list clear">
					<p class="item">
						<span class="bar">统筹性现金流：</span>
						<el-input class="inp" v-model="projectInfo.planCashflow" :disabled="!flag"></el-input>
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
				<div>
					<h3 class="title v_title">应收账款基本信息</h3>
					<el-button size="small" type="primary" v-if="flag" @click="handleEdit(-1)"><i class="fa fa-plus"></i>&nbsp;添加条目</el-button>
				</div>
				<div class="list clear">
					<el-table :data="tableData" style="width: 100%" border=true size="mini" stripe=true highlight-current-row=true>
						<el-table-column prop="unit" label="应收单位" width="180"></el-table-column>
						<el-table-column prop="money" label="应收账单金额" width="180"></el-table-column>
						<el-table-column prop="age" label="账龄"></el-table-column>
						<el-table-column prop="formingReason" label="形成原因"></el-table-column>
					</el-table>
				</div>
				<el-dialog title="应收账款基本信息" :visible.sync="dialogFormVisible">
      					<el-form :model="form" label-width="60%">
        					<el-form-item label="应收单位" :label-width="formLabelWidth">
          					<el-input v-model="form.unit" auto-complete="off"></el-input></el-form-item>
        					<el-form-item label="应收账单金额" :label-width="formLabelWidth">
          						<el-input v-model="form.money" auto-complete="off"></el-input>
        					</el-form-item>
        					<el-form-item label="账龄" :label-width="formLabelWidth">
								<el-input v-model="form.age" auto-complete="off"></el-input>
        					</el-form-item>
        					<el-form-item label="原因" :label-width="formLabelWidth">
								<el-input  v-model="form.formingReason" auto-complete="off" type="textarea"></el-input>
        					</el-form-item>
      					</el-form>
						<div slot="footer" class="dialog-footer">
							<el-button @click="cancel">取 消</el-button>
							<el-button type="primary" @click="conform">确 定</el-button>
						</div>
    			</el-dialog>
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
		<footer>
			<el-button size="small" @click="cancel">取消</el-button>
			<el-button size="small" @click="save" type="primary">保存</el-button>
		</footer>
	</div>
</template>
<script>
	import uploadImg from "../../../components/uploadImg/index";
	
	export default {
		data(){
			return {
				projectInfo: {
					operatorStatus: 1
				},
				flag: false,
				dialogImageUrl: "",
				dialogFormVisible: false,
				formLabelWidth: '100px',
				form:{},
				tableData: [],
				
			}
		},
		components: {
			uploadImg: uploadImg
		},
		methods :{
			handleEdit(index, row) {    //编辑按钮
				this.form = {} ;
				if(index == -1){//新增条目
					this.selectIndex = index;
					this.dialogFormVisible = true
				}else{//编辑
					this.form = this.tableData[index];
					this.currentIndex = index;
					this.selectIndex = index;
					this.dialogFormVisible = true
				}
				
				
			},
			handleDelete(index, row) {  //删除按钮
				
			},
			cancel() {      //取消按钮
				this.dialogFormVisible = false
			},
			conform() {      //确定按钮
				this.dialogFormVisible = false
			},
		},
		created(){
			
		}
	}

</script>
<style lang="scss" scoped type="text/css">
   @import "./index.scss";
</style>

