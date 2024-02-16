import getAllProducts from "../db/product-db.js";
import express from "express";

const app = express();

app.get("/products", async(req, res) => {
    const products = await getAllProducts();
    res.json(products);
});

export default app;