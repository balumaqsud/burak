import dotenv from "dotenv";
import mongoose from "mongoose"
import app from "./app"
dotenv.config()

mongoose.connect(process.env.MONGO_URL as string, {}).then((data)=> {
    console.log('mongo successfully connected')
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, () => {
        console.log(`app is running in port: ${PORT} `)
    })
}).catch((err)=> {
    console.log("error with mongosb", err)
})




//architectual patters: MVC, DI, frontendga -> MVP

//MVC - MODEL VIEW CONTROLLER

//design paterns: middlewares, decorators 
