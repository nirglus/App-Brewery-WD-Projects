//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));
let userAuthorised = false;

const checkPass = (req, res, next) =>{
    if(req.body["password"] == "ILoveProgramming"){
        userAuthorised = true;
    }
    next();
}
app.use(checkPass);

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) =>{
    console.log(req.body);
})
app.listen(port , () =>{
    console.log(`Server is running on port ${port}`);
});