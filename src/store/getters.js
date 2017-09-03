export default {
	getPlayState(state) {
		return state.playing
	},
	getPlayData(state) {
		return state.playData
	},
	getPlayType(state) {
		return state.playType
	},
	getPlayIndex(state) {
		return state.playIndex
	},
	getPhotoAlbumID(state) {
		return state.photoAlbumID
	}
}