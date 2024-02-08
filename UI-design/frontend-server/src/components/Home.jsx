import React from "react";

function Home(props) {
    return (
        <div>
            <h1>Full Name: {props.full_name}</h1>
            <h2>Email: {props.email}</h2>
            <h3>Username: {props.username}</h3>
            <h4>Password: {props.password}</h4>
        </div>
    )
}

export default Home;