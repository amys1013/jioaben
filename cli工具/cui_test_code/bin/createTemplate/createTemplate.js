import ejs from 'ejs'
import fs from "fs";

import { fileURLToPath } from 'url';
import path from "path";


export default (config) => {
  const __dirname = fileURLToPath(import.meta.url)

    const packageTemplate =   fs.readFileSync( path.resolve(__dirname, "../../template/package.ejs"))
    // 第一个参数，字符串，第二个参数;传入的变量控制
  const code = ejs.render(packageTemplate.toString(), {
      packageName: config.packageName,
      middleware:config.middleware
  });

  return code;
};