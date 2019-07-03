<template>
	<div class="home">
		<img alt="Vue logo" src="../image/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<div>{{ aa }}</div>
		<div id="warpp">123</div>
		<div id="warpp2"></div>
		<ul>
			<li v-for="img in list" :key="img.index">
				<img v-lazy="img" width="300" height="150" />
			</li>
		</ul>
    <div v-show="isLoading">加载中</div>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { testmixin } from "../mixin/testmixin";
export default {
	name: "home",
	mixins: [testmixin],
	data() {
		return {
			list: [
				"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553857964693&di=c0b74627560a6ab86c0ed6c7da835567&imgtype=0&src=http%3A%2F%2Faliyunzixunbucket.oss-cn-beijing.aliyuncs.com%2Fjpg%2F1c7a3a847672e9bc5cc2605b9a39938b.jpg%3Fx-oss-process%3Dimage%2Fresize%2Cp_100%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Cimage_eXVuY2VzaGk%3D%2Ct_100",
				"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553857964693&di=c0b74627560a6ab86c0ed6c7da835567&imgtype=0&src=http%3A%2F%2Faliyunzixunbucket.oss-cn-beijing.aliyuncs.com%2Fjpg%2F1c7a3a847672e9bc5cc2605b9a39938b.jpg%3Fx-oss-process%3Dimage%2Fresize%2Cp_100%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Cimage_eXVuY2VzaGk%3D%2Ct_100",
				"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553857964693&di=c0b74627560a6ab86c0ed6c7da835567&imgtype=0&src=http%3A%2F%2Faliyunzixunbucket.oss-cn-beijing.aliyuncs.com%2Fjpg%2F1c7a3a847672e9bc5cc2605b9a39938b.jpg%3Fx-oss-process%3Dimage%2Fresize%2Cp_100%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Cimage_eXVuY2VzaGk%3D%2Ct_100",
				"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553857964693&di=c0b74627560a6ab86c0ed6c7da835567&imgtype=0&src=http%3A%2F%2Faliyunzixunbucket.oss-cn-beijing.aliyuncs.com%2Fjpg%2F1c7a3a847672e9bc5cc2605b9a39938b.jpg%3Fx-oss-process%3Dimage%2Fresize%2Cp_100%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Cimage_eXVuY2VzaGk%3D%2Ct_100",
				"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553857964693&di=c0b74627560a6ab86c0ed6c7da835567&imgtype=0&src=http%3A%2F%2Faliyunzixunbucket.oss-cn-beijing.aliyuncs.com%2Fjpg%2F1c7a3a847672e9bc5cc2605b9a39938b.jpg%3Fx-oss-process%3Dimage%2Fresize%2Cp_100%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Cimage_eXVuY2VzaGk%3D%2Ct_100",
				"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553857964693&di=c0b74627560a6ab86c0ed6c7da835567&imgtype=0&src=http%3A%2F%2Faliyunzixunbucket.oss-cn-beijing.aliyuncs.com%2Fjpg%2F1c7a3a847672e9bc5cc2605b9a39938b.jpg%3Fx-oss-process%3Dimage%2Fresize%2Cp_100%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Cimage_eXVuY2VzaGk%3D%2Ct_100",
				"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553857964693&di=c0b74627560a6ab86c0ed6c7da835567&imgtype=0&src=http%3A%2F%2Faliyunzixunbucket.oss-cn-beijing.aliyuncs.com%2Fjpg%2F1c7a3a847672e9bc5cc2605b9a39938b.jpg%3Fx-oss-process%3Dimage%2Fresize%2Cp_100%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Cimage_eXVuY2VzaGk%3D%2Ct_100",
				"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553857964693&di=c0b74627560a6ab86c0ed6c7da835567&imgtype=0&src=http%3A%2F%2Faliyunzixunbucket.oss-cn-beijing.aliyuncs.com%2Fjpg%2F1c7a3a847672e9bc5cc2605b9a39938b.jpg%3Fx-oss-process%3Dimage%2Fresize%2Cp_100%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Cimage_eXVuY2VzaGk%3D%2Ct_100",
				"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553857964693&di=c0b74627560a6ab86c0ed6c7da835567&imgtype=0&src=http%3A%2F%2Faliyunzixunbucket.oss-cn-beijing.aliyuncs.com%2Fjpg%2F1c7a3a847672e9bc5cc2605b9a39938b.jpg%3Fx-oss-process%3Dimage%2Fresize%2Cp_100%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Cimage_eXVuY2VzaGk%3D%2Ct_100",
				"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553857964693&di=c0b74627560a6ab86c0ed6c7da835567&imgtype=0&src=http%3A%2F%2Faliyunzixunbucket.oss-cn-beijing.aliyuncs.com%2Fjpg%2F1c7a3a847672e9bc5cc2605b9a39938b.jpg%3Fx-oss-process%3Dimage%2Fresize%2Cp_100%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Cimage_eXVuY2VzaGk%3D%2Ct_100",
				"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553857964693&di=c0b74627560a6ab86c0ed6c7da835567&imgtype=0&src=http%3A%2F%2Faliyunzixunbucket.oss-cn-beijing.aliyuncs.com%2Fjpg%2F1c7a3a847672e9bc5cc2605b9a39938b.jpg%3Fx-oss-process%3Dimage%2Fresize%2Cp_100%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Cimage_eXVuY2VzaGk%3D%2Ct_100",
				"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553857964693&di=c0b74627560a6ab86c0ed6c7da835567&imgtype=0&src=http%3A%2F%2Faliyunzixunbucket.oss-cn-beijing.aliyuncs.com%2Fjpg%2F1c7a3a847672e9bc5cc2605b9a39938b.jpg%3Fx-oss-process%3Dimage%2Fresize%2Cp_100%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Cimage_eXVuY2VzaGk%3D%2Ct_100"
			]
		};
	},
	components: {
		HelloWorld
	},
	computed: {
		isLoading() {
			return this.$store.state.isLoading;
		}
  },
  mounted() {
    console.log(this.$store.state.isLoading)
  },
	metaInfo: {
		title: "My Home App", // set a title
		meta: [
			{
				// set meta
				name: "keyWords",
				content: "My Home App"
			}
		]
	}
};
</script>
<style lang="less" scoped>
@import "~@/css/variable.less";
#warpp {
	color: @color;
	@red-bg();
	@Rules();
	width: @width - 20;
}
#warpp2 {
	#warpp;
	background: blue;
}
</style>
