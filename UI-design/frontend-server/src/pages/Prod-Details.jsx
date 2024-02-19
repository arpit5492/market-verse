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
        <div>
            <div className="mt-24 flex w-full">
                <img className="size-28" src={prodDet.image_url} alt={prodDet.product_name} />
                <p className="font-bold text-2xl md:text-base">{prodDet.product_name}</p>
                <p className="ml-5 text-gray-600 font-semibold font-serif">{prodDet.description}</p>
            </div>
        </div>
    )
}

export default ProdDetails;