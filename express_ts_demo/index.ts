import express, { Express, Router, Request, Response } from 'express';
/**
 * 这里是用express开启一个服务
 * 然后本地用postman 进行http://localhost:8888/api/list 的GET请求后，这里就要访问该网站（该url是不需要携带cookie和鉴权的，则可以直接使用）
 */
import axios from 'axios'
const app: Express = express()
// 【跨域解决方式】
// 1.前端jsonp
// 2.后端设置
// 3.前端设置代理
app.use('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
})


app.use('/api', router)
const router: Router = express.Router()

router.get('/list', async (req: Request, res: Response) => {
  // const result = await axios.get('https://news.sina.com.cn/project/fymap/ncp2020_feiyan_procity_loc_data.jsonp?callback=callbacklocation')
  const result = 'maomin '

  res.json({
    data: result
  })
  console.log('result: ', result);
})

app.listen(8888, () => {
  console.log('server running 8888...');

})