<template>
	<div>
    <div>223333</div>
    <router-link to="/test/a_child">子组件1</router-link>
    <router-link to="/test/b_child">子组件1</router-link>
    <router-view name="child1"></router-view>
    <router-view name="child2"></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
</style>
