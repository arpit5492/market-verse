import React, {useState, useEffect} from "react";
import Products from "../components/Products";

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
                    <Products
                        key = {prod.product_id}
                        image_url = {prod.image_url}
                        price = {prod.price}
                        product_name = {prod.product_name}
                        brand_name = {prod.brand_name}
                    />
                )
            })}
        </div>
    )
}

export default Home;