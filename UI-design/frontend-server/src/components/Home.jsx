import React from "react";

function Home(props) {
    return (
        <ul className="list-disc pl-5">
            <li>
                <h2 className="text-3xl font-bold underline text-blue-600">Full Name: {props.full_name}</h2>
                <h3>Email: {props.email}</h3>
                <h4>Username: {props.username}</h4>
            </li>
        </ul>
    )
}

export default Home;