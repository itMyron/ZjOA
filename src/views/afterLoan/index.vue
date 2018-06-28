<template>
	<div class="contain">
		<header>
			<el-input class="inp" placeholder="请输入公司名称或合同编号" size="mini" v-model="personalKey"></el-input>
			<el-button type="primary" plain icon="el-icon-search" size="mini" @click="seek">搜索</el-button>
		</header>
		<section>
			<el-table :data="tableData" stripe style="width: 100%">
        <el-table-column type="index"></el-table-column>
    		<el-table-column prop="creditor" label="项目编号"></el-table-column>
    		<el-table-column prop="debtor" label="项目名称"></el-table-column>
				<el-table-column prop="compactCode" label="发起时间" ></el-table-column>
				<el-table-column prop="receivablesBalance" label="申请人" ></el-table-column>
				<el-table-column prop="compactTime" label="产品类型" ></el-table-column>
				<el-table-column prop="financingMoney" label="审核" ></el-table-column>
				<el-table-column fixed="right" label="操作" width="310">
					<template slot-scope="scope">
						<el-button size="mini" type="info" plain @click="handleView">查看</el-button>
					   	<el-button size="mini" type="success" plain @click="audit">留言</el-button>
						<el-button size="mini" type="primary" plain @click="">附件</el-button>
					</template> 
				</el-table-column>
  			</el-table>
		</section>
		<footer>
			<el-pagination 
				@size-change="handleSizeChange"	
				@current-change="handleCurrentChange"
				:current-page="currentPage"
				:page-sizes="[10, 30, 50]"
				:page-size="limitSize"
				layout="total, sizes, prev, pager, next, jumper"
				:total="totalCount">
			</el-pagination>
		</footer>
	</div>
</template>
<script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      tableData: []
    };
  },
  computed: {
    ...mapState({
      
    }),
    ...mapGetters({
    	
    })
  },
  methods: {
    
  },
  watch: {},
  created() {
    
  },
  mounted() {
    
  }
};
</script>
<style lang="scss" scoped type="text/css">
@import "./index.scss";
</style>