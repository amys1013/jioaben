import { fetchData, fetchData1, fetchData2 } from ".";

// fetchData不会等到测试用例结束。---- 遇到回调式的异步函数写法，如何写？？  done是函数，调用的时候，才是测试用例执行结束的。
//vue里面的动画也是用的这样一个机制
test("测试fetchData请求返回结果为{success: true}", (done) => {
  fetchData((data) => {
    expect(data).toEqual({ success: true });
  });
  done();
});

// 2. 返回的promise写法，不需要done了，注意要return,否则
test("测试fetchData1请求返回结果为{success: true}", () => {
  return fetchData1().then((response) => {
    expect(response.data).toEqual({ success: true });
  });
});

// test("测试fetchData2请求返回结果404,并且必须进入catch回调函数", () => {
//   expect.assertions(1); // 不仅是返回的字符串里面包含404，而且必须下面的expect至少执行1次。
//   return fetchData2().catch((e) => {
//     expect(e.toString().indexOf("404") > -1).toBe(true);
//   });
// });

// 2.1 返回的promise写法

test("返回为一个promise,测试成功返回的对象内容包含该子部分", () => {
  return expect(fetchData1()).resolves.toMatchObject({
    data: {
      success: true,
    },
  });
});

// test("测试返回的promise抛出异常？", () => {
//   return expect(fetchData1()).resolves.toThrow();
// });

// 2.2 返回的promise写法 async await写法
test("返回为一个promise,async await写法", async () => {
  await expect(fetchData1()).resolves.toMatchObject({
    data: {
      success: true,
    },
  });
});

// 2.3 返回的promise写法 async await写法
test("2.3返回为一个promise,async await写法", async () => {
  const res = await fetchData1();
  expect(res.data).toEqual({ success: true });
});
// test("2.3返回为一个promise,async await写法", async () => {
    // expect.assertions(1)
//   try {
//     await fetchData1();
//   } catch (e) {
//     expect(e.toString()).toEqual("Error: Request failed with status code 404");
//   }
// });
