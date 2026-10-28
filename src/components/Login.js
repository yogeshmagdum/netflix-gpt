 import React from 'react'
import Header from './Header'
import {useState} from 'react'
 
 const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

   return (
     <div>
        <Header />
        <form className="absolute rounded-lg p-4 flex text-white bg-black p10 w-3/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col bg-opacity-80">
            <h3 className='font-bold text-3xl py-4 '>{
                isSignInForm ? 'Sign In' : 'Sign Up'
                }</h3>
            {
                !isSignInForm && (
                    <input type='text' placeholder="Full Name" className="p-2 mb-4 bg-gray-500"/>
                )
            }
            <input type='text' placeholder='Email Address' className="p-2 mb-4 bg-gray-500"/>
            <input type='password' placeholder='password' className="p-2 mb-4 bg-gray-500"/>
            <button className="p-2 mb-2 bg-red-600 rounded-lg" >
                {isSignInForm ? 'Sign In' : 'Sign Up'}
            </button>
            <p className='cursor-pointer' onClick={toggleSignInForm}>
                {
                    isSignInForm ? 'Are you new to NetFlix? Sign Up Now' : 'Already registered Sign In now'
                }
            </p>

        </form>
     </div>
   )
 }
 
 export default Login