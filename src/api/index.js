import fetch from './fetch'
export const getHompageDate = function(pageIndex, pageItemCount) {
    return fetch.JsonP({
        r: 'api/ajaxgallerys',
        page: pageIndex,
        pageSize: pageItemCount,
        tag: 0,
        t: 0.45508123498084329463,
        // callback: 'jsonp1'
    }, 'http://tu.duowan.com/index.php?')
}

export const getAwkwardImg = function(pageIndex, pageItemCount) {
    return fetch.JsonP({
        r: 'api/ajaxgallerys',
        page: pageIndex,
        pageSize: pageItemCount,
        tag: 5037,
        t: 0.040841096985251735
        // callback: 'jsonp1'
    }, 'http://tu.duowan.com/index.php?')
}

export const getImgList = function(gallery_id) {
    // http://tu.duowan.com/index.php?r=show/getByGallery/&gid=135217&_=1503808639577&callback=jsonp1
    return fetch.JsonP({
        r: 'show/getByGallery/',
        gid: gallery_id,
        _: 1503808639577
        // callback: 'jsonp1'
    }, 'http://tu.duowan.com/index.php?')
}

export const getFunnyGif = function(pageIndex, pageItemCount) {
    return fetch.JsonP({
        r: 'api/ajaxgallerys',
        page: pageIndex,
        pageSize: pageItemCount,
        tag: 9031,
        t: 0.8228391110307494
    }, 'http://tu.duowan.com/index.php?')
}

export const getSpitslotImg = function(pageIndex, pageItemCount) {
    return fetch.JsonP({
        r: 'api/ajaxgallerys',
        page: pageIndex,
        pageSize: pageItemCount,
        tag: 15203,
        t: 0.5832385471492922
    }, 'http://tu.duowan.com/index.php?')
}



 /**
  * 
  * @param {number} type 评论的类型  最热 1 |最新 2 |吐槽 0
  * @param {string} imgHash 图片特有的hash码
  * @param {number} picId 图册的id
  */
export const getComments = function(type, imgHash, photoAlbumID) {
	

	return fetch.JsonP({
        r: type !== 0? 'comment/comment' : 'comment/tucao',
		order: type === 1 ? 'hot' : 'time',
		noimg: 'true',
		uniqid: imgHash,
		domain: 'tu.duowan.com',
		url: `/gallery/${photoAlbumID}.html`,
		_: 1504441325798
    }, 'http://comment3.duowan.com/index.php?')
    
}