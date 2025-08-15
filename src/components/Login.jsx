import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'motion/react'

const Login = () => {

    const [state, setState] = useState('Login') 
    const { setShowLogin } = useContext(AppContext)

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, []);


  return (
     <div className='fixed  top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
        
        <motion.form 
            initial={{ opacity: 0.2, y: 50 }}
            transition={{ duration: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        
        className='relative bg-white p-10 rounded-xl text-slate-500 '>
            <h1 className='text-center text-2xl text-netural-700 font-medium '>{state}</h1>

            <p>Welcome back ! Please sign in to continue</p>

           { state !== 'Login' && <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5's>
                <img src={assets.user_icon} alt="" className='text-sm w-4 h-4'/>
                <input type="text" placeholder='Full Name' required className='text-sm outline-none ' />
            </div> }


            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                <img src={assets.email_icon} alt="" className='text-sm w-4 h-4'/>
                <input type="email" placeholder='Email Id' required className='text-sm outline-none ' />
            </div>

            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                <img src={assets.lock_icon} alt="" className='text-sm w-4 h-4'/>
                <input type="password" placeholder='Password' required className='text-sm outline-none ' />
            </div>

            <p className='text-xs text-blue-600 mt-4 cursor-pointer'>Forgot Password?</p>
            <button className='bg-blue-600 text-white px-6 py-2 rounded-full mt-5 w-full hover:bg-blue-700 transition-all duration-300'>
                {state === 'Login' ? 'Login' : 'create account' }</button>

            { state === 'Login' ?
                <p className='mt-5 text-center'>Don't have an account?<span 
                
                className='text-blue-600 cursor-pointer' onClick={()=>setState('Sign Up')}>Sign Up</span></p>
                : 
                <p className='mt-5 text-center'>Already have an account?
                <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Login')}>Login</span></p>
           }
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" className='absolute top-5 right-5 cursor-pointer' />
        </motion.form>
    </div>
  )
}

export default Login
