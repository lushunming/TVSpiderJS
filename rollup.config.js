import {terser} from "@wwa/rollup-plugin-terser";
import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from "node:url";
/*
*
 * newvision.js
 *  kankan70.js
 *  tiantian.js
 *  xb6v.js
 *  mp4movie.js
 *  jianpian.js
 *  alipansou.js
 *  huya.js
 *  star.js
 *  nivod.js
 *  aiyingshi.js
 *  sp360.js
 *  mxanime.js
 *  cntv.js
 *  douban.js
 *  pan_search.js
 *  bilibili.js
 *  changzhang.js
 *  wogg.js
 *  nangua.js
 *  aliyunpanshare.js
 *  dubo.js
 *  haiwaikan.js
 *  dygangs.js
 *  cilixiong.js
 *  lovemovie.js
 *  gitcafe.js
 *  kuaikan
*/
/** @type {string[]} */
// ---cut---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let list = [];
const jsFiles = ['newvision.js', 'kankan70.js', 'tiantian.js', 'xb6v.js', 'mp4movie.js', 'jianpian.js', 'alipansou.js', 'huya.js', 'star.js', 'nivod.js', 'aiyingshi.js', 'sp360.js', 'mxanime.js', 'cntv.js', 'douban.js', 'pan_search.js', 'bilibili.js', 'changzhang.js', 'wogg.js', 'nangua.js', 'aliyunpanshare.js', 'dubo.js', 'haiwaikan.js', 'dygangs.js', 'cilixiong.js', 'lovemovie.js', 'gitcafe.js', 'kuaikan.js',];

const sourceFolder = path.join(__dirname, '/js');
const targetFolder_js = path.join(process.cwd(), '..', 'json/js');

function getConfig(sourceDir, targetDir) {
    // 读取源文件夹中的文件列表
    const files = fs.readdirSync(sourceDir);

    // 遍历文件列表
    files.forEach(file => {
        const sourcePath = path.join(sourceDir, file);
        const targetPath = path.join(targetDir, file);
        if (jsFiles.includes(file)) {
            list.push({
                input: sourcePath, output: {
                    file: targetPath, format: 'es', plugins: [terser(),]
                },

            });
        }
    });
}

// 调用函数，设置源文件夹和目标文件夹路径
getConfig(sourceFolder, targetFolder_js);

export default list;