export default {
	getPlayState(state) {
		return state.playing
	},
	getPlayData(state) {
		return state.playData
	},
	getPlayType(state) {
		return state.playType
	}
}