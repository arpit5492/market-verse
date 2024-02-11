import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="flex justify-between px-36 font-sans items-center bg-new-green-50 py-2 w-full shadow-lg">
            <Link to="/home">
                <h1 className="text-2xl text-sky-700 font-semibold">Market Verse</h1>
            </Link>
            <ul className="flex space-x-4 text-gray-800 font-medium text-lg">
                <>
                    <li className="px-4">
                        <Link to="/login">
                            <button className="rounded-full hover:bg-sky-500 py-1 px-3">
                                <span>Login</span>
                            </button>
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link>
                            <button className="rounded-full hover:bg-sky-500 py-1 px-3">
                                <span>Cart</span>
                            </button>
                        </Link>
                    </li>
                </>
            </ul>
        </nav>
    )
}

export default NavBar;
