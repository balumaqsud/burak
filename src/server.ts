import dotenv from "dotenv";
import mongoose from "mongoose"
dotenv.config()

mongoose.connect(process.env.MONGO_URL as string, {}).then((data)=> {
    console.log('mongo success')
}).catch((err)=> {
    console.log("error with mongosb", err)
})




//architectual patters: MVC, DI, frontendga -> MVP

//MVC - MODEL VIEW CONTROLLER

//design paterns: middlewares, decorators 
