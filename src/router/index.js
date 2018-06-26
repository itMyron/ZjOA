import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/views/test/index'
import Login from '@/views/login/index' //登录
import Index from '@/views/index' //主页面
import Home from '@/views/home/index' //首页

import ProjectProgress from '@/views/projectProgress/index' //项目进度
import ProjectDeclareApply from '@/views/projectDeclare/apply/index' //项目申报 --- 项目申请
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

import SupplierList from '@/views/supplier/list/index' //供应商 --- 供应商列表
import SupplierBusiness from '@/views/supplier/business/index' //供应商 --- 供应商业务审核
import SupplierRisk from '@/views/supplier/risk/index' //供应商 --- 供应商风控审核

import Factoring from '@/views/factoring/index' //保理融资列表


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
        path: "/supplierList",
        name: "供应商---供应商列表",
        component: SupplierList,
        meta: {
          barF: "供应商",
          bar: "供应商列表",
          barC: "fa-paste"
        }
      },
      {
        path: "/supplierBusiness",
        name: "供应商---供应商业务审核",
        component: SupplierBusiness,
        meta: {
          barF: "供应商",
          bar: "供应商业务审核",
          barC: "fa-paste"
        }
      },
      {
        path: "/supplierRisk",
        name: "供应商---供应商风控审核",
        component: SupplierRisk,
        meta: {
          barF: "供应商",
          bar: "供应商风控审核",
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
    ]
  },
];
export default new Router({
  routes
})