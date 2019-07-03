<template>
	<div class="about">
		<van-stepper v-model="value" />
		<h1>This is an about page1</h1>
		<div class="box"></div>
    <router-view></router-view>
	</div>
</template>
<script>
export default {
	data() {
		return {
			value: 1
		}
	},
	metaInfo: {
		title: "My About App", // set a title
		meta: [
			{
				// set meta
				name: "keyWords",
				content: "My About Ap1p"
			}
		]
	},
	methods: {}
}
</script>
<style lang="less" scoped>
.box {
	width: 2rem;
	height: 1rem;
	background: red;
}
</style>
