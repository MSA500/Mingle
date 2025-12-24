import { deleteMessage } from '@/lib/firestore'
import React, { useState } from 'react'
import { Trash2 } from 'lucide-react'
import { ConfirmationPopup } from './ConfirmationPopup'

const ShowMessageComponent = ({ icon, text, isUser, time, id }) => {
    const [show, setShow] = useState(false);
    const [deleting, setDeleting] = useState(false);



    const delMsg = async () => {
        setDeleting(true);
        setShow(false);
        await deleteMessage(id);
        setDeleting(false);
    }

    return (
        <>
            <div className='rounded-md flex items-center mb-5 px-3 py-2 text-black ' style={{ justifyContent: isUser ? "end" : "start" }}>
                <div className='relative whitespace-pre-wrap flex items-center md:max-w-1/2 max-w-9/10 rounded-lg px-3 py-1 text-white ' style={{ backgroundColor: isUser ? "#000080" : "#800080" }}>
                    <div>{text}</div>
                    <div className='absolute bg-cyan-800 w-6 h-6 outline-2 outline-white rounded-lg flex justify-center items-center text-xl font-semibold' style={isUser ? { right: -45 } : { left: -45 }}>{icon}</div>
                    <div className='absolute -bottom-5 text-[10px] whitespace-nowrap text-gray-300' style={isUser ? { right: 0 } : { left: 0 }}>{time}</div>
                    {isUser ? 
                    deleting?
                    <div className='absolute -left-20 whitespace-nowrap text-gray-400'>deleting...</div> 
                    :<button className='absolute -left-6 active:scale-95 hover:text-red-900 whitespace-nowrap text-red-600 cursor-pointer'  onClick={() => setShow(true)}>{<Trash2 size={17}></Trash2>}</button> 
                    : ""}
                </div>
            </div>
                {
                    show ?
                        <ConfirmationPopup
                            cancleFun={() => setShow(false)}
                            confrimFun={()=> delMsg()}
                        />
                        :
                        ""
                }
        </>
    )
}

export { ShowMessageComponent }