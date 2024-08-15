
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// 拷贝js文件
function copyJSFiles(sourceDir, targetDir) {
  // 读取源文件夹中的文件列表
  const files = fs.readdirSync(sourceDir);

  // 遍历文件列表
  files.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);

    // 获取文件信息
    const stats = fs.statSync(sourcePath);

    // 如果是目录，则递归调用 copyJSFiles
    if (stats.isDirectory()) {
      fs.mkdirSync(targetPath);
      copyJSFiles(sourcePath, targetPath);
    }
    // 如果是以 .js 后缀的文件，则进行拷贝操作。如果不需要判断文件后缀，可以直接写else
    else if (path.extname(file) === '.js') {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`Copied: ${sourcePath} to ${targetPath}`);
    }
  });
}

// 调用函数，设置源文件夹和目标文件夹路径
const sourceFolder = path.join(__dirname, '/js');
const targetFolder_js = path.join(process.cwd(), '..',  'json/js');
// process.cwd()表示到根目录下，目标目录 加两次".."(代表../../ 返回项目根目录)
// 如果目标层级不变 可以直接写 path.join(process.cwd(), 'public/static/js');
copyJSFiles(sourceFolder, targetFolder_js);