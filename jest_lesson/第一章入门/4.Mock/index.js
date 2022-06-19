// 下载插件  jest  --以前npm run test
// 可以标记每个测试用例的通过与否，还可以debug

import axios from "axios";

export const runCb = (callCb) => {
  callCb();
};

export const createObject = (mouClass) => {
  return new mouClass();
};

class mouClass {
  constructor() {}
}

// 1. 返回结果数据；
export const fetchData = () => {
  return axios
    .get("http://www.dell-lee.com/react/api/demo.json")
    .then((response) => {
      return response.data;
    });
};


/**
 * {
 *   data:`(function(){return '123'}) ()`
 * }
 * @returns 
 */
export const fetchDataString = () => {
  return axios.get("/").then((res) => res.data);
};
