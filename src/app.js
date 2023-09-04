import express from 'express'
import './db/connection.js'
import userRoute from './routes/userRouter.js'
import bookrouter from './routes/bookRouter.js'
import dotenv from 'dotenv'
dotenv.config()



const app = express()
app.use(express.json())
// app.use(bodyParser.urlencoded({ extended : true }));

app.use("/api/user",userRoute)
app.use("/api/book",bookrouter)

app.listen(8000,()=>{
    console.log("server listen at 8000")

})