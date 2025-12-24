import React from 'react'
const ShowMessageComponent = ({ icon,text, isUser,time }) => {


    return (
        <div className='rounded-md flex items-center mb-5 px-3 py-2 text-black ' style={{ justifyContent: isUser?"end":"start" }}>
            <div className='relative whitespace-pre-wrap flex items-center md:max-w-1/2 max-w-9/10 rounded-lg px-3 py-1 text-white ' style={{backgroundColor: isUser?"#000080":"#800080"}}>
                <div>{text}</div>
                <div className='absolute bg-cyan-800 w-6 h-6 outline-2 outline-white rounded-lg flex justify-center items-center text-xl font-semibold' style={isUser? { right: -45 } : {left:-45}}>{icon}</div>
                <div className='absolute -bottom-5 text-[10px] whitespace-nowrap text-gray-300' style={isUser?{right:0}:{left:0}}>{time}</div>
            </div>
        </div>
    )
}

export {ShowMessageComponent}