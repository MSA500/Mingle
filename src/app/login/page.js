"use client"
import React, { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { indie, roboto } from '../page';
import { Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
    const [showUsername, setShowUsername] = useState(false);
    const [showKey, setShowKey] = useState(false);
    const [username, setUsername] = useState("");
    const [key, setKey] = useState("");

    const router = useRouter();

    const submit = async () => {
        if (key.trim() === "" || username.trim() === "") {
            alert("Please enter Username and Key")
            return;
        }
        try {
            setLoading(true)
            const res = await login(username, key);
            setLoading(false)

            if (res === "valid") {
                router.push('/home')
            }
            else {
                alert("Invalid username or key");
            }

        }
        catch (err) {
            console.error("Login Error");
            setLoading(false)
            alert("login Failed")
        }

    }

    return (
        <>
            <div className='relative h-[100dvh] flex justify-center items-center'>
                <div className=' realtive -z-20 h-screen'>
                    <Image
                        src="/main.png"
                        alt="Main image"
                        fill
                        className="object-cover">
                    </Image>
                </div>
                <div className='pt-5 neon-shadow z-0 pb-10 px-10 max-w-3/4 gap-2 bg-black/80 rounded-2xl flex flex-col items-center'>
                    <h1 className='text-3xl whitespace-nowrap font-bold text-center mb-4'>Login to<br></br><span className='glow-text'> Start Chating⭐</span></h1>
                    <p className='md:px-10 mb-8'>Mingle is a simple, one-page universal chat app where everyone connects in one shared space.</p>

                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col'>
                            <label className={`font-bold ${roboto.className}`}>Username</label>
                            <div className='bg-white/70 p-2 rounded-lg flex'>
                                <input
                                    placeholder='Enter Secret Username'
                                    type={showUsername ? 'text' : 'password'}
                                    className='focus:outline-0 text-black '
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={username}
                                />
                                <button className='cursor-pointer' onClick={() => setShowUsername(!showUsername)}>
                                    {showUsername ? <Eye color='black' /> : <EyeOff color='black' />}
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <label className={`font-bold ${roboto.className}`}>Key</label>
                            <div className='bg-white/70 p-2 rounded-lg flex'>
                                <input
                                    placeholder='Enter Secret Key'
                                    type={showKey ? 'text' : 'password'}
                                    className='focus:outline-0 text-black '
                                    onChange={(e) => setKey(e.target.value)}
                                    value={key}
                                />
                                <button className='cursor-pointer' onClick={() => setShowKey(!showKey)}>
                                    {showKey ? <Eye color='black' /> : <EyeOff color='black' />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {loading ? <button className=' bg-gray-600/40 p-3 z-3 rounded-lg '>Login...</button> :
                        <button className='bg-red-600 p-2 mt-3 rounded-lg z-3 hover:bg-red-700 active:scale-95' onClick={submit}>Log in With Google</button>
                    }

                </div>
            </div>
        </>
    )
}

export default LoginPage