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
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">

                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 shadow-2xl px-6 py-6">
                    {data.map((product) => (
                        <div key={product.product_id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-50">
                                <img
                                    src={product.image_url}
                                    alt={product.product_name}
                                    className="size-36"
                                />
                            </div>
                            <div className="mt-4 mr-4 ml-4">
                                <div>
                                    <h3 className="text-md text-gray-900 font-bold">
                                        <Link to={`/product/${product.product_id}`}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                                {product.product_name}
                                        </Link>
                                    </h3>
                                    <p className="mt-1 text-md text-gray-700">${product.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;