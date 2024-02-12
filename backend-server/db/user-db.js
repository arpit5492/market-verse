import db from "../config/index.js";

// db query for getting all the users details
const getAllUsers = async() => {
    const result = await db.query("SELECT * FROM users");
    return result.rows;
}

// db query to create a new user
const createUser = async (user) => {
    const {fullName, email, username, password} = user;
    try{
        const result = await db.query(
            "INSERT INTO users (full_name, email, username, password) VALUES ($1, $2, $3, $4) RETURNING *",
            [fullName, email, username, password]
        );
        return result.rows[0];
    }
    catch(error){
        console.log(error);
    }
}

export {getAllUsers, createUser};