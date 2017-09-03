import URL from './config'
import jsonP from 'jsonp'

class Fetch{
	
	JsonP(data, option = {
		param: 'callback',
		timeout: 10000,
		prefix: '',
		name: 'jsonp1'
	}) {
		let url = URL + this.param(data)
		
		return new Promise((resolve, reject) => {
			jsonP(url, option, function(err, data) {
				if(err) {
					reject(err)
				}
				if (data) {
					resolve(data)
				}
			})
		})
	}

	param(data) {
		let url = ''
		for(var i in data) {
			let value = data[i] !== undefined ? data[i] : ''
			url += `&${i}=${encodeURIComponent(value)}`
		}
		return url ? url.substring(1) : ''
	}
}

export default new Fetch()