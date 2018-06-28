<template>
	<div class="contain">
		<header>
			<h2 class="titile">查看项目立项</h2>
		</header>
		<section class="clear">
			<article class="barTop">
				<p>
					<font>日期：</font>
					<span>2018-06-27</span>
				</p>
				<p>
					<font>项目编号：</font>
					<span>XX78945</span>
				</p>
			</article>
			
			<article>
				<h3 class="title">产品类型</h3>
				<div class="list clear">
					<div class="item">
						<span class="bar">产品类型：</span>
						<el-select class="inp" :disabled="!flag" placeholder="请选择">
							<el-option label="这个" value="1"></el-option>
							<el-option label="那个" value="0"></el-option>
						</el-select>
					</div>
					<div class="item">
						<span class="bar">保理业务类型：</span>
						<el-select class="inp" :disabled="!flag" placeholder="请选择">
							<el-option label="这个" value="1"></el-option>
							<el-option label="那个" value="0"></el-option>
						</el-select>
					</div>
					<div class="item">
						<span class="bar">转让额度类型：</span>
						<el-select class="inp" :disabled="!flag" placeholder="请选择">
							<el-option label="这个" value="1"></el-option>
							<el-option label="那个" value="0"></el-option>
						</el-select>
					</div>
				</div>
			
			</article>
			<article>
				<h3 class="title">增信措施</h3>
				<div class="list clear">
					<div class="item item4">
						<span class="bar">增信措施：</span>
						<el-input class="inp textarea" :disabled="!flag" type="textarea"></el-input>
					</div>
				</div>
			</article>
			<article>	
				<h3 class="title">项目来源</h3>
				<div class="list clear">
					<div class="item">
						<span class="bar">项目名称：</span>
						<el-input class="inp len" :disabled="!flag"></el-input>
					</div>
					<divp class="item">
						<span class="bar">项目来源：</span>
						<el-input class="inp" :disabled="!flag"></el-input>
					</divp>
					<div class="item">
						<span class="bar">经办部门：</span>
						<el-input class="inp" :disabled="!flag"></el-input>
					</div>
					<div class="item">
						<span class="bar">经办人员：</span>
						<el-input class="inp" :disabled="!flag"></el-input>
					</div>
				</div>
			</article>
			<article>
				<h3 class="title">客户基本信息</h3>
				<div class="list clear">
					<p class="item">
						<span class="bar">企业名称：</span>
						<el-input class="inp" :disabled="!flag"></el-input>
					</p>
					<p class="item">
						<span class="bar">企业状态：</span>
						<el-input class="inp" :disabled="!flag"></el-input>
					</p>
					<p class="item">
						<span class="bar">法定代表人：</span>
						<el-input class="inp" :disabled="!flag"></el-input>
					</p>
					<p class="item">
						<span class="bar">实缴资金：</span>
						<el-input class="inp" :disabled="!flag"></el-input>
					</p>
				</div>
				<div class="list clear">
					<p class="item">
						<span class="bar">成立时间：</span>
						<el-input class="inp" :disabled="!flag"></el-input>
					</p>
					<p class="item">
						<span class="bar">联系方式：</span>
						<el-input class="inp" :disabled="!flag"></el-input>
					</p>
					<p class="item">
						<span class="bar">注册资金（万）：</span>
						<el-input class="inp" :disabled="!flag"></el-input>
					</p>
				</div>
				<div class="list clear">
					<div class="item item4">
						<span class="bar">注册地址：</span>
						<el-input class="inp" :disabled="!flag"></el-input>
					</div>	
				</div>
				<div class="list clear">
					<div class="item item4">
						<span class="bar">主营业务：</span>
						<el-input class="inp textarea" :disabled="!flag" type="textarea"></el-input>
					</div>
				</div>
				<div class="list clear">
					<div class="item item4">
						<span class="bar">股东构成：</span>
						<el-input class="inp textarea" :disabled="!flag" type="textarea"></el-input>
					</div>
				</div>
			</article>
			<article>
				<h3 class="title">财务数据（最近一期）</h3>
				<div class="list clear">
					<p class="item">
						<span class="bar">总资产：</span>
						<el-input class="inp" :disabled="!flag"></el-input>
					</p>
					<p class="item">
						<span class="bar">主营业务：</span>
						<el-input class="inp" :disabled="!flag"></el-input>
					</p>
					<p class="item">
						<span class="bar">总负债：</span>
						<el-input class="inp" :disabled="!flag"></el-input>
					</p>
					<p class="item">
						<span class="bar">营业利润：</span>
						<el-input class="inp"  :disabled="!flag"></el-input>
					</p>
				</div>
				<div class="list clear">
					<p class="item">
						<span class="bar">净资产：</span>
						<el-input class="inp" :disabled="!flag"></el-input>
					</p>
					<p class="item">
						<span class="bar">净利润：</span>
						<el-input class="inp" :disabled="!flag"></el-input>
					</p>
					<p class="item">
						<span class="bar">应收账款：</span>
						<el-input class="inp" :disabled="!flag"></el-input>
					</p>
					<p class="item">
						<span class="bar">应付账款：</span>
						<el-input class="inp"  :disabled="!flag"></el-input>
					</p>
				</div>
				<div class="list clear">
					<p class="item">
						<span class="bar">资产负债率：</span>
						<el-input class="inp" :disabled="!flag"></el-input>
					</p>
					<p class="item">
						<span class="bar">流动比例：</span>
						<el-input class="inp" :disabled="!flag"></el-input>
					</p>
					<p class="item">
						<span class="bar">经营性现金流：</span>
						<el-input class="inp" :disabled="!flag"></el-input>
					</p>
					<p class="item">
						<span class="bar">投资性现金流：</span>
						<el-input class="inp"  :disabled="!flag"></el-input>
					</p>
				</div>
				<div class="list clear">
					<p class="item">
						<span class="bar">统筹性现金流：</span>
						<el-input class="inp" :disabled="!flag"></el-input>
					</p>
				</div>
			</article>
			<article>
				<h3 class="title">应收账款基本信息</h3>
				<div class="list clear">
					<el-table :data="tableData" style="width: 100%" border=true size="mini" stripe=true highlight-current-row=true >
						<el-table-column prop="date" label="日期" width="180"></el-table-column>
     					<el-table-column prop="name" label="姓名" width="180"></el-table-column>
      					<el-table-column prop="address" label="地址"></el-table-column>
    				</el-table>
				</div>
			</article>
			<article>
				<h3 class="title">附件资料</h3>
				<div class="list clear">
					<div class="item">
						<uploadImg @url="getUrl" :dialogImageUrl="dialogImageUrl" :fileName="营业执照" :fileType="flag" :flag="flag" :title="'营业执照'"></uploadImg>
					</div>
				</div>
			</article>
		</section>
		<footer v-if="flag">
			<el-button size="small" @click="cancel">取消</el-button>
			<el-button size="small" @click="save" type="primary">保存</el-button>
		</footer>
	</div>
</template>
<script>
import uploadImg from "../../components/uploadImg/index";
const tableData = [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
export default {
  components: {
    uploadImg: uploadImg
  },
  data() {
    return {
      flag: false,
      dialogImageUrl: "http://image.baidu.com/search/detail?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=%E5%9B%BE%E7%89%87&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&cs=2239146502,165013516&os=13729796,1018751327&simid=4179302581,635478331&pn=1&rn=1&di=186056143020&ln=1988&fr=&fmq=1530089530410_R&fm=detail&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F018d4e554967920000019ae9df1533.jpg%40900w_1l_2o_100sh.jpg&rpstart=0&rpnum=0&adpicid=0&ctd=1530089531511^3_1583X807%1",
      tableData,
      
    };
  },
  methods: {
  
    getUrl(data) {
      this.dialogImageUrl.map(item => {
        if (item.fileType == data.fileType) {
          item.fileName = data.fileName;
        }
      });
    },

   
  },
  created() {
  
  }
};
</script>
<style lang="scss" scoped type="text/css">
@import "./index.scss";
</style>