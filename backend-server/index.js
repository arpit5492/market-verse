import express from "express";
import morgan from "morgan";
const port = 3000;

const str = "<h1>Hello World!!</h1>";

const app = express();
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send(str);
});

//Listening for requests
app.listen(port, () => {
    console.log(`Backend server is running on port: http://localhost:${port}/`);
});