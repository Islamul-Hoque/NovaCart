"use client";

import React, { useState, } from "react";
import { useRouter, } from "next/navigation";
import { FaEye, FaSignInAlt, FaSpinner } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (!email) return setError("Please enter your email address.");
        if (!password) return setError("Please enter your password.");
        setIsLoading(true)

        if (email === "admin@gmail.com" && password === "123456") {
            document.cookie = "auth=true; path=/";
            document.cookie = `userEmail=${email}; path=/`;

            // toast.success("Logged in successfully!");
            // setError("");
            // setTimeout(() => {
            //     window.location.href = "/all-products";
            // }, 100);
            setTimeout(() => {
                window.location.href = "/all-products";
                setTimeout(() => {
                    toast.success("Logged in successfully!");
                }, 200);
            }, 100);

        }
        else {
            setError("Invalid email or password");
            setIsLoading(false);
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient">
            <div className="w-[88%] md:w-[40%] pb-3 rounded-[0.7rem] overflow-hidden shadow bg-white border border-gray-200 ">
                <h2 className="text-3xl font-bold text-center pt-6"> Login to <span className="text-gradient">NovaCart</span></h2>
                <div className="card-body text-gray-800 ">
                    <form onSubmit={ handleSubmit }>
                        <fieldset className="fieldset">
                            <label className="label text-gray-700  ">Email address</label>
                            <input value={email} onChange={(e) => { 
                                setEmail(e.target.value)
                                setError("");
                                }}  type="email" className="inputField" placeholder="Enter your email address"  />

                            <div className="relative">
                                <label className="label mb-[0.38rem] mt-2 text-gray-700 ">Password</label>
                                <input value={password}  onChange={(e) =>{
                                    setPassword(e.target.value)
                                    setError("");
                                    }} type={ show ? "text" : "password" }  className="inputField" placeholder="Enter your password" />
                                <span onClick={()=> setShow(!show) } className="absolute text-[1rem] right-4 top-[2.77rem] cursor-pointer z-50 " > { show ? <FaEye/> : <IoEyeOff/> }  </span>
                            </div>

                            { error && <p className='text-red-500 text-[0.8rem]'> {error} </p> }

                            <button disabled={isLoading} type="submit" className="btn-primary-w-full mt-4">
                                {isLoading ? ( <> <FaSpinner className="animate-spin" /> Logging in... </> ) : ( <> <FaSignInAlt /> Login </> )}
                            </button>
                        </fieldset>
                    </form>

                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Login;