<template>
<div>
	<list-view
	:data = "data"
	@clickItem = "getItemDetail"
	></list-view>
</div>
	
</template>
<script>
import {getHompageDate, getImgList} from '@/api'
import listView from '@/components/common/list-view'
import pagination from '@/config/pagination'
export default {
	data() {
		return {
			pagination,
			data: []
		}
	},
	methods: {
		getList() {
			getHompageDate(
				pagination.pageIndex,
				pagination.pageItemSize
			).then(data => {
				console.log(data)
				this.data = data.gallerys
			}).catch(err => {
				console.log(err)
			})
		},

		getItemDetail(id) {
			// console.log(id)
			// getImgList(id).then( data => {
			// 	// console.log(this.$store)
			// 	this.$store.dispatch('play', data)
			// }).catch(e => {
			// 	console.log(e)
			// })
		}
	},
	mounted() {
		this.getList()
	},
	components: {
		
		listView
	}
}
</script>
<style lang="scss" scoped>
@import './homepage.scss'
</style>
