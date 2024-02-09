import db from "../config/index.js";

const getAllUsers = async() => {
    const result = await db.query("SELECT full_name, email, username FROM users");
    return result.rows;
}

export default getAllUsers;