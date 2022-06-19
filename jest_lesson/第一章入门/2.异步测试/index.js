import axios from "axios";
/**
 * 对异步要进行模拟，不然会真正发送axios请求
 * 不然会setTimer会真正等到一定时间才结束；
 * 
 */

// 1. 返回结果数据；
export const fetchData = (fn) => {
  axios.get("http://www.dell-lee.com/react/api/demo.json").then((response) => {
    fn(response.data);
  });
};

// 2.返回promise

export const fetchData1 = (fn) => {
  return axios.get("http://www.dell-lee.com/react/api/demo.json");
};

export const fetchData2 = (fn) => {
  return axios.get("http://wwww.dell-lee.com/react/api/demo1.json");
};

