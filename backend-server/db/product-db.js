import db from "../config/index.js";

const getAllProducts = async() => {
    const result = await db.query("SELECT * FROM products");
    return result.rows;
}

export default getAllProducts;