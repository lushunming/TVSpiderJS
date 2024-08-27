import {__jsEvalReturn} from "../js/xb6v.js"

let spider = __jsEvalReturn();
import {} from '../wrapper/index.js';

beforeEach(async function () {
    let siteKey = 'xb6v';
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

describe('xb6v', function () {

    it('home', async function () {
        console.log(JSON.stringify(JSON.parse(await spider.home(true)), null, 2));
    });


    it('homeVod', async function () {
        console.log(JSON.stringify(JSON.parse(await spider.homeVod()), null, 2));
    });

    describe('#category', function () {
        it('category', async function () {
            console.log(JSON.stringify(JSON.parse(await spider.category("/dianshiju/", 2, true, {
                // "year": "2024"
            })), null, 2));
        });
    });

    it('detail', async function () {
        console.log(JSON.stringify(JSON.parse(await spider.detail("/dianshiju/guoju/24274.html")), null, 2));
    });

    describe('#play', function () {
        it('play', async function () {
          //  console.log(JSON.stringify(JSON.parse(await spider.detail("49658")), null, 2));

            let froms = '磁力线路1$$$播放地址（无插件 极速播放）$$$播放地址（无需安装插件）$$$播放地址三$$$播放地址四$$$【网盘】'
            let urls = "全集打包.1080p.HD国语中字.mp4$magnet:?xt=urn:btih:1b5adb0b10c8f6076c5f9343cce3227740e583f7&dn=%e6%ad%a3%e6%b8%af%e5%88%86%e5%b1%80.6v%e7%94%b5%e5%bd%b1%20%e5%9c%b0%e5%9d%80%e5%8f%91%e5%b8%83%e9%a1%b5%20www.6v123.net%20%e6%94%b6%e8%97%8f%e4%b8%8d%e8%bf%b7%e8%b7%af$$$第1集$/e/DownSys/play/?classid=6&id=24274&pathid1=0&bf=0#第2集$/e/DownSys/play/?classid=6&id=24274&pathid1=1&bf=0#第3集$/e/DownSys/play/?classid=6&id=24274&pathid1=2&bf=0#第4集$/e/DownSys/play/?classid=6&id=24274&pathid1=3&bf=0#第5集$/e/DownSys/play/?classid=6&id=24274&pathid1=4&bf=0#第6集完结$/e/DownSys/play/?classid=6&id=24274&pathid1=5&bf=0$$$第01集$/e/DownSys/play/?classid=6&id=24274&pathid2=0&bf=1#第02集$/e/DownSys/play/?classid=6&id=24274&pathid2=1&bf=1#第03集$/e/DownSys/play/?classid=6&id=24274&pathid2=2&bf=1#第04集$/e/DownSys/play/?classid=6&id=24274&pathid2=3&bf=1#第05集$/e/DownSys/play/?classid=6&id=24274&pathid2=4&bf=1#第06集$/e/DownSys/play/?classid=6&id=24274&pathid2=5&bf=1$$$第1集$/e/DownSys/play/?classid=6&id=24274&pathid3=0&bf=2#第2集$/e/DownSys/play/?classid=6&id=24274&pathid3=1&bf=2#第3集$/e/DownSys/play/?classid=6&id=24274&pathid3=2&bf=2#第4集$/e/DownSys/play/?classid=6&id=24274&pathid3=3&bf=2#第5集$/e/DownSys/play/?classid=6&id=24274&pathid3=4&bf=2#第6集完结$/e/DownSys/play/?classid=6&id=24274&pathid3=5&bf=2$$$第01集$/e/DownSys/play/?classid=6&id=24274&pathid4=0&bf=3#第02集$/e/DownSys/play/?classid=6&id=24274&pathid4=1&bf=3#第03集$/e/DownSys/play/?classid=6&id=24274&pathid4=2&bf=3#第04集$/e/DownSys/play/?classid=6&id=24274&pathid4=3&bf=3#第05集$/e/DownSys/play/?classid=6&id=24274&pathid4=4&bf=3#第06集$/e/DownSys/play/?classid=6&id=24274&pathid4=5&bf=3$$$下载地址1$https://pan.quark.cn/s/b0746c85b804"
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