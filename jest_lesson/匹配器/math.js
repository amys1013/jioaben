// jest做自动化前端测试的话，要将函数作为模块导入出去

export function add(a, b) {
  return a + b;
}

export function minus(a, b) {
  return a - b;
}


// 由于jest使用，则需要模块输出；
// 但是在html中会进行报错
// 真的项目中本来就是以模块化的形式进行编码；
/**【commomjs】
 * try{
 * module.exports = {
 *      add,
 *      minus
 *  };
 * }catch(e){
 * heml中尽心报错，会将异常吃掉
 * }
 * 
 */


/**【esmodule写法】
 * 一般是export function add(){}的方式    然后引入import {add} from './math.js'
 * 但是jest在node环境下不识别这种语法。
 * 【解决】
 * 使用babel工具：jest和babel结合使用  (1):npm i @babel/core@7.4.5 @babel/preset-env@7.4.5 -D
 */
// module.exports = {
//   add,
//   minus
// };
