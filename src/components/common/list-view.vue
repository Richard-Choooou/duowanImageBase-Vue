<template>
<div>
	<scroll-view class="list-view" :data="data">
		<div>
			<div class="item" 
			:class="[['animateDelayA', 'animateDelayB', 'animateDelayC', 'animateDelayD','animateDelayE'][~~(Math.random()* 5)], ['itemAnimateA', 'itemAnimateB'][~~(Math.random()* 2)]]" 
			v-for="(item, index) in data" 
			@click = "clickItem(item.gallery_id)"
			:key="index"
			v-lazy:background-image="item.cover_url"
			>
				<div class="text-container">
					{{item.title}}
				</div>
			</div>
		</div>
	</scroll-view>
	<router-view class="play-view"></router-view>
</div>
	
</template>
<script>
import {getImgList} from '@/api'
import scrollView from '@/components/common/scroll'
import pagination from '@/config/pagination'


export default {
	data() {
		return {
			pagination,
		}
	},
	props: {
		data: {
			type: Array,
			default: []
		}
	},
	methods: {
		clickItem(id) {
			this.$emit('clickItem', id)
			getImgList(id).then( data => {
				this.$router.push(this.$route.matched[0].path + '/play')
				// console.log(this.$store)
				this.$store.dispatch('play', data)
			}).catch(e => {
				console.log(e)
			})
		}
	},
	components: {
		scrollView
	}
}
</script>
<style lang="scss" scoped>

.list-view {
	width: 100%;
	height: pxToRem(2208px - 174px);
	>div {
		padding-top: pxToRem(1px);
		padding-bottom: pxToRem(100px);
	}

	.animateDelayA {
		animation-delay: 1s
	}
	.animateDelayB {
		animation-delay: 2s
	}
	.animateDelayC {
		animation-delay: 3s
	}
	.animateDelayD {
		animation-delay: 5s
	}
	.animateDelayE {
		animation-delay: 5s
	}


	.item {
		position: relative;
		margin: 0 auto;
		margin-top: pxToRem(30px);
		width: 96%;
		height: pxToRem(600px);
		overflow: hidden;
		background-size: cover;
		// background-position: bottom;
		// animation: moveImages 6s infinite ease-in-out;

		&:active {
			transform: rotate3d(1, 1, 0, 15deg);
		}
	}

	.itemAnimateA {
		background-size: cover;
		// background-position: bottom;
		animation: moveImagesA 6s infinite ease-in-out;
	}

	@keyframes moveImagesA {
		0% {
			background-position: top;
		}
		
		50% {
			background-position: bottom;
		}
		
		100% {
			background-position: top;
		}
	}

	.itemAnimateB {
		background-size: 130% auto;
		// background-position: bottom;
		animation: moveImagesB 6s infinite alternate;
	}

	@keyframes moveImagesB {
		0% {
			background-position: 0 0;
		}
		
		// 10% {
		// 	background-position: 10% 10%;
		// }

		25% {
			background-position: 20% 50%;
		}
		
		50% {
			background-position: 55% 50%;
		}

		75% {
			background-position: 70% 80%;
		}
		
		100% {
			background-position: 100% 100%;
		}
	}

	.text-container {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: {
			// top: pxToRem(10px);
			left: pxToRem(20px);
			right: pxToRem(20px);
		}
		width: 100%;
		height:  pxToRem(200px);
		background: rgba(0, 0, 0, .6);
		bottom: 0;
		color: #fff;
		font-size: pxToRem(48px);
		line-height: pxToRem(60px);
	}
}
</style>
