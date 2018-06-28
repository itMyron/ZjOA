# ZjOA
# version 0.20
# author myron

> 中均OA系统


###
***
* 中均OA使用vue+vuex重构




安装淘宝镜像
```
npm install -g cnpm --registry=https://registry.npm.taobao.org 
```


安装npm 包
```
cnpm install
```
## 目录结构
```
shell
├── build                      				// 构建相关  
├── config                     				// 配置相关
├── src                        				// 源代码
│   ├── api                    				// 所有请求
│   ├── assets                 				// 图片资源
│   ├── components             				// 全局公用组件
│   ├── directive              				// 全局指令
│   ├── mock                   				// mock数据
│   ├── router                 				// 路由
│   ├── store                  				// 全局store管理
│   ├── static                 				// 静态资源（icon）
│   ├── utils                  				// 全局公用方法
│   ├── views				   				// views
│	│	├── afterLoan		   				//贷后管理
│	│	├── components		   				//公共组件
│	│	│	 ├── menu		   				//导航菜单
│	│	│	 ├── top		   				//头部
│	│	│	 └── uploadImg	   				//上传图片
│	│	├── enterprise		   				//核心企业
│	│	├── factoring		   				//保理融资
│	│	├── finance			   				//财务管理
│	│	│	 ├── finance	   				//财务列表
│	│	│	 ├── loan		   				//放款清单
│	│	│	 └── money	   	   				//打款列表
│	│	├──	home			   				//地图展示
│	│	├── loanAuditing					//放款审核
│	│	│	 ├── business	   				//放款副总审核
│	│	│	 ├── firstTrial	   				//放款初审
│	│	│	 ├── legalTrial	   				//放款法审
│	│	│	 ├── manager	   				//总经理审核
│	│	│	 ├── office		   				//综合办审核
│	│	│	 └── secondTrial   				//放款复审
│	│	├── login			   				//登录       
│	│	├──	projectDeclare	   				//项目申报	
│	│	│	 ├── apply	       				//项目申请
│	│	│	 ├── firstTrial	   				//项目初审
│	│	│	 └── secondTrial   				//项目复审
│	│	├──	projectProgress	   				//项目进度
│	│	├── projectReview					//项目评审
│	│	│	 ├── authorized	   				//有权人审核
│	│	│	 ├── business	   				//业务副总审核
│	│	│	 ├── manager	   				//总经理
│	│	│	 ├── resolution	   				//项目决议流转
│	│	│	 ├── risk		   				//风控副总审核
│	│	│	 └── vote   					//会议线上投票
│	│	├── riskAuditing					//风控审核
│	│	│	 ├── firstTrial	   				//风控初审
│	│	│	 ├── legalTrial		   			//法务审核
│	│	│	 └── secondTrial	   			//风控复审
│	│	├── supplier						//供应商
│	│	│	 ├── enterprise					//企业
│	│	│	 │	  ├── business	   			//企业供应商业务审核
│	│	│	 │	  ├── list		   			//企业供应商列表
│	│	│	 │	  └── risk	   				//企业供应商风控审核   					
│	│	│	 └── personal					//个人
│	│	│		  ├── business	   			//个人供应商业务审核
│	│	│		  ├── list		   			//个人供应商列表
│	│	│		  └── risk	   				//个人供应商风控审核       
│	│	├──	system							//系统管理（路由未配置）
│	│	└── test 							//测试组件       
│   ├── App.vue                				// 入口页面
│   └── main.js                				// 入口 加载组件 初始化等
├── static                     				// 第三方不打包资源
├── .babelrc                   				// babel-loader 配置
├── eslintrc.js                				// eslint 配置项
├── .gitignore                 				// git 忽略项
├── index.html                 				// html模板
└── package.json               				// package.json
```

```
启动开发环境
```
npm run dev

```
打包到生产环境
```
npm run build

