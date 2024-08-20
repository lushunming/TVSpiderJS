import {__jsEvalReturn} from "../js/kankan70.js"

let spider = __jsEvalReturn();
import {} from '../wrapper/index.js';

beforeEach(async function () {
    let siteKey = 'kankan70';
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

describe('kankan70', function () {
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
            console.log(JSON.stringify(JSON.parse(await spider.category("/acg/y2024/", 2, true,{} )),null,2));
        });
    });
    describe('#detail', function () {
        it('detail', async function () {
            console.log(JSON.stringify(JSON.parse(await spider.detail("//acg/91715/")),null,2));
        });
    });
    describe('#play', function () {
        it('play', async function () {
            let froms = '酷U$$$酷播$$$F速$$$新朗$$$飞飞$$$无天$$$良子$$$百度'
            let urls = '第1集$https://ukzy.ukubf4.com/20240708/6WA4XzFY/index.m3u8#第2集$https://ukzy.ukubf4.com/20240715/07y0aCmG/index.m3u8#第3集$https://ukzy.ukubf4.com/20240722/m1cLGCBR/index.m3u8#第4集$https://ukzy.ukubf4.com/20240728/vJeDoxzi/index.m3u8#第5集$https://ukzy.ukubf4.com/20240805/NOCaHF8Y/index.m3u8#第6集$https://ukzy.ukubf4.com/20240812/sD9aEaTv/index.m3u8$$$第1集$https://svip.high22-playback.com/20240708/4653_31f7e9d2/index.m3u8#第2集$https://svip.high21-playback.com/20240722/37552_3b796d5f/index.m3u8#第3集$https://svip.high24-playback.com/20240729/1892_c2d5a69e/index.m3u8#第4集$https://svip.high22-playback.com/20240805/6010_270d50b5/index.m3u8#第5集$https://svip.high24-playback.com/20240814/3214_79e9f326/index.m3u8#第6集$https://svip.high24-playback.com/20240818/3689_7cfa0611/index.m3u8$$$第1集$https://s10.fsvod1.com/20240707/vZCuFE0N/index.m3u8#第2集$https://s10.fsvod1.com/20240721/OTnkdb7L/index.m3u8#第3集$https://s10.fsvod1.com/20240728/JzdOuRnH/index.m3u8#第4集$https://s10.fsvod1.com/20240804/F3Bud3Bd/index.m3u8#第5集$https://s10.fsvod1.com/20240811/erxT6gLz/index.m3u8#第6集$https://s10.fsvod1.com/20240818/Pzp9xprg/index.m3u8$$$第1集$https://v.gsuus.com/play/Pdy36Q6a/index.m3u8#第2集$https://v.gsuus.com/play/Yer35g6a/index.m3u8#第3集$https://v.gsuus.com/play/nel3WVgd/index.m3u8#第4集$https://v.gsuus.com/play/lej3l2Wa/index.m3u8#第5集$https://v.gsuus.com/play/YaOwQopa/index.m3u8#第6集$https://v.gsuus.com/play/5eVBvGOe/index.m3u8#第7集$https://v.gsuus.com/play/rb20k5ve/index.m3u8$$$第1集$https://svipsvip.ffzy-online5.com/20240715/30033_a6af87c4/index.m3u8#第2集$https://svipsvip.ffzy-online5.com/20240722/30408_36bf90ea/index.m3u8#第3集$https://svipsvip.ffzy-online5.com/20240728/30758_f7c6448c/index.m3u8#第4集$https://svipsvip.ffzy-online5.com/20240805/31003_1d93b3d0/index.m3u8#第5集$https://svipsvip.ffzy-online5.com/20240812/31291_d0ceaba6/index.m3u8#第6集$https://svipsvip.ffzy-online5.com/20240819/31533_e71c1ca6/index.m3u8$$$第1集$https://v10.tlkqc.com/wjv10/202407/15/8pesyT28AU82/video/index.m3u8#第2集$https://v10.tlkqc.com/wjv10/202407/22/S83eMQdysu82/video/index.m3u8#第3集$https://v10.tlkqc.com/wjv10/202407/29/y1FcfPtQYn82/video/index.m3u8#第4集$https://v11.tlkqc.com/wjv11/202408/05/faCiYsQnTc83/video/index.m3u8#第5集$https://v2.tlkqc.com/wjv2/202408/12/dwzJSXxE9e74/video/index.m3u8$$$第1集$https://v.cdnlz22.com/20240715/2330_249ae813/index.m3u8#第2集$https://v.cdnlz22.com/20240722/2665_e663d20d/index.m3u8#第3集$https://v.cdnlz22.com/20240728/2973_8530097c/index.m3u8#第4集$https://v.cdnlz22.com/20240805/3271_7dbd891f/index.m3u8#第5集$https://v.cdnlz22.com/20240812/3561_417a5204/index.m3u8#第6集$https://v.cdnlz22.com/20240819/3916_8a83d09b/index.m3u8$$$第1集$https://c1.rrcdnbf3.com/video/jinrourenwanmeichaorenshizupian/第01集/index.m3u8#第2集$https://c1.rrcdnbf3.com/video/jinrourenwanmeichaorenshizupian/第02集/index.m3u8#第3集$https://c1.rrcdnbf3.com/video/jinrourenwanmeichaorenshizupian/第03集/index.m3u8#第4集$https://c1.rrcdnbf3.com/video/jinrourenwanmeichaorenshizupian/第04集/index.m3u8#第5集$https://c1.rrcdnbf3.com/video/jinrourenwanmeichaorenshizupian/第05集/index.m3u8#第6集$https://c1.rrcdnbf3.com/video/jinrourenwanmeichaorenshizupian/第06集/index.m3u8'
            for (let i = 0; i < froms.split("$$$").length; i++) {
                console.log(JSON.stringify(JSON.parse(await spider.play(froms.split("$$$").at(i), urls.split("$$$").at(i).split("$").at(1).split('#').at(0), "")),null,2));
            }


        });
    });
    describe('#search', function () {
        it('search', async function () {
                console.log(JSON.stringify(JSON.parse(await spider.search('红海',true)),null,2));

        });
    });
});