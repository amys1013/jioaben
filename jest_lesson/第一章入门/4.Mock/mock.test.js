import { fetchDataString } from "./index.js";
import axios from "axios";
jest.mock("axios");

test("fetchDataString", () => {
  axios.get.mockResolvedValue({ data: `(function(){return '123'}) ()` });
  return fetchDataString().then((data) => {
      console.log('data: ', data);
    // 返回的是一个立即执行函数的字符串
    expect(eval(data)).toEqual("123");
    console.log('eval(data): ', eval(data));
  });
});
