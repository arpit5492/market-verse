import getAllUsers from "../db/user-db.js";
import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

// app.get("/users", async (req, res) => {
//     const data = await getAllUsers();
//     res.json(data);
// });

app.post("/login", async (req, res) => {
    const {email, password} = req.body;
    // console.log(email, password);
    try{
        const users = await getAllUsers();
        const user = users.find(data => data.email === email && data.password === password);

        if (user) {
            res.json({
                success: true,
                fullName: user.full_name,
                userName: user.username
            })
        }
        else {
            res.json({
                success: false,
                message: "Invalid username or password"
            })
        }
    }
    catch(error){
        console.log(error);
    }
});

export default app;