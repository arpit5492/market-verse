import express from "express";
import morgan from "morgan";
import cors from "cors";
import data from "./db.js";
const port = 4000;

const app = express();
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
    res.json(data);
});

//Listening for requests
app.listen(port, () => {
    console.log(`Backend server is running on port: http://localhost:${port}/`);
});