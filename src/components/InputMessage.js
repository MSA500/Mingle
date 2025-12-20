"use client";
import React, { useRef, useState } from "react";
import { addMessage } from "@/lib/firestore";
import { useAuth } from "@/context/AuthContext";

const InputComp = ({ messagesRef }) => {
    const textareaRef = useRef(null);
    const [message, setMessage] = useState("");
    const { user } = useAuth();

    if(!user){ return null }

    const saveMessage = async () => {
        if (!message.trim()) return;
        try {
            setMessage("");
            await addMessage(user, message);
        } catch (err) {
            console.error(err);
            alert("Message not sent");
        }
    };


    const handleEnterBtn = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            saveMessage();
        }
    };

    const handleFocus = () => {
        setTimeout(() => {
            textareaRef.current?.scrollIntoView({
                behavior: "auto", 
                block: "center", 
            });
        }, 300);
    };


    return (
        <div className=" text-amber-50 flex items-center pt-1">
            <div className="w-1/1 bg-black/30 text-amber-50 text-lg border rounded-2xl p-2">
                <textarea
                    ref={textareaRef}
                    onFocus={handleFocus}
                    onClick={handleFocus} 
                    onTouchStart={handleFocus}
                    className="resize-none p-3 focus:outline-none overflow-y-auto w-full  rounded-2xl"
                    onKeyDown={handleEnterBtn}
                    value={message}
                    rows={1}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <button className="bg-blue-950 h-7 p-6 flex justify-center items-center rounded-2xl md:ml-2 outline-1 active:scale-95 hover:bg-blue-800" onClick={saveMessage}>Send</button>
        </div>

    );
};

export { InputComp };
