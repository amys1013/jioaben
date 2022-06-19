import ejs from "ejs";
import fs from "fs";
import { fileURLToPath } from 'url';
import path from "path";

export default (config) => {
  const __dirname = fileURLToPath(import.meta.url)

  // esm中没有了__firname,,使用fileURLToPath和import.meta.url是当前js的绝对路径
  const indexTemplate = fs.readFileSync(
    path.resolve(__dirname, "../../template/index.ejs")
    
  );
  // 第一个参数，字符串，第二个参数;传入的变量控制
  const code = ejs.render(indexTemplate.toString(), {
    express: config.express,
    router: config.router,
  });

  return code;
};
