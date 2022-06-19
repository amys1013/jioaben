#!/usr/bin/env node
//告诉系统，这脚本用什么来执行

// 创建入口文件
import fs from "fs";

// 命令行输入
import choice from "./choice/index.js";

import { execa } from "execa";

// 获取命令行输入内容
import inputConfig from "./inputConfig.js";

import createIndex from "./createTemplate/createIndex.js";
import createTemplate from "./createTemplate/createTemplate.js";
// 命令行/gui 输入
// 处理过程
// 输出


const indexConfig = inputConfig(choice);

//1.创建文件夹  fs
fs.mkdirSync(getRootPath());

//2.创建入口文件
fs.writeFileSync(
  `${getRootPath()}/index.js`,
  createIndex(indexConfig.middleware)
);

//3.创建package.json
fs.writeFileSync(`${getRootPath()}/package.json`, createTemplate(indexConfig));

//4.安装依赖
execa("yarn", {
  cwd: getRootPath(),
  // 会在终端显示，当前子进程会继承父进程
  studio: [2, 2, 2],
});

// 获取根路径
function getRootPath() {
  return "./hei";
}


export default {}
