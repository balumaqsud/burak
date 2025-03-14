import mongoose from "mongoose";
import app from "./app";
import dotenv from "dotenv";
dotenv.config()

//env variables
const PORT = process.env.PORT ?? 3003;
const MONGO_URL = process.env.MONGO_URL;

//mongo connection with mongoose
mongoose.connect(MONGO_URL as string, {}).then((data) => {
    console.log("mongo successfully connected")
    app.listen(PORT, ()=> {
        console.log(`app is running in port ${PORT}`)
    })

}).catch((err) => {
    console.log("mongo conn went wrong", err)
});

//architectual patters: MVC, DI, frontendga -> MVP
//MVC - MODEL VIEW CONTROLLER
//design paterns: middlewares, decorators 
