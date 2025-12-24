"use client";
import React, { useEffect, useRef, useState } from "react";
import { addMessage } from "@/lib/firestore";
import { useAuth } from "@/context/AuthContext";
import { Send } from "lucide-react";

const InputComp = ({ messageRef }) => {
    const textareaRef = useRef(null);
    const [message, setMessage] = useState("");
    const { user } = useAuth();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        setIsMobile(mobile);
    }, []);


    if (!user) { return null }

    const saveMessage = async () => {
        if (!message.trim()) return;
        try {
            setMessage("");
            await addMessage(user, message);

            setTimeout(() => {
            messageRef?.current?.scrollTo({
                top: messageRef.current.scrollHeight,
                behavior: "smooth",
            });
        }, 100);

        } catch (err) {
            console.error(err);
            alert("Message not sent");
        }
    };


    const handleEnterBtn = (e) => {
        if (!isMobile && e.key === "Enter" && !e.shiftKey) {
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
        <div className=" text-amber-50 flex items-center pt-1 mb-2 px-2">
            <div className="w-1/1 bg-black/30 text-amber-50 text-[16px] outline-1 py-1 rounded-full">
                <textarea
                    ref={textareaRef}
                    onFocus={handleFocus}
                    onClick={handleFocus}
                    onTouchStart={handleFocus}
                    className="resize-none py-2 px-4 focus:outline-none scrollbar-none overflow-y-auto w-full flex justify-center items-center rounded-2xl"
                    onKeyDown={handleEnterBtn}
                    value={message}
                    rows={1}
                    placeholder="Start Typing..."
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>

            <button className="ml-2 p-3 flex justify-center items-center rounded-full md:ml-2 active:scale-95 bg-blue-800 text-white cursor-pointer" onClick={saveMessage}> <Send/> </button>
        </div>

    );
};

export { InputComp };
