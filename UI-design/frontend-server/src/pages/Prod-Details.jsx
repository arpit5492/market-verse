import React, {useState, useEffect} from "react";

const API_URL = "http://localhost:4000/products";

function ProdDetails() {
    const [prodDet, setProdDet] = useState([]);
    const getProd = () => {
        fetch(API_URL)
         .then(res => res.json())
         .then(newData => setProdDet(newData))
    }

    useEffect(() => {
        getProd();
    }, []);
    
    return (
        <div>
            {prodDet.map(oneProd => {
                return (
                    <div className="mt-24 flex w-full">
                        <img className="size-28" src={oneProd.image_url} alt={oneProd.product_name} />
                        <p className="font-bold text-2xl md:text-base">{oneProd.product_name}</p>
                        <p className="ml-5 font-semibold font-serif">{oneProd.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ProdDetails;