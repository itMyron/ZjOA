<template>
	<div class="contain">
		<header>
			<el-input class="inp" placeholder="请输入公司名称或合同编号" size="mini" v-model="personalKey"></el-input>
			<el-button type="primary" plain icon="el-icon-search" size="mini" @click="seek">搜索</el-button>
		</header>
		<section>
			<el-table :data="tableData" stripe style="width: 100%">
        <el-table-column type="index"></el-table-column>
    		<el-table-column prop="supCompanyName" label="企业名称" ></el-table-column>
    		<el-table-column prop="tel" label="联系方式"></el-table-column>
				<el-table-column prop="joinTime" label="开始合作时间" ></el-table-column>
				<el-table-column prop="trade" label="所属行业" ></el-table-column>
				<el-table-column prop="address" label="联系地址" ></el-table-column>
				<el-table-column prop="creditM" label="审核额度" ></el-table-column>
				<el-table-column fixed="right" label="操作" width="310">
					<template slot-scope="scope">
						<el-button size="mini" type="info" plain @click="handleView">查看</el-button>
            	<el-button size="mini" type="primary" plain @click="">同意</el-button>
              	<el-button size="mini" type="primary" plain @click="">拒绝</el-button>
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
import API from "../../../../config/api";

export default {
  data() {
    return {
      tableData: []
    };
  },
  computed: {
    ...mapState({}),
    ...mapGetters({})
  },
  methods: {
    list() {
      let self = this;
      if (self.limitSize == null) {
        self.limitSize = 10;
      }
      if (self.currentPage == null) {
        self.currentPage = 1;
      }
      let params = {
        type: 2,
        auditType: 1,
        key: self.$fn.trim(self.personalKey == null ? "" : self.personalKey),
        limit: self.limitSize,
        page: self.currentPage
      };
      API.postSupp(params).then(result => {
        result = result.data.page;
        let list = result.list;

        self.tableData = list;
      });
    },
    seek() {
      this.currentPage = 1;
      this.list();
    },
    handleSizeChange(val) {
      //改变每页条数
      this.limitSize = val;
      this.list();
    },
    handleCurrentChange(val) {
      //改变当前页时会触发
      this.currentPage = val;
      this.list();
    }
  },
  watch: {},
  created() {
    this.list();
  },
  mounted() {}
};
</script>
<style lang="scss" scoped type="text/css">
@import "./index.scss";
</style></style>