import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
    return (
        <div className="flex justify-center mt-10 font-sans">
            <form action="" className="bg-gray-100 rounded shadow-md pt-6 px-8 pb-8 w-1/2 md:w-1/3">
                <div className="mb-4">
                    <label htmlFor="fullName" className="block text-gray-700 font-bold text-md mb-2">
                        Full Name
                    </label>
                    <input 
                        type="text"
                        className="shadow border rounded appearance-none text-md w-full py-2 px-3 leading-tight"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold text-md mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        className="shadow border rounded appearance-none text-md w-full py-2 px-3 leading-tight"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 font-bold text-md mb-2">
                        Username
                    </label>
                    <input
                        type="text" 
                        className="shadow border rounded appearance-none text-md w-full py-2 px-3 leading-tight"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold text-md mb-2">
                        Password
                    </label>
                    <input 
                        type="password" 
                        className="shadow border rounded appearance-none text-md w-full py-2 px-3 leading-tight"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 font-bold text-md mb-2">
                        Confirm Password
                    </label>
                    <input type="password" 
                        className="shadow border rounded appearance-none text-md w-full py-2 px-3 leading-tight"
                    />
                </div>
                <div className="">
                    <Link>
                        <button type="submit" className="bg-new-green-100 hover:bg-new-green-150 text-white font-bold py-2 px-4 rounded">
                            Create Account
                        </button>
                    </Link>
                    <p className="text-sm mt-3">
                        Already have an account?{" "}
                        <Link to="/login" className="font-bold">
                            Login
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default SignUp;