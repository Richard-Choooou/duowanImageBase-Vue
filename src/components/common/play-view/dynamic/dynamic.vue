<template>
	<div ref="fatherContainer">
		<div ref="imgWrapper">
			<div v-for="(item, index) in data" :key="index" class="movie-wrapper">
				<!-- 
				<video autoplay loop>
					<source :src="item.mp4_url">
				</video> 
				-->
			</div>
		</div>
	</div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
	data() {
		return {
			nowIndex: 0
		}
	},
	props: {
		data: {
			type: Array,
			default: []
		}
	},
	mounted() {
		setTimeout(() => {
			this.initScroll()
		}, 20);
	},
	watch: {
		data() {
			this.scroll.refresh()
		}
	},
	methods: {
		initScroll() {
			let fatherContainer = this.$refs.fatherContainer
			let imgWrapper = this.$refs.imgWrapper
			let children = this.movieContainerList = imgWrapper.children
			let width = 0

				;[...children].forEach(value => {
					width += value.clientWidth
				})

			imgWrapper.style.width = width + 'px'

			this.scroll = new BScroll(fatherContainer, {
				scrollX: true,
				eventPassthrough: 'vertical',
				momentum: false,
				snap: {
					loop: this.loop,
					threshold: 0.3,
					speed: 400
				}
			})

			this.scroll.on('scrollEnd', this.scrollEnd)
			this.playVideo()
		},

		scrollEnd() {
			let index = this.scroll.getCurrentPage().pageX
			this.nowIndex = index
			this.$emit('onScrollEnd', index)
			this.playVideo()
		},

		playVideo() {
			let nowIndex = this.nowIndex
			// debugger
			;[...this.movieContainerList].forEach((value, index) => {
				// console.log(index)
				if(index === nowIndex || index === nowIndex - 1 || index === nowIndex + 1) {
					if(!value.innerHTML) {
						if(!this.data[index].mp4_url) {
							value.innerHTML = `<img src="${this.data[index].url}" width="100%" />`
							
						}else {
							value.innerHTML = `<video autoplay loop width = "100%">
												<source src="${this.data[index].mp4_url}" type="video/mp4">
											</video>`
						}
						
					}
				} else {
					value.innerHTML = ''
				}
			})
		}

	},
	components: {
	}
}
</script>
<style lang="scss" scoped>
.movie-wrapper {
	display: inline-flex;
	justify-content: center;
    align-items: center;
	vertical-align: top;
	width: 100vw;
	height: 80vh;

	video {
		width: 100%;
	}

	img {
		width: 100%;
	}
}
</style>
