import express from "express";
import morgan from "morgan";
import cors from "cors";
const port = 3000;

const data = "Arpit Mallick";

const app = express();
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
    res.send(data);
});

//Listening for requests
app.listen(port, () => {
    console.log(`Backend server is running on port: http://localhost:${port}/`);
});