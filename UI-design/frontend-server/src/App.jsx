import React, {useEffect, useState} from "react";
import Home from "./components/Home.jsx";

const API_URL = "http://localhost:4000/users";

function App(){
    const [data, setData] = useState([]);
    const getUser = () => {
        fetch(API_URL)
         .then(res => res.json())
         .then(json => setData(json))
    }

    useEffect(() => {
        getUser();
    }, []);
        
    console.log(data);
    return (
        <div>
            {data.map(user => {
                return (
                    <Home 
                        key = {user.user_id}
                        full_name = {user.full_name}
                        email = {user.email}
                        username = {user.username}
                        password = {user.password}
                    />
                )
            })}
        </div>
    )
}

export default App;