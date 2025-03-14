import express from 'express';
import path from "path";

//kirish 
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json())

//sessions
//views
app.set("view", path.join(__dirname, "views"))
app.set("view engine", "ejs")

//routers
export default app;