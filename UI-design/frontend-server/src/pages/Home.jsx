import React from "react";
import { useLocation} from "react-router-dom";

function Home({data}) {
    const location = useLocation();
    const msg = location.state && location.state.id ? `Welcome ${location.state.id} to the Home Page` : "Welcome to the home page";
    return (
        <div>
            <p className="text-2xl font-bold">{msg}</p>
        </div>
    )
}

export default Home;