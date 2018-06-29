import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/views/test/index'
import Login from '@/views/login/index' //登录
import Index from '@/views/index' //主页面
import Home from '@/views/home/index' //首页

import Enclosure from '@/views/enclosure/index' //附件
import EnclosureImg from '@/views/components/uploadFile/index' //附件

import Admin from '@/views/system/admin/index' //系统管理---管理员管理
import Department from '@/views/system/department/index' //系统管理---部门管理
import Log from '@/views/system/log/index' //系统管理---系统日志
import Menu from '@/views/system/menu/index' //系统管理---菜单管理
import Role from '@/views/system/role/index' //系统管理---角色管理

import ProjectProgress from '@/views/projectProgress/index' //项目进度
import ProjectProgressView from '@/views/projectProgress/view/index' //项目进度


import ProjectDeclareApply from '@/views/projectDeclare/apply/index' //项目申报 --- 项目申请
import ProjectDeclareApplyAdd from '@/views/projectDeclare/apply/add/index' //项目进度---项目申请（添加）
import ProjectDeclareApplyView from '@/views/projectDeclare/apply/view/index' //项目进度---项目申请（查看）
import ProjectDeclareFirstTrial from '@/views/projectDeclare/firstTrial/index' //项目申报 --- 项目初审
import ProjectDeclareSecondTrial from '@/views/projectDeclare/secondTrial/index' //项目申报 --- 项目复审

import RiskAuditingFirstTrial from '@/views/riskAuditing/firstTrial/index' //风控审核 --- 风控初审
import RiskAuditingSecondTrial from '@/views/riskAuditing/secondTrial/index' //风控审核 --- 风控复审
import RiskAuditingLegalTrial from '@/views/riskAuditing/legalTrial/index' //风控审核 --- 法务审核

import ProjectReviewBusiness from '@/views/projectReview/business/index' //项目评审 --- 业务副总审核
import ProjectReviewRisk from '@/views/projectReview/risk/index' //项目评审 --- 风控副总审核
import ProjectReviewManager from '@/views/projectReview/manager/index' //项目评审 --- 总经理
import ProjectReviewResolution from '@/views/projectReview/resolution/index' //项目评审 --- 项目决议流转
import ProjectReviewVote from '@/views/projectReview/vote/index' //项目评审 --- 会议线上投票
import ProjectReviewAuthorized from '@/views/projectReview/authorized/index' //项目评审 --- 有权人审核

import LoanAuditingFirstTrial from '@/views/loanAuditing/firstTrial/index' //放款审核 --- 放款初审
import LoanAuditingSecondTrial from '@/views/loanAuditing/secondTrial/index' //放款审核 --- 放款复审
import LoanAuditingLegalTrial from '@/views/loanAuditing/legalTrial/index' //放款审核 --- 放款法审
import LoanAuditingBusiness from '@/views/loanAuditing/business/index' //放款审核 --- 放款副总审核
import LoanAuditingOffice from '@/views/loanAuditing/office/index' //放款审核 --- 综合办审核
import LoanAuditingManager from '@/views/loanAuditing/manager/index' //放款审核 --- 总经理审核

import FinanceFinance from '@/views/finance/finance/index' //财务管理 --- 财务列表
import FinanceLoan from '@/views/finance/loan/index' //财务管理 --- 放款清单
import FinanceMoney from '@/views/finance/money/index' //财务管理 --- 打款列表

import AfterLoan from '@/views/afterLoan/index' //贷后管理

import Enterprise from '@/views/enterprise/index' //核心企业

import SupplierListE from '@/views/supplier/enterprise/list/index' //供应商 --- 企业供应商列表
import SupplierBusinessE from '@/views/supplier/enterprise/business/index' //供应商 --- 企业供应商业务审核
import SupplierRiskE from '@/views/supplier/enterprise/risk/index' //供应商 --- 企业供应商风控审核
import SupplierListP from '@/views/supplier/personal/list/index' //供应商 --- 个人供应商列表
import SupplierBusinessP from '@/views/supplier/personal/business/index' //供应商 --- 个人供应商业务审核
import SupplierRiskP from '@/views/supplier/personal/risk/index' //供应商 --- 个人供应商风控审核

import Factoring from '@/views/factoring/index' //保理融资列表
import FactoringLook from '@/views/factoring/view/index' //融资订单查看

Vue.use(Router)
const routes = [
  {
    path: "/",
    name:"默认登录",
    component: Login,
  },
  {
    path: "/login",
    name: "登录",
    component: Login
  },
  {
    path: "/test",
    name: "测试",
    component: Test
  },
  {
    path: "/index",
    name: "首页",
    component: Index,
    meta: {
      barF: "首页",
      bar: "",
      barC: "fa-home"
    },
    redirect: "/home",
    children:[
      {
        path: "/home",
        name: "主页",
        component: Home,
        meta: {
          barF: "主页",
          bar: "",
          barC: "fa-home"
        }
      },
      {
        path: "/enclosure",
        name: "附件",
        component: Enclosure,
        meta: {
          barF: "",
          bar: "",
          barC: ""
        }
      },
      {
        path: "/enclosureImg",
        name: "附件",
        component: EnclosureImg,
        meta: {
          barF: "",
          bar: "",
          barC: ""
        }
      },
      {
        path: "/admin",
        name: "系统管理-管理员管理",
        component: Admin,
        meta: {
          barF: "系统管理",
          bar: "管理员管理",
          barC: "el-icon-setting"
        }
      },
      {
        path: "/department",
        name: "系统管理-部门管理",
        component: Department,
        meta: {
          barF: "系统管理",
          bar: "部门管理",
          barC: "el-icon-setting"
        }
      },
      {
        path: "/log",
        name: "系统管理-系统日志",
        component: Log,
        meta: {
          barF: "系统管理",
          bar: "系统日志",
          barC: "el-icon-setting"
        }
      },
      {
        path: "/menu",
        name: "系统管理-菜单管理",
        component: Menu,
        meta: {
          barF: "系统管理",
          bar: "菜单管理",
          barC: "el-icon-setting"
        }
      },
      {
        path: "/role",
        name: "系统管理-角色管理",
        component: Role,
        meta: {
          barF: "系统管理",
          bar: "角色管理",
          barC: "el-icon-setting"
        }
      },
      {
        path: "/projectProgress",
        name: "项目进度",
        component: ProjectProgress,
        meta: {
          barF: "项目进度",
          bar: "",
          barC: "fa-paste"
        }
      },
      {
        path: "/projectProgressView",
        name: "项目进度(查看)",
        component: ProjectProgressView,
        meta: {
          barF: "项目进度",
          bar: "",
          barC: "fa-paste"
        }
      },
      {
        path: "/projectDeclareApply",
        name: "项目申报---项目申请",
        component: ProjectDeclareApply,
        meta: {
          barF: "项目申报",
          bar: "项目申请",
          barC: "fa-paste"
        }
      },
      {
        path: "/projectDeclareApplyAdd",
        name: "项目申报---项目申请(新增)",
        component: ProjectDeclareApplyAdd,
        meta: {
          barF: "项目申报",
          bar: "项目申请",
          barC: "fa-paste"
        }
      },
      {
        path: "/projectDeclareApplyView",
        name: "项目申报---项目申请(查看)",
        component: ProjectDeclareApplyView,
        meta: {
          barF: "项目申报",
          bar: "项目申请",
          barC: "fa-paste"
        }
      },
      {
        path: "/projectDeclareFirstTrial",
        name: "项目申报---项目初审",
        component: ProjectDeclareFirstTrial,
        meta: {
          barF: "项目申报",
          bar: "项目初审",
          barC: "fa-paste"
        }
      },
      {
        path: "/projectDeclareSecondTrial",
        name: "项目申报---项目复审",
        component: ProjectDeclareSecondTrial,
        meta: {
          barF: "项目申报",
          bar: "项目复审",
          barC: "fa-paste"
        }
      },
      {
        path: "/RiskAuditingFirstTrial",
        name: "风控审核---风控初审",
        component: RiskAuditingFirstTrial,
        meta: {
          barF: "风控审核",
          bar: "风控初审",
          barC: "fa-paste"
        }
      },
      {
        path: "/riskAuditingSecondTrial",
        name: "风控审核---风控复审",
        component: RiskAuditingSecondTrial,
        meta: {
          barF: "风控审核",
          bar: "风控复审",
          barC: "fa-paste"
        }
      },
      {
        path: "/riskAuditingLegalTrial",
        name: "风控审核---法务审核",
        component: RiskAuditingLegalTrial,
        meta: {
          barF: "风控审核",
          bar: "风控审核",
          barC: "fa-paste"
        }
      },
      {
        path: "/projectReviewBusiness",
        name: "项目评审---业务副总审核",
        component: ProjectReviewBusiness,
        meta: {
          barF: "项目评审",
          bar: "业务副总审核",
          barC: "fa-paste"
        }
      },
      {
        path: "/projectReviewRisk",
        name: "项目评审---风控副总审核",
        component: ProjectReviewRisk,
        meta: {
          barF: "项目评审",
          bar: "风控副总审核",
          barC: "fa-paste"
        }
      },
      {
        path: "/projectReviewManager",
        name: "项目评审---总经理",
        component: ProjectReviewManager,
        meta: {
          barF: "项目评审",
          bar: "总经理",
          barC: "fa-paste"
        }
      },
      {
        path: "/projectReviewResolution",
        name: "项目评审---项目决议流转",
        component: ProjectReviewResolution,
        meta: {
          barF: "项目评审",
          bar: "项目决议流转",
          barC: "fa-paste"
        }
      },
      {
        path: "/projectReviewVote",
        name: "项目评审---会议线上投票",
        component: ProjectReviewVote,
        meta: {
          barF: "项目评审",
          bar: "会议线上投票",
          barC: "fa-paste"
        }
      },
      {
        path: "/projectReviewAuthorized",
        name: "项目评审---有权人审核",
        component: ProjectReviewAuthorized,
        meta: {
          barF: "项目评审",
          bar: "有权人审核",
          barC: "fa-paste"
        }
      },
      {
        path: "/loanAuditingFirstTrial",
        name: "放款审核---初审",
        component: LoanAuditingFirstTrial,
        meta: {
          barF: "放款审核",
          bar: "初审",
          barC: "fa-paste"
        }
      },
      {
        path: "/loanAuditingSecondTrial",
        name: "放款审核---复审",
        component: LoanAuditingSecondTrial,
        meta: {
          barF: "放款审核",
          bar: "复审",
          barC: "fa-paste"
        }
      },
      {
        path: "/loanAuditingLegalTrial",
        name: "放款审核---法审",
        component: LoanAuditingLegalTrial,
        meta: {
          barF: "放款审核",
          bar: "法审",
          barC: "fa-paste"
        }
      },
      {
        path: "/loanAuditingBusiness",
        name: "放款审核---放款副总审核",
        component: LoanAuditingBusiness,
        meta: {
          barF: "放款审核",
          bar: "放款副总审核",
          barC: "fa-paste"
        }
      },
      {
        path: "/loanAuditingOffice",
        name: "放款审核---综合办审核",
        component: LoanAuditingOffice,
        meta: {
          barF: "放款审核",
          bar: "综合办审核",
          barC: "fa-paste"
        }
      },
      {
        path: "/loanAuditingManager",
        name: "放款审核---总经理审核",
        component: LoanAuditingManager,
        meta: {
          barF: "放款审核",
          bar: "总经理审核",
          barC: "fa-paste"
        }
      },
      {
        path: "/financeFinance",
        name: "财务管理---财务列表",
        component: FinanceFinance,
        meta: {
          barF: "财务管理",
          bar: "财务列表",
          barC: "fa-paste"
        }
      },
      {
        path: "/financeLoan",
        name: "财务管理---放款清单",
        component: FinanceLoan,
        meta: {
          barF: "财务管理",
          bar: "放款清单",
          barC: "fa-paste"
        }
      },
      {
        path: "/financeMoney",
        name: "财务管理---打款列表",
        component: FinanceMoney,
        meta: {
          barF: "财务管理",
          bar: "打款列表",
          barC: "fa-paste"
        }
      },
      {
        path: "/afterLoan",
        name: "贷后管理",
        component: AfterLoan,
        meta: {
          barF: "贷后管理",
          bar: "",
          barC: "fa-paste"
        }
      },
      {
        path: "/enterprise",
        name: "核心企业",
        component: Enterprise,
        meta: {
          barF: "核心企业",
          bar: "",
          barC: "fa-paste"
        }
      },
      {
        path: "/supplierListE",
        name: "供应商---企业供应商列表",
        component: SupplierListE,
        meta: {
          barF: "供应商",
          bar: "企业供应商列表",
          barC: "fa-paste"
        }
      },
      {
        path: "/supplierBusinessE",
        name: "供应商---企业供应商业务审核",
        component: SupplierBusinessE,
        meta: {
          barF: "供应商",
          bar: "企业供应商业务审核",
          barC: "fa-paste"
        }
      },
      {
        path: "/supplierRiskE",
        name: "供应商---企业供应商风控审核",
        component: SupplierRiskE,
        meta: {
          barF: "供应商",
          bar: "企业供应商风控审核",
          barC: "fa-paste"
        }
      },
      {
        path: "/supplierListP",
        name: "供应商---个人供应商列表",
        component: SupplierListP,
        meta: {
          barF: "供应商",
          bar: "个人供应商列表",
          barC: "fa-paste"
        }
      },
      {
        path: "/supplierBusinessP",
        name: "供应商---个人供应商业务审核",
        component: SupplierBusinessP,
        meta: {
          barF: "供应商",
          bar: "个人供应商业务审核",
          barC: "fa-paste"
        }
      },
      {
        path: "/supplierRiskP",
        name: "供应商---个人供应商风控审核",
        component: SupplierRiskP,
        meta: {
          barF: "供应商",
          bar: "个人供应商风控审核",
          barC: "fa-paste"
        }
      },
      {
        path: "/factoring",
        name: "保理融资列表",
        component: Factoring,
        meta: {
          barF: "保理融资列表",
          bar: "",
          barC: "fa-paste"
        }
      },
      {
        path: "/factoringLook",
        name: "融资订单-查看",
        component: FactoringLook,
        meta: {
          barF: "融资订单-查看	",
          bar: "",
          barC: "fa-paste"
        }
      },
    ]
  },
];
export default new Router({
  routes
})
