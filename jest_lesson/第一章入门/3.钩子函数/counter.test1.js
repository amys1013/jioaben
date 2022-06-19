import { Counter } from "./Counter";
// 相当于 dexcribe('Counter的测试代码',()=>{})   // 相当于最外成有一个这个东西
// descripe  理解成分组
let counter = null;
// 在所有执行测试实例之前的操作进入beforeAll
beforeAll(() => {
  console.log("beforeAll");
  counter = new Counter();
});

// 所有执行用例执行之后
afterAll(() => {
  console.log("afterAll");
  counter = new Counter();
});

// 每一个测试用例执行之前
beforeEach(() => {
  console.log("进入了最外层的beforeEach");
  counter = new Counter();
});

afterEach(() => {
  console.log("afterEach");
});
/**
 * 若没有限制，第一个addOne和第二个inOne的测试用例修改的是同一个number
 */

// test("测试counter 中的minOne函数", () => {
//   console.log("counter: ", counter);
//   counter.minOne();

//   expect(counter.number).toBe(-1);
// });

// descripe  理解成分组
describe("关于加的", () => {
  beforeEach(() => {
    console.log("进入了describe 的beforeEach钩子函数");
  });
  test.only("测试counter 中的addOne函数", () => {
    counter.addOne();
    expect(counter.number).toBe(1);
  });

  test("测试counter 中的addTwo函数", () => {
    counter.addTwo();
    expect(counter.number).toBe(2);
  });
});

describe("关于减的", () => {
  test("测试counter 中的minOne函数", () => {
    console.log("counter: ", counter);
    counter.minOne();

    expect(counter.number).toBe(-1);
  });

  test("测试counter 中的minTwo函数", () => {
    counter.minTwo();
    expect(counter.number).toBe(-2);
  });
});
