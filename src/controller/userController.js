import UserRegistarion from "../models/Register.js"
import  jwt from "jsonwebtoken"




class UserController {

    static UserRegister = async (req, res) => {
        const{name,email,phone,password,confirm_password}= req.body
    //    console.log("req.body", req.body)
        if (name&&email&&phone&&password&&confirm_password) {
            const User = await UserRegistarion.findOne({ email: email })
            if (!User) {
                if (password === confirm_password) {
                    try {
                        const registerUserDoc = new UserRegistarion({
                            name: name,
                            phone: phone,
                            email: email,
                            password: password
                        })
                      
                        await registerUserDoc.save()
                       
                       try {
                        //    const User_save = await UserRegistarion.findOne({email:email})
                        //    let jwtSecretKey = process.env.JWT_SECRET_KEY;

                        const user_save =await UserRegistarion.findOne({email:email});
                        // console.log("user",user_save)
                        //Generate JWT token
                        const JWT_SECRET_KEY ="kjkjskdjkjkahhiousda"
                       
                        let secretKey = JWT_SECRET_KEY;
                           //    console.log("jwt==>",secretKey)
                       
                        const token = jwt.sign({userID:user_save._id}, secretKey,{expiresIn:'5d'});

                           
                           
                        //    console.log("jwt==>",jwtSecretKey)
                        //   const token = jwt.sign( ({userID:User_save._id}),jwtSecretKey,{expiresIn:'5d'});
                        
                           res.status(201).send({"status":"success","message":"User Register Successfully..","token":token})
                        
                       } catch (error) {
                        console.log("ress", error)
                       }
                    } catch (error) {
                        res.status(400).send({"status":"fail","message":"User Not Register.."})
                    }
                } else {  res.send({"message":"Password and confirm password doesn't match"}) }


            }else{
                res.send({"message":"Email Already Exits"})
            }
        }else{
                         res.send({"message":"All fields required"})

        }
    }

    static UserLogin =async(req,res)=>{
        const {email,password}=req.body
        // console.log(email,password)
        const Userlog = await UserRegistarion.findOne({email:email})
            // console.log(Userlog)
        if(email&& password){
            if(Userlog){
                if(Userlog.password==password){

                    const JWT_SECRET_KEY ="kjkjskdjkjkahhiousda"
                       
                        let secretKey = JWT_SECRET_KEY;
                    const token = jwt.sign({userID:Userlog._id}, secretKey,{expiresIn:'5d'});
                  

                    res.status(201).send({"status":"success","message":"User Login Successfully..",token})
                }else{
                    res.status(400).send({"status":"fail","message":"Your password or email not valid.."})
                }

            }else{
                res.status(400).send({"status":"fail","message":"User Not Register.."})
            }
        }else{
            res.status(400).send({"status":"fail","message":"All field required.."})
        }
    }
}
export default UserController;