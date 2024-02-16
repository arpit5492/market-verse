import React, {useState, useEffect} from "react";
import { useLocation} from "react-router-dom";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:4000/products";

function Home() {
    const location = useLocation();
    const msg = location.state && location.state.id ? `Welcome ${location.state.id} to the Home Page` : "Guest Login";

    const [data, setData] = useState([]);
    const getProd = () => {
        fetch(API_URL)
         .then(res => res.json())
         .then(json => setData(json))
    }

    useEffect(() => {
        getProd();
    }, []);

    return (
        <div className="">
            <p className="text-2xl font-bold">{msg}</p>
            <div className="mt-24 flex">
            {data.map(prod => {
                return (
                    <div className="mb-10 mr-5">
                        <Link>
                            <img className="size-32" src={prod.image_url} alt={prod.product_name} />
                            <p className="text-2xl">{prod.product_name}</p>
                            <p className="text-l text-gray-700 font-serif font-bold italic">Brand: {prod.brand_name}</p>
                            <p className="text-xl font-semibold text-gray-500">${prod.price}</p>        
                        </Link>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Home;