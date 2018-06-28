<template>
	<div class="contain">
		<header>
			<el-input class="inp" placeholder="请输入公司名称或合同编号" size="mini" v-model="personalKey"></el-input>
			<el-button type="primary" plain icon="el-icon-search" size="mini" @click="seek">搜索</el-button>
		</header>
		<section>
			<el-table :data="tableData" stripe style="width: 100%">
        <el-table-column type="index"></el-table-column>
    		<el-table-column prop="projectNo" label="项目编号"></el-table-column>
    		<el-table-column prop="name" label="项目名称"></el-table-column>
				<el-table-column prop="companyName" label="核心企业" ></el-table-column>
				<el-table-column prop="applyTime" label="申请时间" ></el-table-column>
				<el-table-column prop="applyName" label="申请人" ></el-table-column>
				<el-table-column prop="projectTypeName" label="产品类型" ></el-table-column>
        <el-table-column prop="meetingTypeTxt" label="会议形式" ></el-table-column>
        <el-table-column prop="projectCheckTxt" label="会议结果" ></el-table-column>
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
import API from "../../../config/api";

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
        key: self.$fn.trim(self.personalKey == null ? "" : self.personalKey),
        limit: self.limitSize,
        page: self.currentPage
      };
      API.postJudge(params).then(result => {
        result = result.data.page;
        let list = result.list;
        for (let i = 0; i < list.length; i++) {
          if (list[i].projectType == "1") {
            list[i].projectTypeName = "应收账款";
          } else if (list[i].projectType == "2") {
            list[i].projectTypeName = "票据";
          } else {
            list[i].meetingTypeTxt = "";
          }
          if (list[i].meetingType === 0) {
            list[i].meetingTypeTxt = "线上";
          } else if (list[i].meetingType === 1) {
            list[i].meetingTypeTxt = "线下";
          }
          if (list[i].projectCheck === 1) {
            list[i].projectCheckTxt = "进行中";
          } else if (list[i].projectCheck === 2) {
            list[i].projectCheckTxt = "通过";
          } else if (list[i].projectCheck === 3) {
            list[i].projectCheckTxt = "驳回";
          } else if (list[i].projectCheck === 4) {
            list[i].projectCheckTxt = "拒绝";
          }
        }
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