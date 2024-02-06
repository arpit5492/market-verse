import React, {useEffect, useState} from "react";
import axios from "axios";

const API_URL = "http://localhost:4000/";

function App(){
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(API_URL)
            .then((res) => {
                // console.log(res.data);
                setData(res.data);
            })
    })

    // console.log(data);
    return (
        <div>
            <h1>Hello {data}</h1>
        </div>
    )
}

export default App;