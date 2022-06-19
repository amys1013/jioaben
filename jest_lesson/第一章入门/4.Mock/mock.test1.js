import { runCb, createObject, fetchData } from "./index";
import axios from "axios";
jest.mock("axios");

/**
 * expect:  【expect语句称为断言】
 */
// mock 的作用
// 1. 想要捕获函数和返回结果，以及this和调用顺序；
// 2. 可以让我们自由设置返回结果；
// 3. 改变函数的内部实现；

// test("测试runCallBack", () => {
//   const func = () => {
//     return "hello";
//   };
//   expect(runCb(func)).toBe("hello");
// });

// 1.生成一个MOCK函数，捕获函数的调用；--- 如果是普通的函数，无法被捕获
test("测试回调函数", () => {
  // 1.创建一个函数  --- 测试该回调函数是否执行
  const func = jest.fn();
  // 4.func 模拟固定返回值--第一次返回结果
  // func.mockReturnValueOnce('aa');
  // func.mockReturnValue("bb");
  
  // 4.1 mock函数是模拟参数里面函数的实现；  --- 【对应mockImplementationOnce】
  func.mockImplementation(() => { 
    // 相比mockReturnValueOnce，除了返回结果，里面还可以写其他逻辑【不同】
    return 'bb'
  })

  // func.mockImplementation(() => {
  //   return this     //下面相对应修改为： expect(func.mock.results[0].value).toBeUndefined();
  // })
  // 如果返回this还有的写法：func.mockReturnThis() // 用的不多


  runCb(func);
  runCb(func);
  // 2.测试函数在某个地方被执行
  expect(func).toBeCalled();
  // 该mock函数上面会有mock属性，calls每次调用的参数
  console.log(func.mock);

  // 3.判断func函数被调用了两次；
  expect(func.mock.calls.length).toBe(2);
  // expect(func.mock.results[0].value).toBe("bb");
});

test("测试 createObject", () => {
  const func = jest.fn(); // classs调用次数加参数；
  createObject(func);
  console.log("func: ", func.mock); // instances: [ mockConstructor {} ],
});

// 前端一般只确认接口发送成功了，不需要确认返回的数据，返回的数据是后端确认的。
// 不希望发送真正的axios请求；
test("fetchData", async () => {
  // 不会真实的访问接口
  // 模拟多次
  axios.get.mockResolvedValueOnce({ data: "hello" });
  axios.get.mockResolvedValueOnce({ data: "world" });
  await fetchData().then((data) => {
    expect(data).toBe("hello");
  });
  await fetchData().then((data) => {
    expect(data).toBe("world");
  });
});
