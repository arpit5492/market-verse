import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePass = (e) => {
        setPass(e.target.value);
    }
    console.log(email);
    console.log(password);

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            await axios.post("http://localhost:4000/login", {
                email, password
            })
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <div className="flex justify-center items-center mt-36 m-auto font-sans">
            <form action="post" className="bg-gray-100 shadow-md rounded pt-6 px-8 pb-8 flex flex-col w-1/3 md:w-1/3">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-md font-bold mb-2">
                        Email
                    </label>
                    <input type="email" 
                        name="email"
                        placeholder="Enter your email"
                        className="shadow border rounded appearance-none text-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
                        onChange={handleEmail}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 text-md font-bold mb-2">
                        Password
                    </label>
                    <input type="password"
                        placeholder="Enter your password" 
                        name="password"
                        className="shadow border rounded appearance-none w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
                        onChange={handlePass}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <Link>
                        <button onClick={handleSubmit} type="submit"
                        className="bg-new-green-100 hover:bg-new-green-150 text-white font-bold py-2 px-4 rounded">
                            Sign In
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Login;