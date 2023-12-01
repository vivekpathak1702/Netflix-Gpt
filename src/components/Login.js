import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true)
    const handleSignInForm = () =>{
       setIsSignIn(!isSignIn)
    }
  return (
    <div>
      <Header />
      <div  className="absolute">
      <img className="  "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="bg-logo"
      />
      </div>
      <form className="bg-black bg-opacity-80 absolute m-32 text-white w-45 p-12 flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl">{isSignIn ? "Sign In": "Sign Up"}</h1>
        {!isSignIn && <input className="p-2 m-2" type="text" placeholder="Full Name"/>}
        <input className="p-2 m-2" type="text" placeholder="Email Address"/>
        <input className="p-2 m-2" type="password" placeholder="password"/>
        <button className="p-2 m-2 bg-red-600 ">{isSignIn ? "Sign In": "Sign Up"}</button>
        <p className=" cursor-pointer" onClick={handleSignInForm}>New To Netflix? Sign Up Now</p>
      </form>
    </div>
  );
};

export default Login;
