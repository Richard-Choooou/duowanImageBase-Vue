<template>
	<!-- <div id="navbar"> -->
	<nav>
		<router-link to="/homepage" tag="span">最新</router-link>
		<router-link to="/awkwardImg" tag="span">今日囧图</router-link>
		<router-link to="/funnyGif" tag="span">搞笑gif</router-link>
		<router-link to="/spitslot" tag="span">吐槽</router-link>
		<span>
			更多
		</span>
	</nav>
	<!-- </div> -->
</template>
<script>

export default {
	
}
</script>
<style lang="scss" scoped>
nav {
	position: fixed;
	top: 0;
	width: 100%;
	height: pxToRem(174px);
	background: linear-gradient(to right, $blueLeft, $blueRight);
	color: #fff;
	font-size: pxToRem(56px);
	line-height: pxToRem(174px);
	text-align: center;
	z-index: 1000;

	span + span {
		margin-left: pxToRem(35px);
	}
}
</style>

