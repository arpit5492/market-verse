import React, {useEffect, useState} from "react";
import Home from "./Home";

const API_URL = "http://localhost:4000/";

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
        
    // console.log(data);
    return (
        <div>
            {data.map(user => {
                return (
                    <Home 
                        key = {user.id}
                        name = {user.name}
                        brand_name = {user.brand_name}
                    />
                )
            })}
        </div>
    )
}

export default App;