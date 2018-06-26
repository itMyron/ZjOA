let root = process.env.API_ROOT;
import axios from "../utils/axios"
let API = {
	  //登陆
	  postLogin:params =>(
			  		axios({
			      	  method: 'POST',
			        	url: root + '/sys/login',
			        	data: params
			    	})
			 ),
	  //获取菜单列表
	  postLogin:params =>(
			  		axios({
			      	  method: 'GET',
			        	url: root + "/sys/menu/nav2",
			    	})
			  )
};

export default API;
