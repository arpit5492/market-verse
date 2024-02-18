import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NavBar() {

    const location = useLocation();

    if(location.state && location.state.id){
        return (
            <nav className="flex justify-between px-36 font-sans items-center bg-new-green-50 py-2 w-full shadow-md">
                <Link>
                    <h1 className="text-2xl text-sky-700 font-semibold">Market Verse</h1>
                </Link>
                <ul className="flex text-gray-800 font-medium text-lg">
                    <>
                        <li className="px-4">
                            <Link to="/login">
                                <button className="rounded-full hover:bg-sky-500 py-1 px-3">
                                    <span>Login</span>
                                </button>
                            </Link>
                        </li>
                        <li className="px-4">
                            {/* <Link> */}
                                <button className="rounded-full hover:bg-sky-500 py-1 px-3">
                                    <span>Cart</span>
                                </button>
                            {/* </Link> */}
                        </li>
                        <li className="px-4 mr-5">
                            {/* <Link> */}
                                <button className="rounded-full hover:bg-sky-500 py-1 px-3">
                                    <span>{location.state.id}</span>
                                </button>
                            {/* </Link> */}
                        </li>
                    </>
                </ul>
            </nav>
        )
    }
    else {
        return (
            <nav className="flex justify-between px-36 font-sans items-center bg-new-green-50 py-2 w-full md:w-full shadow-md">
                <Link to="/">
                    <h1 className="text-2xl text-sky-700 font-semibold">Market Verse</h1>
                </Link>
                <ul className="flex text-gray-800 font-medium text-lg">
                    <>
                        <li className="px-4">
                            <Link to="/login">
                                <button className="rounded-full hover:bg-sky-500 py-1 px-3">
                                    <span>Login</span>
                                </button>
                            </Link>
                        </li>
                        <li className="px-4">
                            {/* <Link> */}
                                <button className="rounded-full hover:bg-sky-500 py-1 px-3">
                                    <span>Cart</span>
                                </button>
                            {/* </Link> */}
                        </li>
                    </>
                </ul>
            </nav>
        )
    }
}

export default NavBar;
