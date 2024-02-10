import React from "react";
import { Link } from "react-router-dom";

const handleSubmit = (e) => {
    e.preventDefault();
}

function Login() {
    return (
        <div className="flex justify-center items-center mt-40 m-auto font-sans">
            <form onSubmit={handleSubmit} className="bg-gray-100 shadow-md rounded pt-6 px-8 pb-8 flex flex-col w-full md:w-1/3">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-md font-bold mb-2">
                        Email
                    </label>
                    <input type="email" 
                        name="email"
                        placeholder="Enter your email"
                        className="shadow border rounded appearance-none text-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
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
                    />
                </div>
                <div className="flex items-center justify-between">
                    <Link>
                        <button type="submit"
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