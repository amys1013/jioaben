let express = require("express");
const userMenus = require('../mockData/getMenuByRole')
let router = express.Router();

const token = "dsfhgsdiyfgsdjify";
/**
 * 账号登录
 */

router.post("/accountLogin", (req, res) => {
  console.log("accountLogin");
  res.setHeader("Access-Control-Allow-Origin", "*");
  //响应头
  res.setHeader("Access-Control-Allow-Headers", "*");

  const data = {
    code: 0,
    // data是真正的数据，用户的id是，fanhui token，则用户 发送其他的请求时，需要携带token，携带的token进行身份验证使用
    data: {
      id: 1,
      name: "maomin",
      token: token,
    },
  };
  //将数据转化为字符串
  res.send(JSON.stringify(data));
});

/**
 * 根据用户id查找用户信息---query参数   
 */
router.get("/getUserInfoById", (req, res) => {
  const { id } = req.query;
  console.log("id: ", id);
  const userInfo = {
    id: 1,
    name: "mao",
    realName: "MAOMIN",
    cellphone: "11111111111",
    createAt: "2022-20-20",
    updateAt: "2022-10-11",
    role: {
      // 权限管理相关信息
      id: 1,
      name: "超级管理员",
      intro: "所有权限",
      createAt: "2021-20-20",
      updateAt: "2021-10-11",
    },
    department: {
      //部门信息
      id: 1,
      name: "总裁办",
      createAt: "2021-20-20",
      updateAt: "2021-10-11",
      leader: "mao",
    },
  };
  const data = {
    code: 0,
    // data是真正的数据，用户的id是，fanhui token，则用户 发送其他的请求时，需要携带token，携带的token进行身份验证使用
    data: userInfo,
  };
  res.send(JSON.stringify(data));
});

/**
 * 根据用户权限返回左测的菜单---params参数
 */

router.get("/role/:id/menu", (req, res) => {
  const { id } = req.query;
  console.log("role");
  const userInfo = {
    id: 1,
    name: "mao",
    realName: "MAOMIN",
    cellphone: "11111111111",
    createAt: "2022-20-20",
    updateAt: "2022-10-11",
    role: {
      // 权限管理相关信息
      id: 1,
      name: "超级管理员",
      intro: "所有权限",
      createAt: "2021-20-20",
      updateAt: "2021-10-11",
    },
    department: {
      //部门信息
      id: 1,
      name: "总裁办",
      createAt: "2021-20-20",
      updateAt: "2021-10-11",
      leader: "mao",
    },
  };
  const data = {
    code: 0,
    // data是真正的数据，用户的id是，fanhui token，则用户 发送其他的请求时，需要携带token，携带的token进行身份验证使用
    data: userMenus,
  };
  res.send(JSON.stringify(data));
});
module.exports = router;
