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
				<el-table-column prop="companyName" label="企业名称"></el-table-column>
				<el-table-column prop="tel" label="联系方式" width="180"></el-table-column>
        		<el-table-column prop="modifyTime" label="开始合作时间" width="180"></el-table-column>
				<el-table-column prop="limitMoney" label="授信额度" ></el-table-column>
				<el-table-column prop="creditExpireTime" label="授信到期时间" ></el-table-column>
				<el-table-column prop="address" label="联系地址" ></el-table-column>
				<el-table-column fixed="right" label="状态" width="310">
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
			      key: _this.key
			    };
				//以下发送请求
				 API.financeList(params).then(result => {
			        let data = result.data;
			        if (data.code == "0") {
			          	_this.tableData = data.page.list;
			          	_this.totalCount = data.page.totalCount;
					  	_this.limitSize = data.page.pageSize;
					   	_this.currentPage = data.page.currPage;
			        } else {
			          this.$message({
			            message: result.msg,
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