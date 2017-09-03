<template>
	<transition name="fade">
		<div v-show="showComment" id="comment-container">
			<nav>
				<span :class="{'checked' : commentType === 1}" @click="commentType = 1">最热评论</span>
				<span :class="{'checked' : commentType === 2}" @click="commentType = 2">最新评论</span>
				<span :class="{'checked' : commentType === 0}" @click="commentType = 0">吐槽</span>
			</nav>
			<div>
				<div v-show = "commentType === 1 || commentType === 2">
					<!-- 最新最热 -->
				</div>
				<div v-show = "commentType === 0">
					<!-- 吐槽 -->
				</div>
			</div>
		</div>
	</transition>
</template>
<script>
import {mapGetters} from 'vuex' 
import {getComments} from '@/api'
export default {
	data() {
		return {
			showComment: false,
			imgHash: '',
			commentType: 1,
			hot: [],
			time: [],
			tucao: []
		}
	},
	computed: {
		...mapGetters({
			nowIndex: 'getPlayIndex',
			playData: 'getPlayData',
			photoAlbumID: 'getPhotoAlbumID'
		}),

		picList() {
			return this.playData.picInfo
		}
	},
	watch: {
		showComment(newVal) {
			if(newVal) {
				this.imgHash = this.picList[this.nowIndex].cmt_md5
				this.getComments()
			}
		},
		commentType() {
			this.getComments()
		}
	},
	methods: {

		getComments() {
			let tag = null
			switch(this.commentType) {
				case 1: tag = this.hot.length !== 0 ? false : true; break
				case 2: tag = this.time.length !== 0 ? false : true; break
				case 0: tag = this.tucao.length !== 0 ? false : true; break
			}
			if(tag) {
				getComments(this.commentType, this.imgHash, this.photoAlbumID).then(data => {
					switch(this.commentType) {
						case 1: this.hot = data ; break
						case 2: this.time = data; break
						case 0: this.tucao  = data; break
					}
				})
			}
		},

		close() {
			this.commentType = 1
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
