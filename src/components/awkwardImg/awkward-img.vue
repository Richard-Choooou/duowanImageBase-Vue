<template>
	<list-view :data="data">
	</list-view>
</template>
<script>
import { getAwkwardImg } from '@/api'
import listView from '@/components/common/list-view'
import pagination from '@/config/pagination'
export default {
	data() {
		return {
			pagination,
			data: []
		}
	},
	mounted() {
		getAwkwardImg(
			pagination.pageIndex,
			pagination.pageItemSize
		).then(data => {
			console.log(data)
			this.data = data.gallerys
		}).catch(err => {
			console.log(err)
		})
	},
	components: {

		listView
	}
}
</script>
<style lang="scss" scoped>

</style>
