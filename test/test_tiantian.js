import {__jsEvalReturn} from "../js/tiantian.js"

let spider = __jsEvalReturn();
import {} from '../wrapper/index.js';

beforeEach(async function () {
    let siteKey = 'tiantian';
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

describe('tiantian', function () {

    it('home', async function () {
        console.log(JSON.stringify(JSON.parse(await spider.home(true)), null, 2));
    });


    it('homeVod', async function () {
        console.log(JSON.stringify(JSON.parse(await spider.homeVod()), null, 2));
    });

    describe('#category', function () {
        it('category', async function () {
            console.log(JSON.stringify(JSON.parse(await spider.category("9", 2, true, {
                // "year": "2024"
            })), null, 2));
        });
    });

    it('detail', async function () {
        console.log(JSON.stringify(JSON.parse(await spider.detail("49658")), null, 2));
    });

    describe('#play', function () {
        it('play', async function () {
            console.log(JSON.stringify(JSON.parse(await spider.detail("49658")), null, 2));

            let froms = '备用❶【点击换线路☝】'
            let urls = "1$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第01集/index.m3u8#2$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第02集/index.m3u8#3$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第03集/index.m3u8#4$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第04集/index.m3u8#5$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第05集/index.m3u8#6$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第06集/index.m3u8#7$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第07集/index.m3u8#8$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第08集/index.m3u8#9$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第09集/index.m3u8#10$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第10集/index.m3u8#11$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第11集/index.m3u8#12$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第12集/index.m3u8#13$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第13集/index.m3u8#14$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第14集/index.m3u8#15$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第15集/index.m3u8#16$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第16集/index.m3u8#17$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第17集/index.m3u8#18$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第18集/index.m3u8#19$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第19集/index.m3u8#20$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第20集/index.m3u8#21$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第21集/index.m3u8#22$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第22集/index.m3u8#23$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第23集/index.m3u8#24$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第24集/index.m3u8#25$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第25集/index.m3u8#26$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第26集/index.m3u8#27$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第27集/index.m3u8#28$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第28集/index.m3u8#29$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第29集/index.m3u8#30$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第30集/index.m3u8#31$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第31集/index.m3u8#32$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第32集/index.m3u8#33$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第33集/index.m3u8#34$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第34集/index.m3u8#35$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第35集/index.m3u8#36$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第36集/index.m3u8#37$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第37集/index.m3u8#38$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第38集/index.m3u8#39$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第39集/index.m3u8#40$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第40集/index.m3u8#41$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第41集/index.m3u8#42$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第42集/index.m3u8#43$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第43集/index.m3u8#44$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第44集/index.m3u8#45$https://s1.bfbfvip.com/video/mendanghuduiaishangni/第45集/index.m3u8"
            for (let i = 0; i < froms.split("$$$").length; i++) {
                console.log(JSON.stringify(JSON.parse(await spider.play(froms.split("$$$").at(i), urls.split("$$$").at(i).split("$").at(1).split('#').at(0), "")), null, 2));
            }


        });
    });
    describe('#search', function () {
        it('search', async function () {
            console.log(JSON.stringify(JSON.parse(await spider.search('红海', true)), null, 2));

        });
    });
});