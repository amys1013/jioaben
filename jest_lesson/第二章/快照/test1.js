import { generateConfig } from "./index";

// test("测试generateConfig", () => {
//   expect(generateConfig()).toEqual({
//     server: "http://localhost",
//     port: 8080,
//   });
// });

// 1. 使用场景----【配置文件】---当配置文件被修改的时候，这个测试用例就匹配不了了
// 按【w】进入模式，然后可以选择【u】模式进行更新快照；
test("测试generateConfig 1", () => {
    // 测试结果和快照相等
    expect(generateConfig()).toMatchSnapshot();
  });
