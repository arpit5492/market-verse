import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function SignUp() {

    const history = useNavigate();

    const [det, setDet] = useState({
        fullName: "",
        email: "",
        username: "",
        password: "",
        confPass: ""
    });
    
    function handleChange(e){
        const {name, value} = e.target;
    
        // console.log(name);
        // console.log(value);

        setDet(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    // console.log(det);
    
    async function handleSubmit(e){

        try{
            await axios.post("http://localhost:4000/signUp", det)
            .then(res => {
                const data = res.data;
                if(data.success === true){
                    history("/", {state:{id:data.fullName}});
                }
                else if(data.err === "Already exists"){
                    alert("Username or email already exists");
                }
                else{
                    alert("Can't login");
                }
            })
        }
        catch(error){
            console.log(error);
        }
    }


    return (
        <div className="flex justify-center mt-10 font-sans">
            <form action="" className="bg-gray-100 rounded shadow-md pt-6 px-8 pb-8 w-1/2 md:w-1/3">
                <div className="mb-4">
                    <label htmlFor="fullName" className="block text-gray-700 font-bold text-md mb-2">
                        Full Name
                    </label>
                    <input 
                        type="text"
                        name="fullName"
                        onChange={handleChange}
                        className="shadow border rounded appearance-none text-md w-full py-2 px-3 leading-tight"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold text-md mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        className="shadow border rounded appearance-none text-md w-full py-2 px-3 leading-tight"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 font-bold text-md mb-2">
                        Username
                    </label>
                    <input
                        type="text" 
                        name="username"
                        onChange={handleChange}
                        className="shadow border rounded appearance-none text-md w-full py-2 px-3 leading-tight"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold text-md mb-2">
                        Password
                    </label>
                    <input 
                        type="password" 
                        name="password"
                        onChange={handleChange}
                        className="shadow border rounded appearance-none text-md w-full py-2 px-3 leading-tight"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 font-bold text-md mb-2">
                        Confirm Password
                    </label>
                    <input type="password" 
                        name="confPass"
                        onChange={handleChange}
                        className="shadow border rounded appearance-none text-md w-full py-2 px-3 leading-tight"
                    />
                </div>
                <div className="">
                    <Link>
                        <button type="submit" onClick={handleSubmit} className="bg-new-green-100 hover:bg-new-green-150 text-white font-bold py-2 px-4 rounded">
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