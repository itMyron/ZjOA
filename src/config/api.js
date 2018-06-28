let root = process.env.API_ROOT;
import axios from "../utils/axios"
let API = {
	
	//财务审核
	financeList: params => (
    axios({
      method: 'POST',
      url: root + '/project/financeManage/financeList',
      data: params
    })
  ),
	//财务管理
	financeList: params => (
    axios({
      method: 'POST',
      url: root + '/project/financeManage/financeList',
      data: params
    })
  ),
  //打款列表
	loanListing: params => (
    axios({
      method: 'POST',
      url: root + '/project/financeManage/loanListing',
      data: params
    })
  ),
  //打款审核
	loanListingAudit: params => (
    axios({
      method: 'POST',
      url: root + '/project/financeManage/loanListingAudit',
      data: params
    })
  ),
  //打款凭证上传
  uploadProof: params => (
    axios({
      method: 'POST',
      url: root + '/project/financeManage/uploadProof',
      data: params
    })
  ),
  //保理融资列表
	joinFundList: params => (
    axios({
      method: 'POST',
      url: root + '/project/joinFund/joinFundList_two',
      data: params
    })
  ),
  //保理融资审核
	joinFundAudit: params => (
    axios({
      method: 'POST',
      url: root + '/project/joinFund/joinFundAudit',
      data: params
    })
  ),
	//风控列表
	riskAuditList: params => (
    axios({
      method: 'POST',
      url: root + '/project/riskAudit/risk_list',
      data: params
    })
  ),
	//风控审核
	riskAudit: params => (
    axios({
      method: 'POST',
      url: root + '/project/riskAudit/riskAudit',
      data: params
    })
	  ),
  //登陆
  postLogin: params => (
    axios({
      method: 'POST',
      url: root + '/sys/login',
      data: params
    })
  ),
  //获取md5
  postMD5: params => (
    axios({
      method: 'POST',
      url: root + '/sys/login/get'
    })
  ),
  //获取菜单列表
  postMenu: params => (
    axios({
      method: 'POST',
      url: root + "/sys/menu/nav2",
    })
  ),
  //获取项目评审
  postJudge: params => (
    axios({
      method: 'POST',
      url: root + "/project/judge/projectList",
      data: params
    })
  ),
  //获取线上会议投票列表
  postVote: params => (
    axios({
      method: 'POST',
      url: root + "/project/judge/voteList",
      data: params
    })
  ),
  //获取核心企业
  postCompany: params => (
    axios({
      method: 'POST',
      url: root + "/zjUserManager/comapreList",
      data: params
    })
  ),
  //获取供应商
  postSupp: params => (
    axios({
      method: 'POST',
      url: root + "/cp/supp/suppList",
      data: params
    })
  ),
  //获取放款审核
  postLoanAudit: params => (
    axios({
      method: 'POST',
      url: root + "/receiveSupply/supplyCreditList",
      data: params
    })
  )
};

export default API;
