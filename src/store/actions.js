import type from './mutations-type'

export default {
	play({commit}, obj) {
		commit(type['SET_PLAY_DATA'], obj)
		commit(type.SET_PLAY_STATE, true)
		if(obj.picInfo[0].mp4_url) {
			commit(type['SET_PLAY_TYPE'], 'dynamic')
		} else {
			commit(type['SET_PLAY_TYPE'], 'static')
		}
	},

	unplay({commit}) {
		commit(type['SET_PLAY_DATA'], {})
		commit(type.SET_PLAY_STATE, false)
		commit(type['SET_PLAY_TYPE'], '')
	}
}