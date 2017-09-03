import type from './mutations-type'

export default {
	[type.SET_PLAY_STATE](state, bool) {
		state.playing = bool
	},
	[type.SET_PLAY_TYPE](state, string) {
		state.playType = string
	},
	[type.SET_PLAY_INDEX](state, string) {
		state.playIndex = string
	},
	[type.SET_PLAY_DATA](state, obj) {
		state.playData = obj
	}
}