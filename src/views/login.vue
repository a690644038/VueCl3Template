<template>
	<div>
		<yd-navbar title="NavBar">
			<router-link to="/home" slot="left">
				<yd-navbar-back-icon></yd-navbar-back-icon>
			</router-link>
		</yd-navbar>
		<yd-cell-group>
			<yd-cell-item>
				<span slot="left">用户名：</span>
				<yd-input
					slot="right"
					required
					v-model="username"
					max="20"
					placeholder="请输入用户名"
				></yd-input>
			</yd-cell-item>
			<yd-cell-item>
				<span slot="left">密码：</span>
				<yd-input
					slot="right"
					type="password"
					v-model="password"
					placeholder="请输入密码"
				></yd-input>
			</yd-cell-item>
		</yd-cell-group>
		<div class="btn-row">
			<yd-button size="large" type="primary" @click.native="login"
				>pri1mary</yd-button
			>
		</div>
		<yd-tabbar fixed>
			<yd-tabbar-item title="首页" link="#">
				<yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>
			</yd-tabbar-item>
			<yd-tabbar-item title="购物车" link="#">
				<yd-icon name="shopcart-outline" slot="icon" size="0.54rem"></yd-icon>
			</yd-tabbar-item>
			<yd-tabbar-item title="个人中心" link="#">
				<yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
			</yd-tabbar-item>
			<yd-tabbar-item title="图片" link="#">
				<img
					slot="icon"
					style="height: 25px;"
					src="http://static.ydcss.com/ydui/img/logo.png"
				/>
			</yd-tabbar-item>
		</yd-tabbar>
	</div>
</template>

<script>
export default {
	data() {
		return {
			username: "",
			password: ""
		};
	},
	components: {},
	computed: {},
	methods: {
		login() {
			var self = this;
			this.$axios({
				method: "POST",
				url: "api/user/loginUser",
				data: {
					loginName: "773206264@qq.com",
					password: "123456"
				}
			})
				.then(function(response) {
					let user = response.data.data.account;
					let token = response.data.data.loginToken;
					self.$store.commit("setUser", user);
					self.$store.commit("setToken", token);
				})
				.catch(function(error) {
					console.log(error);
				});
		}
	},
	mounted() {
		// var self = this;
	}
};
</script>
<style lang='less' scoped>
</style>
