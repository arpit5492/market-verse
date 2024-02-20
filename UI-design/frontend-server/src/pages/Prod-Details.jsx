import React, {useState, useEffect, useCallback} from "react";
import { useParams } from "react-router-dom";

function ProdDetails() {
    const [prodDet, setProdDet] = useState({});
    const {id} = useParams();
    const getProd = useCallback(() => {
        fetch(`http://localhost:4000/product/?id=${id}`)
         .then(res => res.json())
         .then(newData => setProdDet(newData))
    }, [id]);

    useEffect(() => {
        getProd();
    }, [getProd]);
    
    return (
        <div className="py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4 shadow-2xl">
                    <div className="md:flex-1 px-4">
                        <div className="size-100 rounded-lg mb-4">
                            <img className="w-full h-full object-cover" src={prodDet.image_url} alt={prodDet.product_name}/>
                        </div>
                        <div className="flex -mx-2 mb-4">
                            <div className="w-1/2 px-2">
                                <button className="w-full text-black py-2 px-4 rounded-full font-bold bg-new-green-50 hover:bg-new-green-100">Add to Cart</button>
                            </div>
                            <div className="w-1/2 px-2">
                                <button className="w-full text-black py-2 px-4 rounded-full font-bold bg-new-green-50 hover:bg-new-green-100">Add to Wishlist</button>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex-1 px-4 mt-20">
                        <p className="text-2xl font-bold text-gray-800">{prodDet.product_name}</p>
                        <p className="mb-4 text-md">
                            <span className="font-bold">Brand: </span>
                            <span className="font-semibold text-gray-500">{prodDet.brand_name}</span> 
                        </p>
                        <div className="flex mb-4">
                            <div className="mr-4 text-xl">
                                <span className="font-bold">Price: </span>
                                <span className="text-gray-500 font-semibold">${prodDet.price}</span>
                            </div>
                            <div className="text-xl">
                                <span class="font-bold">Availability: </span>
                                <span class="text-gray-500 font-semibold">In Stock</span>
                            </div>
                        </div>
                        <div>
                            <span class="font-bold text-xl">Product Description:</span>
                            <p class="text-gray-500 font-semibold text-xl mt-2">
                                {prodDet.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}   

export default ProdDetails;