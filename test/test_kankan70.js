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
            console.log(JSON.stringify(JSON.parse(await spider.category("/tv/y2024/", 2, true,{} )),null,2));
        });
    });
    describe('#detail', function () {
        it('detail', async function () {
            console.log(JSON.stringify(JSON.parse(await spider.detail("/tv/98681/")),null,2));
        });
    });
    describe('#play', function () {
        it('play', async function () {
            let froms = '酷播$$$飞飞$$$良子$$$百度$$$无天$$$酷U$$$F速$$$新朗'
            let urls = '第1集$https://svip.high22-playback.com/20240814/6776_cc1b0a32/index.m3u8#第2集$https://svip.high22-playback.com/20240814/6775_89009db2/index.m3u8#第3集$https://svip.high22-playback.com/20240814/6774_8d3cd3d2/index.m3u8#第4集$https://svip.high22-playback.com/20240814/6773_4f45aa6f/index.m3u8#第5集$https://svip.high22-playback.com/20240815/6869_0049c21e/index.m3u8#第6集$https://svip.high22-playback.com/20240815/6868_962adccf/index.m3u8#第7集$https://svip.high22-playback.com/20240816/6945_ac6c8eb2/index.m3u8#第8集$https://svip.high22-playback.com/20240816/6944_fdb39f67/index.m3u8#第9集$https://svip.high22-playback.com/20240817/7042_83646cf2/index.m3u8#第10集$https://svip.high22-playback.com/20240817/7041_17e4bd20/index.m3u8#第11集$https://svip.high22-playback.com/20240818/7185_e2cc9b8b/index.m3u8#第12集$https://svip.high25-playback.com/20240820/3041_6882b928/index.m3u8$$$第1集$https://svipsvip.ffzy-online5.com/20240814/31369_0fe750ce/index.m3u8#第2集$https://svipsvip.ffzy-online5.com/20240814/31370_d73e1b00/index.m3u8#第3集$https://svipsvip.ffzy-online5.com/20240814/31371_e90d8b88/index.m3u8#第4集$https://svipsvip.ffzy-online5.com/20240814/31372_2990a212/index.m3u8#第5集$https://svipsvip.ffzy-online5.com/20240815/31409_9fce355b/index.m3u8#第6集$https://svipsvip.ffzy-online5.com/20240815/31408_8fe69eac/index.m3u8#第7集$https://svipsvip.ffzy-online5.com/20240816/31446_70fc8a17/index.m3u8#第8集$https://svipsvip.ffzy-online5.com/20240816/31445_82d584b9/index.m3u8#第9集$https://svipsvip.ffzy-online5.com/20240817/31488_00749178/index.m3u8#第10集$https://svipsvip.ffzy-online5.com/20240817/31489_bf2c43a8/index.m3u8#第11集$https://svipsvip.ffzy-online5.com/20240818/31527_51ec0e93/index.m3u8#第12集$https://svipsvip.ffzy-online5.com/20240819/31560_ab330135/index.m3u8$$$第1集$https://v.cdnlz3.com/20240814/25597_5682287c/index.m3u8#第2集$https://v.cdnlz3.com/20240814/25598_07dc7541/index.m3u8#第3集$https://v.cdnlz3.com/20240814/25599_20f1f9eb/index.m3u8#第4集$https://v.cdnlz3.com/20240814/25600_8777281d/index.m3u8#第5集$https://v.cdnlz3.com/20240815/25647_7fb1a03b/index.m3u8#第6集$https://v.cdnlz3.com/20240815/25648_7e2bd920/index.m3u8#第7集$https://v.cdnlz3.com/20240816/25679_9da60983/index.m3u8#第8集$https://v.cdnlz3.com/20240816/25678_2d0a33c0/index.m3u8#第9集$https://v.cdnlz3.com/20240817/25719_4c84587c/index.m3u8#第10集$https://v.cdnlz3.com/20240817/25720_7b617daa/index.m3u8#第11集$https://v.cdnlz3.com/20240818/25759_6f52d834/index.m3u8#第12集$https://v.cdnlz3.com/20240819/25785_c048555a/index.m3u8$$$第1集$https://c1.rrcdnbf3.com/video/jiubudejianchaguan/第01集/index.m3u8#第2集$https://c1.rrcdnbf3.com/video/jiubudejianchaguan/第02集/index.m3u8#第3集$https://c1.rrcdnbf3.com/video/jiubudejianchaguan/第03集/index.m3u8#第4集$https://c1.rrcdnbf3.com/video/jiubudejianchaguan/第04集/index.m3u8#第5集$https://c1.rrcdnbf3.com/video/jiubudejianchaguan/第05集/index.m3u8#第6集$https://c1.rrcdnbf3.com/video/jiubudejianchaguan/第06集/index.m3u8#第7集$https://c1.rrcdnbf3.com/video/jiubudejianchaguan/第07集/index.m3u8#第8集$https://c1.rrcdnbf3.com/video/jiubudejianchaguan/第08集/index.m3u8#第9集$https://c1.rrcdnbf3.com/video/jiubudejianchaguan/第09集/index.m3u8#第10集$https://c1.rrcdnbf3.com/video/jiubudejianchaguan/第10集/index.m3u8#第11集$https://c1.rrcdnbf3.com/video/jiubudejianchaguan/第11集/index.m3u8#第12集$https://c1.rrcdnbf3.com/video/jiubudejianchaguan/第12集/index.m3u8$$$第1集$https://v2.tlkqc.com/wjv2/202408/14/0eGmC2E1Ay74/video/index.m3u8#第2集$https://v11.tlkqc.com/wjv11/202408/14/7aVVytgiQM83/video/index.m3u8#第3集$https://v10.tlkqc.com/wjv10/202408/14/NwJvq5a2KY82/video/index.m3u8#第4集$https://v12.tlkqc.com/wjv12/202408/14/ADjQWt2bh184/video/index.m3u8#第5集$https://v7.tlkqc.com/wjv7/202408/15/bhHPy1T7Pp79/video/index.m3u8#第6集$https://v10.tlkqc.com/wjv10/202408/15/FDi49iRHzK82/video/index.m3u8#第7集$https://v10.tlkqc.com/wjv10/202408/16/Amz2JMmGtg82/video/index.m3u8#第8集$https://v10.tlkqc.com/wjv10/202408/16/nHf21qg14F82/video/index.m3u8#第9集$https://v7.tlkqc.com/wjv7/202408/17/sW7f1JbJuB79/video/index.m3u8#第10集$https://v12.tlkqc.com/wjv12/202408/17/A8V8KA7Pi784/video/index.m3u8#第11集$https://v11.tlkqc.com/wjv11/202408/18/sBn9tcNpLp83/video/index.m3u8$$$第1集$https://ukzy.ukubf4.com/20240814/byIxWjPT/index.m3u8#第2集$https://ukzy.ukubf4.com/20240814/uFZX7mdX/index.m3u8#第3集$https://ukzy.ukubf4.com/20240814/hJ21jCGr/index.m3u8#第4集$https://ukzy.ukubf4.com/20240814/QeDKoOtD/index.m3u8#第5集$https://ukzy.ukubf4.com/20240815/YBCpjng1/index.m3u8#第6集$https://ukzy.ukubf4.com/20240815/xjryoRGY/index.m3u8#第7集$https://ukzy.ukubf4.com/20240816/1YQS9u92/index.m3u8#第8集$https://ukzy.ukubf4.com/20240816/ADvo86Rs/index.m3u8#第9集$https://ukzy.ukubf4.com/20240817/uTtVhoRk/index.m3u8#第10集$https://ukzy.ukubf4.com/20240817/pVK2pZQD/index.m3u8#第11集$https://ukzy.ukubf4.com/20240818/5Zg1IArZ/index.m3u8#第12集$https://ukzy.ukubf4.com/20240819/q94BTmzR/index.m3u8$$$第1集$https://s10.fsvod1.com/20240814/5AuCGY0l/index.m3u8#第2集$https://s10.fsvod1.com/20240814/ltmucgAI/index.m3u8#第3集$https://s10.fsvod1.com/20240814/SWo7cacV/index.m3u8#第4集$https://s10.fsvod1.com/20240814/4BffF1SW/index.m3u8#第5集$https://s10.fsvod1.com/20240815/Fh6uHJZk/index.m3u8#第6集$https://s10.fsvod1.com/20240815/AcdxKRMF/index.m3u8#第7集$https://s10.fsvod1.com/20240816/yHLpTl2j/index.m3u8#第8集$https://s10.fsvod1.com/20240816/hyyX3UTI/index.m3u8#第9集$https://s10.fsvod1.com/20240817/bja0BcPU/index.m3u8#第10集$https://s10.fsvod1.com/20240817/0z7JhRTN/index.m3u8#第11集$https://s10.fsvod1.com/20240818/cKwNQe5o/index.m3u8#第12集$https://s10.fsvod1.com/20240819/jBUHVH8Y/index.m3u8$$$第1集$https://v.gsuus.com/play/qaQwJx5d/index.m3u8#第2集$https://v.gsuus.com/play/9b65owNa/index.m3u8#第3集$https://v.gsuus.com/play/QeZJOKge/index.m3u8#第4集$https://v.gsuus.com/play/1aKnXo8e/index.m3u8#第5集$https://v.gsuus.com/play/9aA5DVja/index.m3u8#第6集$https://v.gsuus.com/play/Yerwk3La/index.m3u8#第7集$https://v.gsuus.com/play/1aKnZZYe/index.m3u8#第8集$https://v.gsuus.com/play/qaQw00Ld/index.m3u8#第9集$https://v.gsuus.com/play/penpxWpb/index.m3u8#第10集$https://v.gsuus.com/play/DdwBV6Xb/index.m3u8#第11集$https://v.gsuus.com/play/9aA562za/index.m3u8#第12集$https://v.gsuus.com/play/neln277b/index.m3u8'
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