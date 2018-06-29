<template>
	<div class="contain">
		<header>
			<el-input class="inp" v-model="key" placeholder="请输入公司名称或合同编号" size="mini"></el-input>
			<el-button type="primary" plain icon="el-icon-search" size="mini" @click="querys">搜索</el-button>
			<el-button type="primary" plain icon="el-icon-plus" size="mini" @click="add">新增</el-button>
		</header>
		<section>
			<el-table :data="tableData" stripe style="width: 100%">
				<el-table-column label="序号" align="center" width="80">
					<template slot-scope="scope">
						{{scope.$index+1+limitSize*(currentPage-1)}}
					</template>
				</el-table-column>
				<el-table-column prop="roleId" label="角色id"></el-table-column>
				<el-table-column prop="roleName" label="角色名称"></el-table-column>
				<el-table-column prop="deptName" label="所属部门"></el-table-column>
				<el-table-column prop="remark" label="备注"></el-table-column>
				<el-table-column prop="createTime" label="创建时间"></el-table-column>
				<el-table-column fixed="right" label="操作" width="310">
					<template slot-scope="scope">
						<el-button size="mini" type="info" plain @click="handleView(scope.row.id,scope.row.cid)">修改</el-button>
						<el-button size="mini" type="danger" plain @click="audit">删除</el-button>
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
				API.postRoleManage(params).then(result => {
					console.log(result)
					if(null != result && result.data.code == 0 && null != result.data.page.list) {
						let getData = result.data.page.list;
						projectList = getData;
						if(null != getData) {
							this.tableData = projectList;
							_this.totalCount = result.data.page.totalCount;
							_this.limitSize = result.data.page.pageSize;
							_this.currentPage = result.data.page.currPage;

						}
					}
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