import React from "react";
import { Link } from "react-router-dom";

function Products(props) {
    return (
        <div className="mb-10 mr-5">
            <Link>
                <img className="size-28" src={props.image_url} alt={props.product_name} />
                <p className="text-2xl md:text-base">{props.product_name}</p>
                <p className="text-l md:text-sm text-gray-700 font-serif font-bold italic">Brand: {props.brand_name}</p>
                <p className="text-xl md:text-sm font-semibold text-gray-500">${props.price}</p>        
            </Link>
        </div>
    )
}

export default Products;