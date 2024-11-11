const express = require('express')
const cors = require('cors')
const router = require("./routers")
const { urlencoded } = require('body-parser')
const app = express()
const port = 8000

app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended : false}))

app.use(router)



app.listen(port, () => {
  console.log(`Example app listening on  http://localhost:${port}`)
})