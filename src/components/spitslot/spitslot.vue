<template>
	<list-view
	:data = "data"
	
	></list-view>
	<!-- @clickItem = "getItemDetail" -->
</template>
<script>
import {getSpitslotImg} from '@/api'
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
			getSpitslotImg(
				pagination.pageIndex,
				pagination.pageItemSize
			).then(data => {
				console.log(data)
				this.data = data.gallerys
			}).catch(err => {
				console.log(err)
			})
		},
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

</style>
