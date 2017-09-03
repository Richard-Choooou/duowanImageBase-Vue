<template>
	<transition name="fade">
		<div v-show="showComment" id="comment-container">
			<nav>
				<span class="checked">最热评论</span>
				<span>最新评论</span>
				<span>吐槽</span>
			</nav>
		</div>
	</transition>
</template>
<script>
export default {
	data() {
		return {
			showComment: false
		}
	},
	props: {

	},
	
	methods: {
		close() {
			this.showComment = false
		},

		show() {
			this.showComment = true
		}
	}
}
</script>
<style lang="scss" scoped>
@import './comment.scss'
</style>
