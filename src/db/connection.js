import mongoose from "mongoose";

// const dbURL = "mongodb://127.0.0.1:27017/bookManagement"
const  dbURL ="mongodb://localhost:27017/bookManagement"

const options={
    useNewUrlParser: true, useUnifiedTopology: true,
}
mongoose.connect(dbURL,options).then(()=>{
    console.log("db connected...")
}).catch((e)=>{
    console.log("not connted",e)
})