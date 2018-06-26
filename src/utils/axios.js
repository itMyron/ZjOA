import axios from "axios";
import qs from "qs";
import router from "../router";
import {Message}  from 'element-ui';
//axios.defaults.timeout = 10000; //设置请求超时时间  
axios.defaults.baseURL = "";
let _this = this ;
//http request 拦截器
axios.interceptors.request.use(
  config => {
    //在发送请求之前做了什么
    let token = sessionStorage.getItem("myron");    //获取token值
    //config.data.token = token;
    config.data = qs.stringify(config.data);
    config.headers = { "Content-Type": "application/x-www-form-urlencoded" };
    if(token){
      config.headers = {
        'Authorization': token
      };
    }
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);

//http response 拦截器
axios.interceptors.response.use(
  //对相应数据做点什么
  response => {
    let code = response.data.code ;
    if (code != null && code == "4001") {
      router.push({
        path: "/login",
        querry: { redirect: router.currentRoute.fullPath } //从哪个页面跳转
      }); 
    }
    return response;
  },
  error => {
  	Message({
      message: '系统出错，请联系客服人员！错误码500',
      type: 'error'
    });
    return Promise.reject(error);
  }
);

export default axios


