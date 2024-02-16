import {getAllUsers, createUser} from "../db/user-db.js"
import express from "express";
import bodyParser from "body-parser";
import db from "../config/index.js";

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

// Post route for login page
app.post("/login", async (req, res) => {
    // console.log(req.body);
    const {email, password} = req.body;
    // console.log(email, password);
    try{
        const users = await getAllUsers();
        const user = users.find(data => data.email === email && data.password === password);

        if(email === "" || password === ""){
            res.json({
                message: "Empty string"
            });
        }

        else if (user) {
            res.json({
                success: true,
                fullName: user.full_name,
                userName: user.username
            });
        }

        else {
            res.json({
                success: false,
                message: "Invalid email or password"
            })
        }
    }
    catch(error){
        console.log(error);
    }
});

// Post route for creating an account
app.post("/signUp", async(req, res) => {
    const data = req.body;
    // console.log(data);
    try{
        if(data.password === data.confPass){
            const newUser = await createUser({
                fullName: data.fullName,
                email: data.email,
                username: data.username,
                password: data.password
            });
            // console.log(newUser);
            res.json({
                fullName: newUser.full_name,
                userName: newUser.username,
                success: true
            });
        }
        else {
            res.json({
                success: false
            })
        }
    }
    catch(error){
        res.json({
            err: "Already exists"
        });
    }
});

export default app;