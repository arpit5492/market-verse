import express from "express";
import morgan from "morgan";
import cors from "cors";
import userDbRoutes from "./services/user-service.js";
import prodDBRoutes from "./services/product-service.js";
const port = 4000;

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(userDbRoutes);
app.use(prodDBRoutes);

//Listening for requests
app.listen(port, () => {
    console.log(`Backend server is running on port: http://localhost:${port}/`);
});