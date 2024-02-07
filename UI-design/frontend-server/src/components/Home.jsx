import React from "react";

function Home(props) {
    return (
        <ul>
            <li>
                <h1>Name: {props.name}</h1>
                <p>Brand Name: {props.brand_name}</p>
            </li>
    </ul>
    )
}

export default Home;