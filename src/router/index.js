import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import homePage from '@/components/homepage/homepage'
import awkwardImg from '@/components/awkwardImg/awkward-img'
import funnyGif from '@/components/funny-gif/funny-gif'
import spitslot from '@/components/spitslot/spitslot'
import playView from '@/components/common/play-view/play-view'

Vue.use(Router)

const router = new Router({
	mode: 'history',
    routes: [{
        path: '/',
		name: 'homePage',
		component: homePage,
		children: [{
			path: 'play',
			component: playView
		}]
    }, {
        path: '/homePage',
        name: 'homePage',
		component: homePage,
		children: [{
			path: 'play',
			component: playView
		}]
    }, {
        path: '/awkwardImg',
        name: 'awkwardImg',
        component: awkwardImg,
		children: [{
			path: 'play',
			component: playView
		}]
	}, {
        path: '/funnyGif',
        name: 'funnyGif',
        component: funnyGif,
		children: [{
			path: 'play',
			component: playView
		}]
	}, {
        path: '/spitslot',
        name: 'spitslot',
        component: spitslot,
		children: [{
			path: 'play',
			component: playView
		}]
	}],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
})

router.beforeEach((to, from, next) => {
	// console.log(store)
	if(store.getters.getPlayState) {
		// console.log(true)
		// store.commit('SET_PLAY_STATE', false)
		store.dispatch('unplay')
	}
	next()
})

export default router