import React from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="flex justify-between px-36 font-sans items-center bg-blue-200 py-2 w-full shadow-lg">
            <Link>
                <h1 className="text-2xl font-semibold">Market Verse</h1>
            </Link>
            <ul className="space-x-4 text-gray-600 font-medium text-lg">
                <Link>
                    <button className="px-4">
                        <li>Login</li>
                    </button>
                </Link>
                <Link>
                    <button className="px-4">
                        <li>Cart</li>
                    </button>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar;
