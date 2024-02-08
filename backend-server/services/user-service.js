import getAllUsers from "../db/user-db.js";
import express from "express";

const app = express();

app.get("/users", async (req, res) => {
    const data = await getAllUsers();
    res.json(data);
});

export default app;