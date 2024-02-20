import React from "react";

export default function NotFound(){
    return (
        <>
            <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold text-new-green-100">404 Error</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Oops!!😓 Page not found</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
                    <div className="mt-5 flex items-center justify-center gap-x-6">
                        <a
                            href={`/`}
                            className="rounded-md bg-new-green-100 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Go back home
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}