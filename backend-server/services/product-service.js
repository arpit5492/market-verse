import getAllProducts from "../db/product-db.js";
import express from "express";

const app = express();

// Getting all the products
app.get("/products", async(req, res) => {
    const products = await getAllProducts();
    res.json(products);
});

//Getting a  single product


export default app;