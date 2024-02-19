import React from "react";
import NavBar from "./components/NavBar.jsx";
// import Footer from "./components/Footer.jsx";
import Login from "./pages/Login.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import ProdDetails from "./pages/Prod-Details.jsx";

function App(){
    return (
        <div>
            <NavBar />
                <Routes>
                    <Route path="/" element={
                        <Home />
                    } />
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/product/:id" element={<ProdDetails />} />
                </Routes>
        </div>
    )
}

export default App;