<template>
	<div class="contain">
		<header>
			<el-input class="inp" v-model="key" placeholder="请输入公司名称或合同编号" size="mini"></el-input>
			<el-select class="inp" placeholder="请选择">
				<el-option label="项目申请" value="1"></el-option>
				<el-option label="项目初审" value="2"></el-option>
				<el-option label="项目复审" value="3"></el-option>
				<el-option label="风控初审" value="4"></el-option>
				<el-option label="风控复审" value="5"></el-option>
				<el-option label="法务审核" value="6"></el-option>
				<el-option label="业务副总审核" value="7"></el-option>
				<el-option label="风控副总审核" value="8"></el-option>
				<el-option label="项目流转" value="9"></el-option>
				<el-option label="有权人审核" value="10"></el-option>
				<el-option label="总经理审核" value="11"></el-option>
			</el-select>
			<el-button type="primary" plain icon="el-icon-search" size="mini" @click="querys">搜索</el-button>
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
				<el-table-column prop="projectStatus" label="审核状态"></el-table-column>
				<el-table-column prop="productType" label="产品类型"></el-table-column>
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
	let projectList = [];
	export default {
		data() {
			return {
				tableData: projectList,
				limit: '',
				page: '',
				key: '' //查询信息
			};
		},
		computed: {
			...mapState({

			}),
			...mapGetters({

			})
		},
		methods: {
			querys() {
				this.resultData();
			},
			resultData() {
				let _this = this;
				let currentPage = _this.page; //当前页
				let limitSize = _this.limit; //每页的条数
				let totalCount = _this.totalCount;
				//默认值的设置
				if(null == currentPage || currentPage == "") {
					currentPage = 1;
				}
				if(null == limitSize || limitSize == "") {
					limitSize = 10;
				}
				if(null == totalCount || totalCount == "") {
					totalCount = 0;
				}
				let params = {
					page: currentPage,
					limit: limitSize,
					key: _this.key
				}
				console.log(params)
				API.postProjectProgress(params).then(result => {
					console.log(result)
					if(null != result && result.data.code == 0 && null != result.data.page.list) {
						let getData = result.data.page.list;
						projectList = getData;
						if(null != getData) {
							getData.forEach((datas, index, objs) => {
								if(datas.projectStatus == 1) {
									datas.projectStatus = "项目申请";
								} else if(datas.projectStatus == 2) {
									datas.projectStatus = "项目初审";
								} else if(datas.projectStatus == 3) {
									datas.projectStatus = "项目复审";
								} else if(datas.projectStatus == 4) {
									datas.projectStatus = "风控初审";
								} else if(datas.projectStatus == 5) {
									datas.projectStatus = "风控复审";
								} else if(datas.projectStatus == 6) {
									datas.projectStatus = "法务审核";
								} else if(datas.projectStatus == 7) {
									datas.projectStatus = "业务副总审核";
								} else if(datas.projectStatus == 8) {
									datas.projectStatus = "风控副总审核";
								} else if(datas.projectStatus == 9) {
									datas.projectStatus = "项目流转";
								} else if(datas.projectStatus == 10) {
									datas.projectStatus = "有权人审核";
								} else if(datas.projectStatus == 1) {
									datas.projectStatus = "总经理审核";
								}
								//1:应收账款转让  2:票据
								if(datas.productType == 1) { //productType
									datas.productType = "应收账款转让";
								} else if(datas.productType == 2) {
									datas.productType = "票据";
								}
							})
							this.tableData = projectList;
							_this.totalCount = result.data.page.totalCount;
							_this.limitSize = result.data.page.pageSize;
							_this.currentPage = result.data.page.currPage;

						}
					}
					/*else {
						this.$message({
							message: "错误",
							type: "warning"
						});
					}*/
				});
			},
			handleSizeChange(val) { //改变每页条数
				this.limit = val;
				this.resultData();
			},
			handleCurrentChange(val) { //改变当前页时会触发
				console.log(`当前页: ${val}`);
				this.page = val;
				this.resultData();
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
			}

		},
		watch: {},
		mounted() {

		},
		created() {
			this.resultData();
		},
	};
</script>
<style lang="scss" scoped type="text/css">
	@import "./index.scss";
</style>