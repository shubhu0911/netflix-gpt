import React from 'react'
import { useState } from 'react';
import Header from './Header'

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);

  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  };
  
  
  return (
    <div >
      <Header />
      <div className='absolute'>
        <img
          alt="logo"
          src="https://www.techhive.com/wp-content/uploads/2023/10/Netflix-Hintergrund.jpg?resize=1536%2C864&quality=50&strip=all"
        />
      </div>
      <form className='my-36 w-3/12 p-12 bg-black bg-opacity-80 absolute mx-auto right-0 left-0 text-white rounded-lg'>
        <h1 className='font-bold text-3xl my-2 p-2'>
        {isSignInForm?"Sign In":"Sign Up"}</h1>
        
        {!isSignInForm &&<input 
        type="text" 
        placeholder="Full Name" 
        className='p-4 my-4 w-full rounded-md bg-gray-500' />
        }
        <input 
        type="text" 
        placeholder="Email Address" 
        className='p-4 my-4 w-full rounded-md bg-gray-500' />
        <input 
        type="password" 
        placeholder="Password" 
        className='p-4 my-4 w-full rounded-md  bg-gray-500' />
        <button 
        type="submit" 
        className='p-4 my-6 bg-red-700 w-full  rounded-md '>
        {isSignInForm?"Sign In":"Sign Up"}
        </button>
        <input
          type="checkbox"
          id="rememberMe"
          className="mr-2"

        />
        <label htmlFor="rememberMe" className=" text-md text-gray-400">
          Remember Me
        </label>
        <p className="mt-4 text-gray-500">
          {isSignInForm?"New to Netflix?":"Already have an account?"}{' '}
          <span className="text-red-500 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"Sign Up":"Sign In"}</span>
        </p>
        <p className="mt-4 text-sm">
          This page is for educational purposes only and is not affiliated with Netflix.
        </p>
      </form>
    </div>
  )
}






export default Login