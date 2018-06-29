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
	//保理融资查看
	queryFatoringInfo: params => (
		axios({
			method: 'POST',
			url: root + '/project/joinFund/queryFatoringInfo',
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
	//项目进度以及项目申报列表
	postProjectProgress: params => (
		axios({
			method: 'POST',
			url: root + "/project/projectCheck/projectList",
			data: params
		})
	),
	//项目查看接口
	postCheckProject: params => (
		axios({
			method: 'POST',
			url: root + "/project/projectCheck/approveProjectInfo",
			data: params
		})
	),
	//留言列表信息
	postLeaveMessage: params => (
		axios({
			method: 'POST',
			url: root + "/project/projectCheck/leaveList",
			data: params
		})
	),
	//留言的新增
	postAddLeave: params => (
		axios({
			method: 'POST',
			url: root + "/project/projectCheck/saveCheck",
			data: params
		})
	),
	//项目立项的新增和编辑接口
	postAddProject: params => (
		axios({
			method: 'POST',
			url: root + "/project/projectCheck/addProject",
			data: params
		})
	),
	//项目状态的变更
	postUpdateProject: params => (
		axios({
			method: 'POST',
			url: root + "/project/projectCheck/updateProject",
			data: params
		})
	),
	//管理员管理
	postManagerAdmin: params => (
		axios({
			method: 'POST',
			url: root + "/sys/user/list",
			data: params
		})
	),

	//部门管理
	postDeptManage: params => (
		axios({
			method: 'POST',
			url: root + "/sys/dept/list",
			data: params
		})
	),
	//角色管理
	postRoleManage: params => (
		axios({
			method: 'POST',
			url: root + "/sys/role/list",
			data: params
		})
	),
	//菜单管理
	postMenuManage: params => (
		axios({
			method: 'POST',
			url: root + "/sys/menu/list",
			data: params
		})
	),
	//用户信息的删除
	postDeleteManage: params => (
		axios({
			method: 'POST',
			url: root + "/sys/user/delete",
			data: params
		})
	),
	
	postLogManage: params => (
		axios({
			method: 'POST',
			url: root + "/sys/log/list",
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
	),
	//项目评审审核操作
	postProjectAudit: params => (
		axios({
			method: 'POST',
			url: root + "/project/judge/projectAudit",
			data: params
		})
	),
	//项目评审投票操作
	postProjectVote: params => (
		axios({
			method: 'POST',
			url: root + "/project/judge/saveVote",
			data: params
		})
	),
	//项目评审重投操作
	postProjectVoteAgain: params => (
		axios({
			method: 'POST',
			url: root + "/project/judge/voteAgain",
			data: params
		})
	),
	//放款审核操作
	postReceiveSyupply: params => (
		axios({
			method: 'POST',
			url: root + "/receiveSupply/updateReceiveSyupply",
			data: params
		})
	)
};

export default API;