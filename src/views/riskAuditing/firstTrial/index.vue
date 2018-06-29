<template>
	<div class="contain">
		<header>
			<el-input class="inp"  v-model="key" placeholder="请输入项目编号、项目名称、申请人、产品名称"></el-input>
			<el-button type="primary" plain icon="el-icon-search" size="mini" @click="seek">搜索</el-button>
		</header>
		<section>
			<el-table :data="tableData" stripe style="width: 100%">
				<el-table-column type="index"></el-table-column>
				<el-table-column prop="projectNo" label="项目编号"></el-table-column>
				<el-table-column prop="projectName" label="项目名称" width="180"></el-table-column>
        		<el-table-column prop="projectApplyTime" label="发起时间" width="180"></el-table-column>
				<el-table-column prop="applyName" label="申请人" ></el-table-column>
				<el-table-column prop="productType" label="产品类型" ></el-table-column>
				<el-table-column prop="audit" label="审核" >
					<template slot-scope="scope">
						<el-select v-model="status" placeholder="未审核" @change="applyAudit(status,scope.row)">
					    	<el-option
					      		v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					    	</el-option>
				  		</el-select>
					</template>
				</el-table-column>
				<el-table-column prop="audit" label="操作" width="310">
					<template slot-scope="scope">
						<el-button size="mini" type="info" plain @click="check()" >查看</el-button>
						<el-button size="mini" type="success" plain @click="check()" >附件</el-button>
						<el-button size="mini" type="primary" plain @click="check()">留言</el-button>
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

let dataInfo = [];
	export default {
		data(){
			return {
				tableData: dataInfo,
				totalCount:"0",
				options : [{
		          	value: '2',
		          	label: '通过'
			    },
			    {
			     	value: '3',
			        label: '驳回'
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
			      key: _this.key,
			      pageType : 4,
			    };
				API.riskAuditList(params).then(result => {
					let data = result.data;
					console.log( data);
			       	if (data.code == 0) {
			       		_this.tableData = data.page.list;
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
					str = "审核驳回";
				}
				_this.$confirm('确定'+ str +"吗", '提示', {
					cancelButtonText: '取消',
					confirmButtonText: '确定',
					type: 'warning'
				}).then(() => {
					let params = {
						status : status,
						id : row.id,
						pageType : 4
					}
				API.riskAudit(params).then(result => {
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