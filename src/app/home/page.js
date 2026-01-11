"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { ProtectedRoute } from '@/components/ProtectedRoutes';
import { InputComp } from '@/components/InputMessage';
import { getMessage } from '@/lib/firestore';
import { LogOut } from 'lucide-react';
import { ShowMessageComponent } from '@/components/ShowMessageComponent';

const Home = () => {
    const { user, logOut, loading } = useAuth();
    const [messages, setMessages] = useState([]);
    const msgRef = useRef(null);


    useEffect(() => {
        if (!user) return;

        const unsubscribe = getMessage(setMessages);
        return () => unsubscribe && unsubscribe();
    }, [user]);

    if (loading || !user) {
        return (
            <ProtectedRoute>
                <div className="flex items-center justify-center min-h-screen">
                    <p className="text-lg">Loading...</p>
                </div>
            </ProtectedRoute>
        );
    }


    return (
        <>
            <ProtectedRoute>
                <div className='bg-gradient-to-t from-black to-gray-900 h-[100dvh] flex flex-col md:px-50 md:pb-3 pb-1 text-white'>
                    <div className='relative py-3 text-2xl font-bold flex justify-center items-center'>
                        <div className='h-10 w-30 md:h-16 md:w-50'>
                            <img src='logo.png'></img>
                        </div>
                        <button className='absolute right-8 text-red-500 active:scale-90 outline-none cursor-pointer' onClick={() => logOut()}><LogOut /></button>
                    </div>
                    <div ref={msgRef} className='overflow-y-auto flex-1 scrollbar-none px-14'>
                        {messages.map((d, idx) => {
                            const isUser = d.uid === user?.uid ? true : false;
                            const icon = d.email?.[0]?.toUpperCase() ?? "?";
                            const time = d.createdAt ? d.createdAt?.toDate().toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit',
                                hour12:true
                            }) : ""
                            const msgId = d.id
                            return (
                                <div key={idx}>
                                    <ShowMessageComponent icon={icon} text={d.text} isUser={isUser} time={time} id={msgId}></ShowMessageComponent>
                                </div>
                            )
                        })}

                    </div>
                    <div className='shrink-0 w-full bg-black px-2'>
                        <InputComp messageRef={msgRef} />
                    </div>
                </div>
            </ProtectedRoute>

        </>
    )
}

export default Home