import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Home({data}) {
    const location = useLocation();
    return (
        <div>
            <p className="text-2xl">Welcome to the Home Page</p>
        </div>
    )
}

export default Home;