//npm i jest之后，jest就给你配置了一些配置
// npx jest --init 然后就会出现jest.config.js文件

/**
 * jest帮忙进行：
 * 1.单元测试
 *      （理解成多个模块测试）---则测试的东西要是一个模块，改造成模块，以备jest测试
 * 2.集成测试
 * 
 */

const math = require("./math.js");

const { add, minus } = math;

test("测试加法 2 + 3 ", () => {
  expect(add(2, 3)).toBe(5);
});


test("测试减法 3 - 3 ", () => {
    expect(minus(3, 3)).toBe(0);
  });
