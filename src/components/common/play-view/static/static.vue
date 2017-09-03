<template>
	<div ref="fatherContainer" id="silde-contanier">
		<div ref="imgWrapper">
			<div id="img-container"  v-for="(item, index) in data" :key="index">
				<img v-lazy="item.url" alt="">
			</div>
		</div>
	</div>
</template>
<script>
import BScroll from 'better-scroll'
// import scroll from '../../scroll'
export default {
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
			let children = imgWrapper.children
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
		},

		scrollEnd() {
			let index = this.scroll.getCurrentPage().pageX
			this.$emit('onScrollEnd', index)
		}
	},
	components: {
		scroll
	}
}
</script>
<style lang="scss" scoped>
#silde-contanier {

	div#img-container {
		position: relative;
		display: inline-block;
		// align-items: center;
		width: 100vw;
		height: 100vh;
		overflow-y: scroll;
	}
}

img {
	position: absolute;
	top: 50%;
	width: 100%;
	transform: translateY(-50%);
	
}
</style>
