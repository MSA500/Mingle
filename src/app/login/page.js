"use client"
import React, { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const { login } = useAuth();
    const [loading,setLoading]=useState(false);
    const router = useRouter();

    const submit = async () => {
        try {
            setLoading(true)
            const res = await login();
            setLoading(false)
            router.push('/home')
        }
        catch (err) {
            console.error("Login Error");
            alert("login Failed")
        }
    }

    return (
        <>
            <div className='relative h-[100dvh] flex justify-center items-center'>
                            <div className=' absolute -z-1 h-screen'><img src='login.png' style={{height:"100%",widows:"100%"}}></img></div>
                {loading? <button className='bg-gray-600/40 p-3 z-3 rounded-lg '>Login...</button>: 
                <button className='bg-red-600 p-3 rounded-lg z-3 hover:bg-red-700 active:scale-95' onClick={submit}>Log in With Google</button>
                }
            </div>
        </>
    )
}

export default LoginPage