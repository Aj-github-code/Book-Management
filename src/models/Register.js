import mongoose from "mongoose";


const Register = mongoose.Schema({
name:{
    type:String,
    required:true
},
phone:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
}


})

const UserRegistarion = mongoose.model("UserRegistraion", Register)

export default UserRegistarion