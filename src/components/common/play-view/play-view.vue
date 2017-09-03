<template>
	<transition name="fade">
		<div class="play-view" >
			<transition name="slideTop">
				<header v-show="showTools">
					<img @click="back" src="../../../assets/back.svg" id="back"/>
					<span id="title">{{playData.gallery_title}}</span>
					<span id="count">{{nowIndex + 1}}/{{picList.length}}</span>
				</header>
			</transition>
			<div id="img-container" @click="toggleTools">
				<div id="static" v-if="playType === 'static'">
					<!-- <img :src="picList[0].url" alt=""> -->
					<static-img
					:data = "picList"
					@onScrollEnd = "scrollEnd"
					></static-img>
				</div>
				<div id="movie" v-if="playType === 'dynamic'">
					<dynamic
					:data = "picList"
					@onScrollEnd = "scrollEnd"
					></dynamic>
				</div>
				
			</div>
			<transition name="slideBottom">
				<footer v-show="showTools">
				<div id="btn-container">
					<div>
						<img src="./images/unUp.svg">
						<span>{{picList[nowIndex].ding}}</span>
					</div>
					<div><img src="./images/unDown.svg"><span>{{picList[nowIndex].cai}}</span></div>
					<div><span id="oldPic">老图</span><span>{{picList[nowIndex].old}}</span></div>
					<div @click="showComment"><img src="./images/talk.svg"><span>评论</span></div>
				</div>
				<div id="disc">
					<span>{{picList[nowIndex].add_intro}}</span>
				</div>
			</footer>
			</transition>
			<comment ref="comment"></comment>
		</div>
	</transition>
</template>
<script>
import { mapGetters } from 'vuex'
import staticImg from './static/static'
import dynamic from './dynamic/dynamic'
import comment from '../comment/comment'

export default {
	data() {
		return {
			title: '',
			nowIndex: 0,
			showTools: true
		}
	},
	computed: {
		...mapGetters({
			isPlay: 'getPlayState',
			playData: 'getPlayData',
			playType: 'getPlayType'
		}),
		picList() {
			return this.playData.picInfo
		}
	},
	beforeRouteLeave(to, from, next) {
		if(this.$refs.comment.showComment) {
			this.$refs.comment.close()
			next(false)
			return
		}
		next()
	},
	methods: {
		back() {
			this.$router.back()
		},
		
		showComment() {
			this.$refs.comment.show()
		},

		toggleTools() {
			this.showTools = !this.showTools
		},

		scrollEnd(index) {
			this.nowIndex = index
			this.$store.commit('SET_PLAY_INDEX', this.nowIndex || 0)
		}
	},
	mounted() {
		this.scrollEnd()
	},
	components: {
		staticImg,
		dynamic,
		comment
	}
}
</script>
<style lang="scss" scoped>
@import './play-view.scss'
</style>
