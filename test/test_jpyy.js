import {__jsEvalReturn} from "../js/jpyy.js"

let spider = __jsEvalReturn();
import {} from '../wrapper/index.js';

beforeEach(async function () {
    let siteKey = 'jpyy';
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

describe('jpyy', function () {

    it('home', async function () {
        console.log(JSON.stringify(JSON.parse(await spider.home(true)), null, 2));
    });


    it('homeVod', async function () {
        console.log(JSON.stringify(JSON.parse(await spider.homeVod()), null, 2));
    });

    describe('#category', function () {
        it('category', async function () {
            console.log(JSON.stringify(JSON.parse(await spider.category("/type/2", 2, true, {
                "type": "14", "area": "中国大陆", "year": "2024", "lang": "普通话","class":"家庭"
            })), null, 2));
        });
    });

    it('detail', async function () {
        console.log(JSON.stringify(JSON.parse(await spider.detail("/detail/83882")), null, 2));
    });

    describe('#play', function () {
        it('play', async function () {
            let froms = '[root]'
            let urls = "1$/vod/play/83882/sid/175815#2$/vod/play/83882/sid/175817#3$/vod/play/83882/sid/175819#4$/vod/play/83882/sid/175821#5$/vod/play/83882/sid/175823#6$/vod/play/83882/sid/175825#7$/vod/play/83882/sid/175827#8$/vod/play/83882/sid/175829#9$/vod/play/83882/sid/175831#10$/vod/play/83882/sid/175833#11$/vod/play/83882/sid/175835#12$/vod/play/83882/sid/175837#13$/vod/play/83882/sid/175839#14$/vod/play/83882/sid/175841#15$/vod/play/83882/sid/175843#16$/vod/play/83882/sid/175845#17$/vod/play/83882/sid/175847#18$/vod/play/83882/sid/175849#19$/vod/play/83882/sid/175851#20$/vod/play/83882/sid/175853#21$/vod/play/83882/sid/175855#22$/vod/play/83882/sid/175857#23$/vod/play/83882/sid/175859#24$/vod/play/83882/sid/175861#25$/vod/play/83882/sid/175863#26$/vod/play/83882/sid/175865#27$/vod/play/83882/sid/175867#28$/vod/play/83882/sid/175869#29$/vod/play/83882/sid/175871#30$/vod/play/83882/sid/175873#31$/vod/play/83882/sid/175875#32$/vod/play/83882/sid/175877#33$/vod/play/83882/sid/175879#34$/vod/play/83882/sid/175881#35$/vod/play/83882/sid/175883#36$/vod/play/83882/sid/175885#37$/vod/play/83882/sid/175887#38$/vod/play/83882/sid/175889#39$/vod/play/83882/sid/175891#40$/vod/play/83882/sid/175893#41$/vod/play/83882/sid/175895#42$/vod/play/83882/sid/175897#43$/vod/play/83882/sid/175899#44$/vod/play/83882/sid/175901#45$/vod/play/83882/sid/175903#46$/vod/play/83882/sid/175905#47$/vod/play/83882/sid/175907#48$/vod/play/83882/sid/175909#49$/vod/play/83882/sid/175911#50$/vod/play/83882/sid/175913#51$/vod/play/83882/sid/175915#52$/vod/play/83882/sid/175917#53$/vod/play/83882/sid/175919#54$/vod/play/83882/sid/175921#55$/vod/play/83882/sid/175923#56$/vod/play/83882/sid/175925#57$/vod/play/83882/sid/175927#58$/vod/play/83882/sid/175929#59$/vod/play/83882/sid/175931#60$/vod/play/83882/sid/175933#61$/vod/play/83882/sid/175935#62$/vod/play/83882/sid/175937#63$/vod/play/83882/sid/175939#64$/vod/play/83882/sid/175941#65$/vod/play/83882/sid/175943#66$/vod/play/83882/sid/175945#67$/vod/play/83882/sid/175947#68$/vod/play/83882/sid/175949#69$/vod/play/83882/sid/175951#70$/vod/play/83882/sid/175953#71$/vod/play/83882/sid/175955#72$/vod/play/83882/sid/175957#73$/vod/play/83882/sid/175959#74$/vod/play/83882/sid/175961#75$/vod/play/83882/sid/175963#76$/vod/play/83882/sid/175965#77$/vod/play/83882/sid/175967#78$/vod/play/83882/sid/175969#79$/vod/play/83882/sid/175971#80$/vod/play/83882/sid/175973#81$/vod/play/83882/sid/175975#82$/vod/play/83882/sid/175977#83$/vod/play/83882/sid/175979#84$/vod/play/83882/sid/175981#85$/vod/play/83882/sid/175983#86$/vod/play/83882/sid/175985#87$/vod/play/83882/sid/175987#88$/vod/play/83882/sid/175989#89$/vod/play/83882/sid/175991#90$/vod/play/83882/sid/175993#91$/vod/play/83882/sid/175995#92$/vod/play/83882/sid/175997#93$/vod/play/83882/sid/175999#94$/vod/play/83882/sid/176001#95$/vod/play/83882/sid/176003#96$/vod/play/83882/sid/176005#97$/vod/play/83882/sid/176007#98$/vod/play/83882/sid/176009#99$/vod/play/83882/sid/176011#100$/vod/play/83882/sid/176013#101$/vod/play/83882/sid/176015#102$/vod/play/83882/sid/176017#103$/vod/play/83882/sid/176019#104$/vod/play/83882/sid/176021#105$/vod/play/83882/sid/176023#106$/vod/play/83882/sid/176025#107$/vod/play/83882/sid/176027#108$/vod/play/83882/sid/176029#109$/vod/play/83882/sid/176031#110$/vod/play/83882/sid/176033#111$/vod/play/83882/sid/176035#112$/vod/play/83882/sid/176037#113$/vod/play/83882/sid/176039#114$/vod/play/83882/sid/176041#115$/vod/play/83882/sid/176043#116$/vod/play/83882/sid/176045#117$/vod/play/83882/sid/176047#118$/vod/play/83882/sid/176049#119$/vod/play/83882/sid/176051#120$/vod/play/83882/sid/176053#121$/vod/play/83882/sid/176055#122$/vod/play/83882/sid/176057#123$/vod/play/83882/sid/176059#124$/vod/play/83882/sid/176061#125$/vod/play/83882/sid/176063#126$/vod/play/83882/sid/176065#127$/vod/play/83882/sid/176067#128$/vod/play/83882/sid/176069#129$/vod/play/83882/sid/176071#130$/vod/play/83882/sid/176073#131$/vod/play/83882/sid/176075#132$/vod/play/83882/sid/176077#133$/vod/play/83882/sid/176079#134$/vod/play/83882/sid/176081#135$/vod/play/83882/sid/176083#136$/vod/play/83882/sid/176085#137$/vod/play/83882/sid/176087#138$/vod/play/83882/sid/176089#139$/vod/play/83882/sid/176091#140$/vod/play/83882/sid/176093#141$/vod/play/83882/sid/176095#142$/vod/play/83882/sid/176097#143$/vod/play/83882/sid/176099#144$/vod/play/83882/sid/176101#145$/vod/play/83882/sid/176103#146$/vod/play/83882/sid/176105#147$/vod/play/83882/sid/176107#148$/vod/play/83882/sid/176109#149$/vod/play/83882/sid/176111#150$/vod/play/83882/sid/176113#151$/vod/play/83882/sid/176115#152$/vod/play/83882/sid/176117#153$/vod/play/83882/sid/176119#154$/vod/play/83882/sid/176121#155$/vod/play/83882/sid/176123#156$/vod/play/83882/sid/176125#157$/vod/play/83882/sid/176127#158$/vod/play/83882/sid/176129#159$/vod/play/83882/sid/176131#160$/vod/play/83882/sid/176133#161$/vod/play/83882/sid/176135#162$/vod/play/83882/sid/176137#163$/vod/play/83882/sid/176139#164$/vod/play/83882/sid/176141#165$/vod/play/83882/sid/176143#166$/vod/play/83882/sid/176145#167$/vod/play/83882/sid/176147#168$/vod/play/83882/sid/176149#169$/vod/play/83882/sid/176151#170$/vod/play/83882/sid/176153#171$/vod/play/83882/sid/176155#172$/vod/play/83882/sid/176157#173$/vod/play/83882/sid/176159#174$/vod/play/83882/sid/989833#175$/vod/play/83882/sid/1019520#176$/vod/play/83882/sid/1044080#"
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