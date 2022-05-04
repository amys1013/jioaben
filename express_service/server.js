const express = require('express')
const cors = require('cors')

// const router = require('./routers/api/users')
// const router2 = require('./routers/api/test')
const loginRouter = require('./routers/api/login')

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(__dirname+'/public'))
app.use(cors())

// app.use(router)
// app.use(router2)

app.use(loginRouter)


app.listen(8080,(err)=>{
	console.log("【Example app working...】");
})