// toBe就是一个匹配器
// npm run test就会运行目录下所有的.test.js结尾的文件

// "scripts": {
//     "test": "jest --watchAll",  监视所有文件的变化
//   },

// 1. toBe匹配器   object.is ===

test("测试加法1 ", () => {
  expect(10).toBe(10);
});

// 2.toEqual匹配器   --- 检查内容相同

test("测试对象内容相等", () => {
  const a = { name: "mao" };
  expect(a).toEqual({ name: "mao" });
});

// 3.其他匹配器null undefined

// test("测试对象内容相等toBeNull", () => {
//   const a = null;  // undefined   toBeUndefined  toBeDefined
//   expect(a).toBeNull();
// });

// 4.布尔值匹配器  toBeTruthy()   toBeFalsy()
test("测试对象布尔值", () => {
  const a = true; // 1
  expect(a).toBeTruthy();
});

// test("测试not匹配器", () => {
//     const a = 0;
//     expect(a).not.toBeTruthy();
// });

// 5.数字相关的匹配器  toBeGreaterThan  toBeGreaterThanOrEqual  toBeLessThan toBeLessThanOrEqual
// test('toBeGreaterThan匹配器', () => {
//     const a = 10;
//     expect(a).toBeGreaterThan(3)
//  })

// test('toBeCloseTo匹配器', () => {
//     const a = 0.1;
//     const b = 0.2
//     expect(a+b).toBeCloseTo(0.3)
//  })

// 6.和字符串相关的匹配器  toMatch

// test('toMatch', () => {
//     const a = 'http://loclahost:8080';
//     expect(a).toMatch('loclahost')
// })

// 7.和数组相关的匹配器 toContain
//Array Set

test("toContain", () => {
  const a = [1, 2, 3];
  expect(a).toContain(2);
});

// 8. 异常 toThrow   not.toThrow   toThrow('this')
const throwNewErrorFunc = () => {
  throw new Error("this is a new error");
};
test("toThrow", () => {
  expect(throwNewErrorFunc).toThrow();
});
