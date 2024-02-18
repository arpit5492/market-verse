import getAllProducts from "../db/product-db.js";
import express from "express";

const app = express();

// Getting all the products
app.get("/products", async (req, res) => {
    const products = await getAllProducts();
    res.json(products);
});

//Getting a single product
app.get("/singleProd/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const products = await getAllProducts();
    const singleProd = products.find((prod) => prod.product_id === id);
    res.json(singleProd);
});

export default app;