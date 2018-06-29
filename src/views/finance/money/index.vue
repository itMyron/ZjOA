<template>
	<div class="contain">
		<header>
			<el-input class="inp"  v-model="key" placeholder="请输入订单编号、债权人、债务人"></el-input>
			<el-button type="primary" plain icon="el-icon-search" size="mini" @click="seek">搜索</el-button>
		</header>
		<section>
			<el-table :data="tableData" stripe style="width: 100%">
				<el-table-column type="index"></el-table-column>
				<el-table-column prop="orderNo" label="订单编号" width="190"></el-table-column>
				<el-table-column prop="creditor" label="债权人" ></el-table-column>
        		<el-table-column prop="debtor" label="债务人" ></el-table-column>
				<el-table-column prop="creditBalance" label="实际授信余额" ></el-table-column>
				<el-table-column prop="financingMoney" label="融资金额" ></el-table-column>
				<el-table-column prop="totalRemitMoney" label="实际打款金额" ></el-table-column>
				<el-table-column prop="modifyTime" label="操作时间" width="200"></el-table-column>
				<el-table-column prop="audit" label="状态" ></el-table-column>
				<el-table-column fixed="right" label="操作" width="310">
					<template slot-scope="scope">
						<el-button size="mini" type="info" plain @click="checkFactor(scope.row)" >查看</el-button>
						<el-button size="mini" type="success" plain @click="check()" >附件</el-button>
						<el-button size="mini" type="primary" plain @click="uploadProof()" v-if="scope.row.audit==='未打款'">打款凭证上传</el-button>
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
			      pageType :3
			    };
				 API.loanListing(params).then(result => {
			        let data = result.data;
			        if (data.code == "0") {
			        	result = data.page.list; 
			        	for(var i=0;i<result.length;i++){
				  			 //设置审核状态和操作时间
				  			if(result[i].applyStatus == 5){
				  				result[i].audit = "已打款";
				  			}else if( result[i].applyStatus == 4){
				  				result[i].audit = "未打款";
				  			}else{
				  				result[i].audit = "状态错误";
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
			},
			//按钮
			check(){
				const self = this ;
				self.$message({message: '预留',type: 'success'});
			},
			checkFactor(row){
				let self = this;
				self.$store.dispatch("nav/changeBack", true);
				self.$router.push({
					"path":"/factoringLook",
					"query":{
						id:row.id
					}
				})
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