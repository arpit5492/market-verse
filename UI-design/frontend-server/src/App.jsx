import React from "react";
// import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar.jsx";
// import Footer from "./components/Footer.jsx";
import Login from "./pages/Login.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";

// const API_URL = "http://localhost:4000/users";

function App(){
    // const [data, setData] = useState([]);
    // const getUser = () => {
    //     fetch(API_URL)
    //      .then(res => res.json())
    //      .then(json => setData(json))
    // }

    // useEffect(() => {
    //     getUser();
    // }, []);
        
    // console.log(data);
    return (
        <div>
            <NavBar />
                <Routes>
                    <Route path="/" element={
                        <Home />
                    } />
                    <Route path="/login" element={<Login />} />
                </Routes>
        </div>
    )
}

export default App;