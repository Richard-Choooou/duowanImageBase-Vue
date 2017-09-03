<template>
	<div id="app">
		<navbar></navbar>
		<keep-alive><router-view class="main-router"></router-view></keep-alive>
	</div>
</template>

<script>
import navbar from '@/components/navbar/navbar'
export default {
	name: 'app',
	
	components: {
		navbar
	}
}
</script>

<style>
@import './common/scss/reset.scss';
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.main-router {
	position: absolute !important;
	padding-top: pxToRem(174px) !important;
	height: 100% !important;
	width: 100% !important;
	/* height: pxToRem(2208px); */
}



</style>
