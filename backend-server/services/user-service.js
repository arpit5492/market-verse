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
    console.log(email, password);
});

export default app;