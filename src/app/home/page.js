"use client"
import React, { useEffect, useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { ProtectedRoute } from '@/components/ProtectedRoutes';
import { InputComp } from '@/components/InputMessage';
import { getMessage } from '@/lib/firestore';
import { ShowMessageComponent } from '@/components/ShowMessageComponent';

const Home = () => {
    const { user, loading } = useAuth();
    const [messages, setMessages] = useState([]);

    useEffect(() => {

        const unsubscribe = getMessage(setMessages);
        return () => {
    if (typeof unsubscribe === "function") {
      unsubscribe();
    }
  };

    }, [])


    return (
        <>
            <ProtectedRoute>
            <div className='bg-gradient-to-t from-black to-gray-900 h-[100dvh] flex flex-col md:px-50 md:pb-3 pb-1 text-white'>
                <div className='py-3 text-2xl font-bold flex justify-center items-center'>
                    <div className='h-10 w-30 md:h-16 md:w-50'>
                        <img src='logo.png'></img>
                    </div>
                </div>
                <div className='overflow-y-auto flex-1 scrollbar-none px-14'>
                    {messages.map((d, idx) => {
                        const isUser = d.uid === user.uid ? true : false;
                        const icon = d.email?.[0]?.toUpperCase() ?? "?";
                        return (
                            <ShowMessageComponent key={idx} icon={icon} text={d.text} isUser={isUser}></ShowMessageComponent>
                        )
                    })}

                </div>
                <div className='shrink-0 w-full bg-black px-2'>
                    <InputComp />
                </div>
            </div>
            </ProtectedRoute>

        </>
    )
}

export default Home