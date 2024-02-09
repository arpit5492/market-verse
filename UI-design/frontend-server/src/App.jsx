import React from "react";
import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

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
            <Footer />
        </div>
    )
}

export default App;