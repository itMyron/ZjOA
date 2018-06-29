<template>
	<div class="content">
		<div class="login-box" id="rrapp">
			<div class="login-logo">
				<span></span>
				<h1>中均OA管理系统</h1>
			</div>
			<div class="from">
				<div class="user list">
					<el-input v-model="userName" placeholder="账号"></el-input>
				</div>
				<div class="password list">
					<el-input type="password" v-model="password" placeholder="密码"></el-input>
				</div>
				<div class="sub list" @click="login">
					登录
				</div>
			</div>

		</div>

	</div>
</template>
<script>
import API from "../../config/api";
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
import Base64 from "js-base64";
let BASE64 = Base64.Base64;
import MD5 from "js-md5";
export default {
  data() {
    return {
      token: "",
      src: require("../../assets/login/icon.png"),
      userName: "",
      password: "",
      md5: ""
    };
  },
  computed: {
    ...mapState({
      //user: state => state.login.user
    })
  },
  methods: {
    //获取MD5串
    loginMd5: function() {
      let _this = this;
      API.postMD5().then(result => {
        _this.md5 = result.data.data;
      });
    },
    login() {
      const self = this;
      if (self.$fn.isNull(self.userName) || self.$fn.isNull(self.password)) {
        self.$message.error("请填写用户名或密码");
        return;
      }
      let basePwd = BASE64.encode(
        BASE64.encode(self.$fn.trim(self.password)) + self.md5
      );
      let params = {
        username: self.$fn.trim(self.userName),
        password: self.$fn.trim(self.password)
      };
      API.postLogin(params).then(result => {
        result = result.data;
        if (result.code == "0") {
          if (!self.$fn.isNull(result.token)) {
            self.token = result.token;
            sessionStorage.setItem("myron", self.token);
          }
          const user = result.username || "admin";
          sessionStorage.setItem("user", user);
          self.$router.push({
            path: "/index"
          });
        } else {
          this.$message({
            message: result.msg,
            type: "warning"
          });
        }
      });
    }
  },
  watch: {},
  created() {
    sessionStorage.setItem("myron", "");
    //this.loginMd5();
  },
  mounted() {
    //回车键登录
    const self = this;
    document.onkeydown = function(event) {
      var e = event || window.event || arguments.callee.caller.arguments[0];
      if (e && e.keyCode == 13) {
        self.login();
      }
    };
  },
  destroyed() {
  	document.onkeydown = null ;
  }
};
</script>
<style lang="scss" scoped type="text/css">
@import "./index.scss";
</style></style>