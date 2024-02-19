import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:4000/products";

function Home() {

    const [data, setData] = useState([]);
    const getProd = () => {
        fetch(API_URL)
         .then(res => res.json())
         .then(newData => setData(newData))
    }

    useEffect(() => {
        getProd();
    }, []);

    return (
        <div className="mt-24 flex w-full">
            {data.map(prod => {
                return (
                    <React.Fragment key={prod.product_id}>
                        <div className="mb-10 mr-10 columns-xl">
                            <Link to={`/product/${prod.product_id}`}>
                                <img className="size-28" src={prod.image_url} alt={prod.product_name} />
                                <p className="text-2xl md:text-base">{prod.product_name}</p>
                                <p className="text-l md:text-sm text-gray-700 font-serif font-bold italic">Brand: {prod.brand_name}</p>
                                <p className="text-xl md:text-sm font-semibold text-gray-500">${prod.price}</p>        
                            </Link>
                        </div>
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default Home;