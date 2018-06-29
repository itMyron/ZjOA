<template>
	<div class="contain">
		<header>
			<el-input class="inp" placeholder="请输入项目名称和项目编号" size="mini" v-model="key"></el-input>
			<el-button type="primary" v-model="key" plain icon="el-icon-search" size="mini" @click="querys">搜索</el-button>
			<el-button type="primary" plain icon="el-icon-plus" size="mini" @click="add">项目立项</el-button>
			<el-button type="primary" plain size="mini" @click="view">查看</el-button>
		</header>
		<section>
			<el-table :data="tableData" stripe style="width: 100%">
				<el-table-column label="序号" align="center" width="80">
					<template slot-scope="scope">
						{{scope.$index+1+limitSize*(currentPage-1)}}
					</template>
				</el-table-column>
				<el-table-column prop="projectNo" label="项目编号"></el-table-column>
				<el-table-column prop="projectName" label="项目名称"></el-table-column>
				<el-table-column prop="projectApplyTime" label="发起时间"></el-table-column>
				<el-table-column prop="projectOprator" label="申请人"></el-table-column>
				<el-table-column prop="productType" label="产品类型"></el-table-column>
				<el-table-column  label="审核">
					<template scope="scope">
			          <el-select  v-model="tableData[scope.$index].projectCheck" @change="selectStates(scope.row.index,scope.row.id,this)">
						<el-option label="请选择" value="0"></el-option>
						<el-option label="未审核" value="1"></el-option>
						<el-option label="审核通过" value="2"></el-option>
						<el-option label="驳回" value="3"></el-option>
					</el-select>
			         </template>
				</el-table-column>
				<el-table-column fixed="right" label="操作" width="310">
					<template slot-scope="scope">
						<el-button size="mini" type="info" plain @click="handleView(scope.row.id,scope.row.cid)">查看</el-button>
						<el-button size="mini" type="success" plain @click="audit">留言</el-button>
						<el-button size="mini" type="primary" plain @click="">附件</el-button>
					</template>
				</el-table-column>
			</el-table>
		</section>
		<footer>
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 30, 50]" :page-size="limitSize" layout="total, sizes, prev, pager, next, jumper" :total="totalCount">
			</el-pagination>
		</footer>
	</div>
</template>
<script>
	import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
	import API from "@/config/api";
	let projectApply = [];
	export default {
		data() {
			return {
				tableData: projectApply,
				limit: '',
				page: '',
				key: ''
			};
		},
		computed: {
			...mapState({

			}),
			...mapGetters({

			})
		},
		methods: {
			//项目立项列表
			querys(){
				this.resultList();
			},
			resultList() {
				let _this = this;
				let currenPage = _this.page
				let limitSize = _this.limit;
				let totalCount = _this.totalCount;
				if(null == currenPage || currenPage == "" || currenPage == "undefined") {
					currenPage = 1;
				}
				if(null == limitSize || limitSize == "" || limitSize == "undefined") {
					limitSize = 10;
				}
				if(null == totalCount || totalCount == "") {
					totalCount = 0;
				}
				let params = {
					page: currenPage,
					limit: limitSize,
					key: _this.key,
					pageType: 1
				}
				console.log(params)
				API.postProjectProgress(params).then(result => {
					console.log(result)
					if(null != result && result.data.code == 0&&null!=result.data.page.list) {
						let getData = result.data.page.list;
						projectApply = getData;
						if(null != getData) {
							getData.forEach((datas, index, objs) => {
								if(null!=datas&&null!=datas.productType){
									if(datas.productType==1){
										datas.productType = "应收账款转让";
									}else if(datas.productType==2){
										datas.productType = "票据";
									}
								}
								if(null!=datas&&datas.projectCheck){
									// 1:未审核 2：审核通过  3：驳回  4：拒绝',
									if(datas.projectCheck==1){
										datas.projectCheck=="未审核";
									}else if(datas.projectCheck==2){
										datas.projectCheck=="审核通过";
									}else if(datas.projectCheck==3){
										datas.projectCheck=="驳回";
									}else if(datas.projectCheck==4){
										datas.projectCheck=="拒绝";
									}
								}
							})
							this.tableData = projectApply;
							_this.totalCount = result.data.page.totalCount;
							_this.limitSize = result.data.page.pageSize;
							_this.currentPage = result.data.page.currPage;

						}
					} else {
						this.$message({
							message: "错误",
							type: "warning"
						});
					}
				});
			},
			handleView(id, cid) {
				let _this = this;
				_this.$router.push({
					"path": "projectProgressView",
					query: {
						id: id,
						cid: cid
					}
				})
			},
			add(){
				let _this = this;
				_this.$router.push({
					"path": "projectDeclareApplyAdd",
				})
			},
			view(){
				let self = this ;
				self.$router.push({
					"path":"/projectDeclareApplyView"
				})
			},
			selectStates(index,id,ob){
				console.log("选中的值是"+ob)
				let _this = this;
				let params = 
				{
					id:id,
					pageType:1,
				}
				
			},
			handleSizeChange(val) { //改变每页条数
				this.limit = val;
				this.resultList();
			},
			handleCurrentChange(val) { //改变当前页时会触发
				console.log(`当前页: ${val}`);
				this.page = val;
				this.resultList();
			}

		},
		watch: {},
		created() {
			this.resultList();

		},
		mounted() {

		}
	};
</script>
<style lang="scss" scoped type="text/css">
	@import "./index.scss";
</style>