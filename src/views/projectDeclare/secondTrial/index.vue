<template>
	<div class="contain">
		<header>
			<el-input class="inp" placeholder="请输入项目名称和项目编号" size="mini" v-model="personalKey"></el-input>
			<el-button type="primary" v-model="key" plain icon="el-icon-search" size="mini" @click="querys">搜索</el-button>
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
				<el-table-column  label="审核"></el-table-column>
				<el-table-column fixed="right" label="操作" width="400">
					<template slot-scope="scope">
						<el-button size="mini" type="info" plain @click="handleView(scope.row.id,scope.row.cid)">查看</el-button>
						<el-button size="mini" type="success" plain @click="audit">留言</el-button>
						<el-button size="mini" type="primary" plain @click="">附件</el-button>
						<el-button size="mini" type="primary" plain @click="">指定风控专员</el-button>
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
	let projectApplyRecheck = [];
	export default {
		data() {
			return {
				tableData: projectApplyRecheck,
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
					pageType: 3
				}
				console.log(params)
				API.postProjectProgress(params).then(result => {
					console.log(result)
					if(null != result && result.data.code == 0&&null!=result.data.page.list) {
						let getData = result.data.page.list;
						projectApplyRecheck = getData;
						if(null != getData) {
							getData.forEach((datas, index, objs) => {
								if(null!=datas&&null!=datas.productType){
									if(datas.productType==1){
										datas.productType = "应收账款转让";
									}else if(datas.productType==2){
										datas.productType = "票据";
									}
								}
							})
							this.tableData = projectApplyRecheck;
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