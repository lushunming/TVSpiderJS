/*
* @File     : kankan70.js
* @Author   : jade
* @Date     : 2023/12/29 15:33
* @Email    : jadehh@1ive.com
* @Software : Samples
* @Desc     :
*/
import {_, Crypto, load} from "../lib/cat.js";
import {VodDetail, VodShort} from "../lib/vod.js";
import {Spider} from "./spider.js";
import * as Utils from "../lib/utils.js";


class JpyySpider extends Spider {
    constructor() {
        super();
        this.siteUrl = "https://www.cfkj86.com";
    }

    getName() {
        return "📺┃金牌影院┃📺"
    }

    getAppName() {
        return "金牌影院"
    }

    getJSName() {
        return "jpyy"
    }

    getType() {
        return 3
    }


    async parseVodShortListFromDoc($) {
        let vod_list = []
        let vod_elements = $("div.content-card > a")
        for (const vod_element of vod_elements) {
            let vodShort = new VodShort()
            vodShort.vod_id = vod_element.attribs["href"]
            vodShort.vod_name = $(vod_element).find("div.card-info ").find('div.title').text()
            vodShort.vod_pic = this.baseProxy + Utils.base64Encode(this.siteUrl + $(vod_element).find("img")[0].attribs["srcset"].split(',')[0])
            vodShort.vod_remarks = $($(vod_element).find("div.score").first()).text()
            vod_list.push(vodShort)
        }
        return vod_list
    }

    async parseVodDetailFromDoc($) {
        let vodDetail = new VodDetail()

        vodDetail.vod_name = $("h1.title").text()
        vodDetail.vod_remarks = $("div.tags > a.tag").text()

        vodDetail.vod_area = ""
        vodDetail.vod_year = ""
        vodDetail.type_name = ""
        vodDetail.vod_content = $("div.intro").text()
        vodDetail.vod_pic =this.baseProxy + Utils.base64Encode( this.siteUrl + $("img")[0].attribs["srcset"].split(',')[0])

        return vodDetail
    }


    async setClasses() {
        let html = await this.fetch(this.siteUrl, null, this.getHeader())
        if (!_.isEmpty(html)) {
            let $ = load(html)
            let elements = $("div.header__HeaderLeftBox-sc-f39f4ddd-2 > a")
            for (const element of elements) {
                let typeElement = $(element).find("div")
                let type_id = $(element).attr("href")
                let type_name = $(typeElement[0]).text()
                if (!_.isEmpty(type_name)) {
                    this.classes.push({"type_id": type_id, "type_name": type_name})
                }
            }
        }
    }

    async getFilter(type_id) {
        type_id = type_id.split('/')[2];
        let url = this.siteUrl + "/vod/show/id/" + type_id
        let html = await this.fetch(url, null, this.getHeader())
        let extend_list = []
        if (!_.isEmpty(html)) {
            let $ = load(html)
            let elements = $("div.filter-box")
            let i = 0
            for (const element of elements) {
                let type_name = $(element).find("div.filter-title").text()
                let extend_dic = {
                    "key": (i + 1).toString(), "name": type_name, "value": []
                }
                let type_elements = $(element).find("a")
                /*   let index = 0
                   if (type_name === "剧情") {
                       index = 3
                   } else if (type_name === "年代") {
                       index = 2
                   } else if (type_name === "地区") {
                       index = 4
                   }*/
                for (const type_element of type_elements) {
                    let type_id_list = type_element.attribs["href"].split("/")
                    if (type_id_list.length > 5) {
                        extend_dic["value"].push({"n": $(type_element).text(), "v": type_id_list[6]})
                        extend_dic["key"] = type_id_list[5]
                    } else {
                        extend_dic["value"].push({"n": $(type_element).text(), "v": ""})

                    }
                }
                extend_list.push(extend_dic)
                i = i + 1
            }
        }
        return extend_list
    }

    async setFilterObj() {
        for (const class_dic of this.classes) {
            let type_id = class_dic["type_id"]
            if (type_id !== "/") {
                this.filterObj[type_id] = await this.getFilter(type_id)
            }
        }
    }

    async setHomeVod() {
        let html = await this.fetch(this.siteUrl, null, this.getHeader())
        if (!_.isEmpty(html)) {
            let $ = load(html)
            this.homeVodList = await this.parseVodShortListFromDoc($)
        }
    }

    async setCategory(tid, pg, filter, extend) {
        if (tid === '/') {
            let html = await this.fetch(this.siteUrl, null, this.getHeader())
            let $ = load(html)
            this.vodList = await this.parseVodShortListFromDoc($)
        } else {
            let type_id_list = tid.split("/")
            let url = this.siteUrl + "/vod/show/id/" + type_id_list[2]
            for (let ext in extend) {
                if (extend[ext]) {
                    url += '/' + ext + '/' + extend[ext];
                }
            }
            let cate_html = await this.fetch(url, {}, this.getHeader())
            if (!_.isEmpty(cate_html)) {
                let $ = load(cate_html)
                this.vodList = await this.parseVodShortListFromDoc($)
            }

        }

    }

    async setDetail(id) {
        let detailUrl = this.siteUrl + id
        let html = await this.fetch(detailUrl, null, this.getHeader())
        if (!_.isEmpty(html)) {
            let $ = load(html)
            this.vodDetail = await this.parseVodDetailFromDoc($)
            let froms = $("div.listitem > a");
            let urls = "";
            for (const from of froms) {
                urls += $(from).text() + "$" + $(from).attr("href") + "#";
            }


            this.vodDetail.vod_play_url = urls;
            this.vodDetail.vod_play_from = "金牌影院"

        }
    }

    async setPlay(flag, id, flags) {
        let arr = id.split("/")
        let idStr = arr[3]
        let nidStr = arr[5]
        let t = new Date().getTime().toString()
        let deviceid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, e => (e === "x" ? Math.random() * 16 | 0 : 8).toString(16))
        let key = 'cb808529bae6b6be45ecfab29a4889bc'
        let sign = Crypto.SHA1(Crypto.MD5('id=' + idStr + '&nid=' + nidStr + '&key=' + key + '&t=' + t).toString().toLowerCase()).toString();

        let reqUrl = this.siteUrl + '/api/mw-movie/anonymous/v1/video/episode/url?id=' + idStr + '&nid=' + nidStr
        let header = this.getHeader();
        header['deviceid'] = deviceid;
        header['sign'] = sign;
        header['t'] = t;

        let html = await this.fetch(reqUrl, null, header)
        if (!_.isEmpty(html)) {
            let res = JSON.parse(html)
            res.code === 200 ? this.playUrl = res.data.playUrl : this.jadeLog.error(res.msg)
        }
    }

    async setSearch(wd, quick) {
        let url = this.siteUrl + "/vod/search/" + encodeURI(wd);
        let html = await this.fetch(url, null, this.getHeader())
        if (!_.isEmpty(html)) {

            let $ = load(html)

            this.vodList = await this.parseVodShortListFromDoc($)

        }
    }
}

let spider = new JpyySpider()

async function init(cfg) {
    await spider.init(cfg)
}

async function home(filter) {
    return await spider.home(filter)
}

async function homeVod() {
    return await spider.homeVod()
}

async function category(tid, pg, filter, extend) {
    return await spider.category(tid, pg, filter, extend)
}

async function detail(id) {
    return await spider.detail(id)
}

async function play(flag, id, flags) {
    return await spider.play(flag, id, flags)
}

async function search(wd, quick) {
    return await spider.search(wd, quick)
}

export function __jsEvalReturn() {
    return {
        init: init, home: home, homeVod: homeVod, category: category, detail: detail, play: play, search: search,
    };
}

export {spider}