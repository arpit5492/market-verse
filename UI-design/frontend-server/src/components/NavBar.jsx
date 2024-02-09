import React from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="flex justify-between px-36 font-sans items-center bg-new-green py-2 w-full shadow-lg">
            <Link>
                <h1 className="text-2xl text-sky-700 font-semibold">Market Verse</h1>
            </Link>
            <ul className="flex space-x-4 text-gray-600 font-medium text-lg">
                <>
                    <li className="px-4">
                        <Link>
                            <button>
                                <span>Login</span>
                            </button>
                        </Link>
                    </li>
                    <li className="px-4">
                        <button>
                            <span>Cart</span>
                        </button>
                    </li>
                </>
            </ul>
        </nav>
    )
}

export default NavBar;
