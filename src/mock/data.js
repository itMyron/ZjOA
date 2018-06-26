const data = {
	"result":"success",
	"data":{
		"list":[
			{
				"title": "核心企业平台",
				"bar":"fa-paste",
				"children":[
					{
						"item":"基本信息",
						"hash": "baseInfo"
					},
					{
					  "item": "企业供应商",
					  "hash": "enterprise"
					},
					{
						"item":"个人供应商",
						"hash": "personal"
					},
					{
						"item":"保理融资列表",
						"hash": "financingList"
					},
				]			
			},
			{
			  "title": "供应商登录平台",
			  "bar": "fa-paste",
			  "children": [
					{
			      "item": "企业供应商基本信息",
			      "hash": "ebaseInfo"
					},
					{
					  "item": "个人供应商基本信息",
					  "hash": "pbaseInfo"
					},
			    {
			      "item": "保理业务管理",
			      "hash": "financingManage"
			    }
			  ]
			},
		]
	},
	"msg":"出问题啦"
}

export default data;
