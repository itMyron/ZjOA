<template>
	<div class="content">
		<div class="top">
			<div class="left">
				<i class="fa fa-bars" @click="isCollapse = !isCollapse"></i>
				<span>欢迎<b>{{user}}</b></span>
			</div>
			<div class="right">
				<el-dropdown @command="handleCommand">
					<span class="el-dropdown-link">
                        {{user}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item command="d" disabled style="color:#ff5001;">{{user}}</el-dropdown-item>
						<el-dropdown-item command="a" divided>修改密码</el-dropdown-item>
						<el-dropdown-item command="b">退出</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		</div>
		<div class="nav">
			<span><i class="fa" :class="barC"></i>&nbsp;{{barF}}</span>
			<p v-if="bar"><b>&gt;</b><span>{{bar}}</span></p>
			<p v-if="back" @click="reRoute" class="back"><i class="fa fa-arrow-circle-left"></i></p>
		</div>
		<el-dialog title="修改密码" :visible.sync="dialogTableVisible" width="30%">
			<el-form :model="form" status-icon :rules="rules2" ref="form" label-width="100px" class="demo-ruleForm">
				<el-form-item label="原密码">
					<el-input type="password" v-model="form.pass" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="新密码">
					<el-input type="password" v-model="form.checkPass" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button @click="resetForm"  size="small">取消</el-button>
					<el-button type="primary"  size="small" @click="submitForm">提交</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>


	</div>
</template>
<script>
	import { mapGetters, mapState, mapMutations, mapActions } from 'vuex';
	export default {
		data() {
			return {
				user:"",
				isCollapse: false,
				barF: "主页",
				bar: "",
				barC: "fa-home" ,
				dialogTableVisible:false ,
				form: {
					pass: '',
					checkPass: '',
				},
				preRoute:""	//保存上一次路由
			}
		},
		computed: {
			...mapState({
				back: state => state.nav.back,
			}),
		},
		methods: {
			handleCommand(command) {
				const self = this ;
				//修改密码
				if(command == 'a') {
					self.dialogTableVisible = true ;
				}
				//退出
				if(command == 'b') {
					self.$confirm('确定退出登录?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
						}).then(() => {
							self.$post(self.$API.POST_SYS_LOGINOUT)
							.then((result) => {
								console.log(result)
								if(result.code == "0") {
									self.$router.push({
										"path": "/login"
									})
								}
							})
						}).catch(() => {
							self.$message({
								type: 'info',
								message: '已取消退出'
							});          
					});
				}
			},
			//保存修改密码
			submitForm() {
				const self = this ;
				if(null==self.form.pass||self.form.pass==""){
					self.$message({
						type: 'warning',
						message: '原密码为空!'	
						})
					return false;
				}
				if(null==self.form.checkPass||self.form.checkPass==""){
					self.$message({
						type: 'warning',
						message: '新密码为空!'	
						})
					return false;
				}
				if(self.form.pass==self.form.checkPass){
					self.$message({
						message: '原密码和新密码一致',
						type: 'error'
					});
					return false;
				}
				let params = {
					password:self.form.pass,
					newPassword:self.form.checkPass
				};
				self.$fetch(self.$API.SYSTEM_UPDATE_PWD,params)
				.then((resultData) => {
					if(null!=resultData&&resultData.code=='0'){
						self.$message({
							type: 'success',
							message: '密码修改成功!'	
						})
						self.$router.push({
							"path":"/login"
						})
					}else{
						self.$message({
						type: 'warning',
						message: resultData.msg
						})
					}
				})
				self.dialogTableVisible = false ;
			},
			//取消修改密码
			resetForm() {
				const self = this ;
				self.dialogTableVisible = false ;
			},
			//退回上一层按钮
			reRoute(){
				const self = this ;
				self.$store.dispatch("nav/changeBack", false);
				self.$router.push({
					"path":self.preRoute
				})
			}
		},
		watch: {
			isCollapse: function() {
				this.$store.dispatch("nav/changeCollapse", this.isCollapse);
			},
			$route(to,next) {
				const self = this;
				self.preRoute = next.path ;
				self.barF = to.meta.barF || "";
				self.bar = to.meta.bar || "";
				self.barC = to.meta.barC || "";
			}
		},
		created() {
			const self = this ;
			self.user = sessionStorage.getItem('user') ;
		}
	}
</script>
<style lang="scss" scoped type="text/css">
	@import "./index.scss";
</style>