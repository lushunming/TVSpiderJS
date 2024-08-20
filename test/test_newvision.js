import {__jsEvalReturn} from "../js/newvision.js"

let spider = __jsEvalReturn();
import {} from '../wrapper/index.js';

beforeEach(async function () {
    let siteKey = 'nangua';
    let siteType = 3;
    await spider.init({
        skey: siteKey, stype: siteType, ext: {
            "aliToken": "a0debd28d10e4aa5a431e7de586e6e42",
            "box": "TV",
            "code": "1",
            "from": "star",
            "danmu": true,
            "cookie": "buvid3=02675249-8ED3-C418-87F5-59E18316459714816infoc; b_nut=1704421014; _uuid=5D435F74-F574-D9AB-62C1-B9294DE465D913102infoc; buvid_fp=e8c5650c749398e9b5cad3f3ddb5081e; buvid4=007E85D1-52C1-7E6E-07CF-837FFBC9349516677-024010502-J5vTDSZDCw4fNnXRejbSVg%3D%3D; rpdid=|()kYJmulRu0J'u~|RRJl)JR; PVID=1; SESSDATA=3be091d3%2C1720332009%2C699ed%2A11CjAcCdwXG5kY1umhCOpQHOn_WP7L9xFBfWO7KKd4BPweodpR6VyIfeNyPiRmkr5jCqsSVjg0R0dZOVVHRUo3RnhPRTZFc3JPbGdiUjFCdHpiRDhiTkticmdKTjVyS1VhbDdvNjFMSDJlbUJydUlRdjFUNGFBNkJlV2ZTa0N1Q1BEVi1QYTQzTUh3IIEC; bili_jct=b0ee7b5d3f27df893545d811d95506d4; DedeUserID=78014638; DedeUserID__ckMd5=4c8c5d65065e468a; enable_web_push=DISABLE; header_theme_version=CLOSE; home_feed_column=5; CURRENT_BLACKGAP=0; CURRENT_FNVAL=4048; b_lsid=75E916AA_18EA1A8D995; bsource=search_baidu; FEED_LIVE_VERSION=V_HEADER_LIVE_NO_POP; browser_resolution=1507-691; bili_ticket=eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTIzNjk5MTMsImlhdCI6MTcxMjExMDY1MywicGx0IjotMX0.8zQW_fNTCSBlK_JkHnzu3gDw62wuTK1qgKcbGec3swM; bili_ticket_expires=171236985",
            "quarkCookie": "__puus=4315f3066f599ce7233f88d8c313a030AAQ/jijbnct663MvWewmjAye1IUH1d9WVf3hcrcIIOEZvWcl4jsz4IUe4nBqByH9+Oc6JSgdx08r93auaJcX5OHH3X8MozlbCX3f7EQ0/UmJwlZiQsz4UKCA++VixQLNd71zoRJ+VvHmYFkJxfnnveJ3nWSWt3HVbUJbAjsWhKR0UrI72TA33ocAbXvyF0XXFVe8lJI4j4DMK6HixNIf1CX2; CwsSessionId=4ebf55ce-02e3-469c-b7fc-59eb327be82c; kkpcwpea=a=a&uc_param_str=einibicppfmivefrlantcunwsssvjbktchnnsnddds&instance=kkpcwp&pf=145&self_service=true&wxUid=AAR33S5CGi7X5FDtOxbk2juf&plain_utdid=Zk29NiM5i2QDAKrmAFKxjrco&system_ver=Darwin_13.6.6&channel_no=pckk%40clouddrive_share_ch&ve=3.2.7&sv=release; _UP_D_=pc; __kp=872521a0-1743-11ef-8758-49b470509a34; __kps=AAR33S5CGi7X5FDtOxbk2juf; __ktd=v/InsJyWIBLv++dfPEXCtA==; __pus=46820c01a28fc1296d407f0bf5cff035AASGf9nOKeDv5D/U50Qsjq6L5IUllrXEQOlPdpQ2S6JymmRlRK1fmlpdAQRkZ4zTHX3i0LGLYxuSwxai4pJtx/pU; __uid=AAR33S5CGi7X5FDtOxbk2juf; _UP_A4A_11_=wb964143699847c8862df3296d502423"
        }
    });


});

describe('newvision', function () {
    describe('#home', function () {
        it('home list', async function () {
            console.log(await spider.home(true))
        });
    });
    describe('#homeVod', function () {
        it('homeVod', async function () {
            console.log(await spider.homeVod())
        });
    });
    describe('#category', function () {
        it('category', async function () {
            console.log(await spider.category(2, 2, true, {
                "1": [{
                    "key": "class",
                    "name": "类型",
                    "value": [{"n": "全部", "v": "类型"}, {"n": "动作片", "v": "动作片"}, {
                        "n": "喜剧片", "v": "喜剧片"
                    }, {"n": "爱情片", "v": "爱情片"}, {"n": "科幻片", "v": "科幻片"}, {
                        "n": "恐怖片", "v": "恐怖片"
                    }, {"n": "剧情片", "v": "剧情片"}, {"n": "战争片", "v": "战争片"}, {"n": "惊悚片", "v": "惊悚片"}]
                }, {
                    "key": "area", "name": "地区", "value": [{"n": "全部", "v": "地区"}, {"n": "华语", "v": "华语"}, {
                        "n": "香港地区", "v": "香港地区"
                    }, {"n": "美国", "v": "美国"}, {"n": "欧洲", "v": "欧洲"}, {"n": "韩国", "v": "韩国"}, {
                        "n": "日本", "v": "日本"
                    }, {"n": "台湾地区", "v": "台湾地区"}, {"n": "泰国", "v": "泰国"}, {
                        "n": "台湾地区", "v": "台湾地区"
                    }, {"n": "印度", "v": "印度"}, {"n": "其它", "v": "其它"}]
                }, {
                    "key": "year", "name": "年份", "value": [{"n": "全部", "v": "年份"}, {"n": "2024", "v": "2024"}, {
                        "n": "2023", "v": "2023"
                    }, {"n": "2022", "v": "2022"}, {"n": "2021", "v": "2021"}, {"n": "2020", "v": "2020"}, {
                        "n": "2019", "v": "2019"
                    }, {"n": "2018", "v": "2018"}, {"n": "2017", "v": "2017"}, {"n": "2016", "v": "2016"}, {
                        "n": "2015", "v": "2015"
                    }, {"n": "10年代", "v": "10年代"}, {"n": "00年代", "v": "00年代"}, {
                        "n": "90年代", "v": "90年代"
                    }, {"n": "80年代", "v": "80年代"}]
                }, {
                    "key": "by",
                    "name": "排序",
                    "value": [{"n": "热播榜", "v": "热播榜"}, {"n": "好评榜", "v": "好评榜"}, {
                        "n": "新上线", "v": "新上线"
                    }]
                }], "2": [{
                    "key": "class",
                    "name": "类型",
                    "value": [{"n": "全部", "v": "类型"}, {"n": "国产剧", "v": "国产剧"}, {
                        "n": "港台剧", "v": "港台剧"
                    }]
                }, {
                    "key": "area", "name": "地区", "value": [{"n": "全部", "v": "地区"}, {"n": "内地", "v": "内地"}, {
                        "n": "香港地区", "v": "香港地区"
                    }, {"n": "台湾地区", "v": "台湾地区"}]
                }, {
                    "key": "year", "name": "年份", "value": [{"n": "全部", "v": "年份"}, {"n": "2024", "v": "2024"}, {
                        "n": "2023", "v": "2023"
                    }, {"n": "2022", "v": "2022"}, {"n": "2021", "v": "2021"}, {"n": "2020", "v": "2020"}, {
                        "n": "2019", "v": "2019"
                    }, {"n": "2018", "v": "2018"}, {"n": "2017", "v": "2017"}, {"n": "2016", "v": "2016"}, {
                        "n": "2015", "v": "2015"
                    }, {"n": "10年代", "v": "10年代"}, {"n": "00年代", "v": "00年代"}, {
                        "n": "90年代", "v": "90年代"
                    }, {"n": "80年代", "v": "80年代"}]
                }, {
                    "key": "by",
                    "name": "排序",
                    "value": [{"n": "热播榜", "v": "热播榜"}, {"n": "好评榜", "v": "好评榜"}, {
                        "n": "新上线", "v": "新上线"
                    }]
                }], "3": [{
                    "key": "class", "name": "类型", "value": [{"n": "全部", "v": "类型"}, {"n": "大陆", "v": "大陆"}, {
                        "n": "港台", "v": "港台"
                    }, {"n": "日韩", "v": "日韩"}, {"n": "欧美", "v": "欧美"}]
                }, {
                    "key": "area", "name": "地区", "value": [{"n": "全部", "v": "地区"}, {"n": "内地", "v": "内地"}, {
                        "n": "港台", "v": "港台"
                    }, {"n": "日韩", "v": "日韩"}, {"n": "欧美", "v": "欧美"}, {"n": "其它", "v": "其它"}]
                }, {
                    "key": "year", "name": "年份", "value": [{"n": "全部", "v": "年份"}, {"n": "2024", "v": "2024"}, {
                        "n": "2023", "v": "2023"
                    }, {"n": "2022", "v": "2022"}, {"n": "2021", "v": "2021"}, {"n": "2020", "v": "2020"}, {
                        "n": "2019", "v": "2019"
                    }, {"n": "2018", "v": "2018"}, {"n": "2017", "v": "2017"}, {"n": "2016", "v": "2016"}, {
                        "n": "2015", "v": "2015"
                    }, {"n": "10年代", "v": "10年代"}, {"n": "00年代", "v": "00年代"}, {
                        "n": "90年代", "v": "90年代"
                    }, {"n": "80年代", "v": "80年代"}]
                }, {
                    "key": "by",
                    "name": "排序",
                    "value": [{"n": "热播榜", "v": "热播榜"}, {"n": "新上线", "v": "新上线"}]
                }], "4": [{
                    "key": "class",
                    "name": "类型",
                    "value": [{"n": "全部", "v": "类型"}, {"n": "国产漫", "v": "国产漫"}, {
                        "n": "欧美漫", "v": "欧美漫"
                    }, {"n": "日韩漫", "v": "日韩漫"}, {"n": "港台漫", "v": "港台漫"}]
                }, {
                    "key": "area",
                    "name": "地区",
                    "value": [{"n": "全部", "v": "地区"}, {"n": "中国大陆", "v": "中国大陆"}, {
                        "n": "日本", "v": "日本"
                    }, {"n": "韩国", "v": "韩国"}, {"n": "欧美", "v": "欧美"}, {"n": "其它", "v": "其它"}]
                }, {
                    "key": "year", "name": "年份", "value": [{"n": "全部", "v": "年份"}, {"n": "2024", "v": "2024"}, {
                        "n": "2023", "v": "2023"
                    }, {"n": "2022", "v": "2022"}, {"n": "2021", "v": "2021"}, {"n": "2020", "v": "2020"}, {
                        "n": "2019", "v": "2019"
                    }, {"n": "2018", "v": "2018"}, {"n": "2017", "v": "2017"}, {"n": "2016", "v": "2016"}, {
                        "n": "2015", "v": "2015"
                    }, {"n": "10年代", "v": "10年代"}, {"n": "00年代", "v": "00年代"}, {
                        "n": "90年代", "v": "90年代"
                    }, {"n": "80年代", "v": "80年代"}]
                }, {
                    "key": "by",
                    "name": "排序",
                    "value": [{"n": "热播榜", "v": "热播榜"}, {"n": "新上线", "v": "新上线"}]
                }, {
                    "key": "total",
                    "name": "状态",
                    "value": [{"n": "全部", "v": "状态"}, {"n": "连载", "v": "连载"}, {"n": "完结", "v": "完结"}]
                }], "46": [{
                    "key": "class",
                    "name": "类型",
                    "value": [{"n": "全部", "v": "类型"}, {"n": "日韩剧", "v": "日韩剧"}, {
                        "n": "欧美剧", "v": "欧美剧"
                    }, {"n": "海外剧", "v": "海外剧"}]
                }, {
                    "key": "area", "name": "地区", "value": [{"n": "全部", "v": "地区"}, {"n": "韩国", "v": "韩国"}, {
                        "n": "美剧", "v": "美剧"
                    }, {"n": "日本", "v": "日本"}, {"n": "泰国", "v": "泰国"}, {
                        "n": "英国", "v": "英国"
                    }, {"n": "新加坡", "v": "新加坡"}, {"n": "其他", "v": "其他"}]
                }, {
                    "key": "year", "name": "年份", "value": [{"n": "全部", "v": "年份"}, {"n": "2024", "v": "2024"}, {
                        "n": "2023", "v": "2023"
                    }, {"n": "2022", "v": "2022"}, {"n": "2021", "v": "2021"}, {"n": "2020", "v": "2020"}, {
                        "n": "2019", "v": "2019"
                    }, {"n": "2018", "v": "2018"}, {"n": "2017", "v": "2017"}, {"n": "2016", "v": "2016"}, {
                        "n": "2015", "v": "2015"
                    }, {"n": "10年代", "v": "10年代"}, {"n": "00年代", "v": "00年代"}, {
                        "n": "90年代", "v": "90年代"
                    }, {"n": "80年代", "v": "80年代"}]
                }, {
                    "key": "by",
                    "name": "排序",
                    "value": [{"n": "热播榜", "v": "热播榜"}, {"n": "好评榜", "v": "好评榜"}, {
                        "n": "新上线", "v": "新上线"
                    }]
                }]
            }))
        });
    });
    describe('#detail', function () {
        it('detail', async function () {
            console.log(await spider.detail("/video/160741.html"))
        });
    });
    describe('#play', function () {
        it('play', async function () {
            let froms = '蓝光专享1$$$超清线路2$$$高清线路②$$$超清线路3$$$高清线路③$$$高清线路④$$$高清线路⑤'
            let urls = '1080P\n$/vplay/160741-1-1.html$$$斗转乾坤\n$/vplay/160741-7-1.html$$$HD中字\n$/vplay/160741-2-1.html$$$正片\n$/vplay/160741-6-1.html$$$HD国语\n$/vplay/160741-3-1.html$$$HD国语\n$/vplay/160741-8-1.html$$$HD\n$/vplay/160741-5-1.html'
            for (let i = 0; i < froms.split("$$$").length; i++) {
                console.log(await spider.play(froms.split("$$$").at(i), urls.split("$$$").at(i).split("$").at(1), ""))
            }


        });
    });
});