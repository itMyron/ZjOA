<template>
	<div class="contain">
		<header>
			<el-input class="inp"  v-model="key" placeholder="请输入项目编号、项目名称、申请人、产品名称"></el-input>
			<el-button type="primary" plain icon="el-icon-search" size="mini" @click="seek">搜索</el-button>
			<el-button type="success" plain icon="el-icon-plus" size="mini" @click="handleAdd(true)">新增</el-button>
		</header>
		<section>
			<el-table :data="tableData" stripe style="width: 100%">
				<el-table-column type="index"></el-table-column>
				<el-table-column prop="orderNo" label="订单编号" width="190"></el-table-column>
				<el-table-column prop="creditor" label="债权人"></el-table-column>
        		<el-table-column prop="debtor" label="债务人"></el-table-column>
				<el-table-column prop="creditLimit" label="实际授信额度" ></el-table-column>
				<el-table-column prop="receivablesBalance" label="应收账款本金余额" ></el-table-column>
				<el-table-column prop="financingMoney" label="融资金额" ></el-table-column>
				<el-table-column prop="financingRate" label="融资利率" ></el-table-column>
				<el-table-column prop="applyTime" label="申请时间" ></el-table-column>
				<el-table-column prop="applyStatus" label="审核">
						<template slot-scope="scope">
							<el-select v-model="status" placeholder="未审核" @change="applyAudit(status,scope.row)" >
						    	<el-option
						      		v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						    	</el-option>
					  		</el-select>
						</template>
				</el-table-column>
				<el-table-column fixed="right" label="操作" width="310">
					<template slot-scope="scope">
						<el-button size="mini" type="info" plain @click="check()" >查看</el-button>
						<el-button size="mini" type="success" plain @click="check()" >附件</el-button>
					</template>
				</el-table-column>
  			</el-table>
		</section>
		<footer>
			<el-pagination
				@size-change="handleSizeChange"  @current-change="handleCurrentChange" :current-page="currentPage"
				 :page-sizes="[10, 30, 50]" :page-size="limitSize" layout="total, sizes, prev, pager, next, jumper"
				 :total="totalCount">
			</el-pagination>
		</footer>
	</div>
</template>
<script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
import API from "@/config/api";

let dataInfo = [
	
];
	export default {
		data(){
			return {
				tableData: dataInfo,
				totalCount:"0",
				options : [
				{
		          	value: '2',
		          	label: '通过'
			    },
			    {
			     	value: '3',
			        label: '拒绝'
				}]
			}
		},
		methods: {
			init(){
				let _this = this ;
				let currentPage = _this.currentPage;
			    let limitSize = _this.limitSize;
			    if (this.currentPage == null) {
			      currentPage = 1;
			    }
			    if (this.limitSize == null) {
			      limitSize = 10;
			    }
			    if (this.totalCount == null) {
			      this.totalCount = 0;
			    }
			    let params = {
			      page: currentPage,
			      limit: limitSize,
			      key: _this.key
			    };
				//以下发送请求
				 API.joinFundList(params).then(result => {
			       	let data = result.data;
					console.log( data);
			       	if (data.code == 0) {
			       		result = data.page.list; 
			        	for(var i=0;i<result.length;i++){
				  			 //设置审核状态
				  			if(result[i].applyStatus == 3){
				  				console.log(result[i]);
				  			}
					    }
			       		_this.tableData = result;
			       		_this.totalCount = data.page.totalCount;
					  	_this.limitSize = data.page.pageSize;
					   	_this.currentPage = data.page.currPage;
			        } else {
			          this.$message({
			            message: data.msg,
			            type: "warning"
			          });
			        }
			      });
				
			},
		    seek() {
		      this.init();
		      this.currentPage = 1;
		    },
			handleSizeChange(val) {		//改变每页条数
				 this.limitSize = val;
     			 this.init();
			},
			handleCurrentChange(val) {		//改变当前页时会触发
				this.currentPage = val;
      			this.init();
			},//申请状态
			applyAudit(status,row){
				let _this = this;
				let str;
				if(2 == status){
					str = "审核通过";
				}else if (3 == status){
					str = "审核拒绝";
				}
				_this.$confirm('确定'+ str +"吗", '提示', {
					cancelButtonText: '取消',
					confirmButtonText: '确定',
					type: 'warning'
				}).then(() => {
					let params = {
						status : status,
						id : row.id,
					}
				API.joinFundAudit(params).then(result => {
					let data = result.data;
			       	if (data.state == 200) {
			       		_this.$message({
						    message: "审核成功",
						    type: 'success'
						});
						_this.init();
			        } else {
			          this.$message({
			            message: data.msg,
			            type: "warning"
			          });
			        }
			     });
				}).catch(() => {
				});
			},
			//按钮
			check(){
				const self = this ;
				self.$message({message: '附件留言',type: 'success'});
			}
    	},
		created(){
			let _this = this;
			_this.init();
		}
	}

</script>
<style lang="scss" scoped type="text/css">
@import "./index.scss";
</style></style>