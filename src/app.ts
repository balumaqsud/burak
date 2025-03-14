import express from 'express';
import path from "path";
const app = express();

//kirish 
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json())

//sessions
//views
app.set("view", path.join(__dirname, "views"))
app.set("view engine", "ejs")

//routers
export default app;