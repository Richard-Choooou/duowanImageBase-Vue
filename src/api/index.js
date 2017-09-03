import fetch from './fetch'
export const getHompageDate = function(pageIndex, pageItemCount) {
	return fetch.JsonP({
		r: 'api/ajaxgallerys',
		page: pageIndex,
		pageSize: pageItemCount,
		tag: 0,
		t: 0.45508123498084329463,
		// callback: 'jsonp1'
	})
}

export const getAwkwardImg = function(pageIndex, pageItemCount) {
	return fetch.JsonP({
		r: 'api/ajaxgallerys',
		page: pageIndex,
		pageSize: pageItemCount,
		tag: 5037,
		t: 0.040841096985251735
		// callback: 'jsonp1'
	})
}

export const getImgList = function(gallery_id) {
	// http://tu.duowan.com/index.php?r=show/getByGallery/&gid=135217&_=1503808639577&callback=jsonp1
	return fetch.JsonP({
		r: 'show/getByGallery/',
		gid: gallery_id,
		_: 1503808639577
		// callback: 'jsonp1'
	})
}

export const getFunnyGif = function(pageIndex, pageItemCount) {
	return fetch.JsonP({
		r: 'api/ajaxgallerys',
		page: pageIndex,
		pageSize: pageItemCount,
		tag: 9031,
		t: 0.8228391110307494
	})
}

export const getSpitslotImg = function(pageIndex, pageItemCount) {
	return fetch.JsonP({
		r: 'api/ajaxgallerys',
		page: pageIndex,
		pageSize: pageItemCount,
		tag: 15203,
		t: 0.5832385471492922
	})
}
