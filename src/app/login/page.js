"use client"
import React, { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const LoginPage = () => {
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
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
                <div className=' realtive -z-1 h-screen'>
                    <Image 
                    src="/main.png"
                    alt="Main image"
                    fill
                    className="object-cover">
                    </Image>
                </div>
                <div className='pt-5 pb-10 px-10 max-w-3/4 bg-black/80 rounded-2xl flex flex-col items-center'>
                    <h1 className='text-3xl whitespace-nowrap font-bold text-center mb-4'>Login to<br></br> Start Chating⭐</h1>
                    <p className='md:px-10 mb-8'>Mingle is a simple, one-page universal chat app where everyone connects in one shared space. Chat instantly, meet new people, and enjoy real-time conversations without switching rooms or pages. Simple, fast, and fun.</p>
                    {loading ? <button className='bg-gray-600/40 p-3 z-3 rounded-lg '>Login...</button> :
                    <button className='bg-red-600 p-3 rounded-lg z-3 hover:bg-red-700 active:scale-95' onClick={submit}>Log in With Google</button>
                }
                </div>
                
            </div>
        </>
    )
}

export default LoginPage