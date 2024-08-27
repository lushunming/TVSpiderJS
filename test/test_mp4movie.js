import {__jsEvalReturn} from "../js/mp4movie.js"

let spider = __jsEvalReturn();
import {} from '../wrapper/index.js';

beforeEach(async function () {
    let siteKey = 'mp4movie';
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

describe('mp4movie', function () {

    it('home', async function () {
        console.log(JSON.stringify(JSON.parse(await spider.home(true)), null, 2));
    });


    it('homeVod', async function () {
        console.log(JSON.stringify(JSON.parse(await spider.homeVod()), null, 2));
    });

    describe('#category', function () {
        it('category', async function () {
            console.log(JSON.stringify(JSON.parse(await spider.category("10", 2, true, {
                // "year": "2024"
            })), null, 2));
        });
    });

    it('detail', async function () {
        console.log(JSON.stringify(JSON.parse(await spider.detail("/html/83YuIPLLLLLP.html")), null, 2));
    });

    describe('#play', function () {
        it('play', async function () {
          //  console.log(JSON.stringify(JSON.parse(await spider.detail("49658")), null, 2));

            let froms = '播放地址一'
            let urls = "边水往事.EP15.HD1080p$magnet:?xt=urn:btih:091c7975e8c49db1c1f2ecca3aceadd0362580fd&dn=[www.domp4.cc]边水往事.EP15.HD1080p.mp4#边水往事.EP14.HD1080p$magnet:?xt=urn:btih:59aa7de1c7a6a97712b352b1d3b796036bce09ad&dn=[www.domp4.cc]边水往事.EP14.HD1080p.mp4#边水往事.EP13.HD1080p$magnet:?xt=urn:btih:2688e214e83813003d1c753e4ce9c8917ac6661a&dn=[www.domp4.cc]边水往事.EP13.HD1080p.mp4#边水往事.EP12.HD1080p$magnet:?xt=urn:btih:701a108a82363adf5193ad75f55768e1e28349b9&dn=[www.domp4.cc]边水往事.EP12.HD1080p.mp4#边水往事.EP11.HD1080p$magnet:?xt=urn:btih:e8dcf89495cee60a3a29c95aa1b115b8fc285d81&dn=[www.domp4.cc]边水往事.EP11.HD1080p.mp4#边水往事.EP10.HD1080p$magnet:?xt=urn:btih:59997174ffe0184a815c0ece99a24a21a2eca524&dn=[www.domp4.cc]边水往事.EP10.HD1080p.mp4#边水往事.EP9.HD1080p$magnet:?xt=urn:btih:f2e1434173be80ff146f181c4a8e0a0b58df57e3&dn=[www.domp4.cc]边水往事.EP9.HD1080p.mp4#边水往事.EP8.HD1080p$magnet:?xt=urn:btih:e4520a8199a36beee05a00b6aac4d407bada1d18&dn=[www.domp4.cc]边水往事.EP8.HD1080p.mp4#边水往事.EP7.HD1080p$magnet:?xt=urn:btih:9a2de8a16e173ffddfe5ee9829c56f341d777628&dn=[www.domp4.cc]边水往事.EP7.HD1080p.mp4#边水往事.EP6.HD1080p$magnet:?xt=urn:btih:dcb5c22243b4faf6997085b7e669409dab8abec0&dn=[www.domp4.cc]边水往事.EP6.HD1080p.mp4#边水往事.EP5.HD1080p$magnet:?xt=urn:btih:1346dc727235281648fead3a36c67533a22fa911&dn=[www.domp4.cc]边水往事.EP5.HD1080p.mp4#边水往事.EP4.HD1080p$magnet:?xt=urn:btih:bfa28e7f1299b1c4465f97bc05355a44cd32b0eb&dn=[www.domp4.cc]边水往事.EP4.HD1080p.mp4#边水往事.EP3.HD1080p$magnet:?xt=urn:btih:6817d1bbf355da3d08544c18657b3d79dc701fb3&dn=[www.domp4.cc]边水往事.EP3.HD1080p.mp4#边水往事.EP2.HD1080p$magnet:?xt=urn:btih:e7ca674bb2e80229a8508ecdb16c3ac301e9a99e&dn=[www.domp4.cc]边水往事.EP2.HD1080p.mp4#边水往事.EP1.HD1080p$magnet:?xt=urn:btih:67ab4ca29ae173c97b357d9de4001e752b6ff368&dn=[www.domp4.cc]边水往事.EP1.HD1080p.mp4"
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