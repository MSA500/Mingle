"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import { Pacifico, Delius, Indie_Flower, Roboto } from 'next/font/google'

const indie = Indie_Flower({ subset: ['latin'], weight: '400' })
const pacifico = Pacifico({ subsets: ['latin'], weight: '400' })
const delius = Delius({ subsets: ['latin'], weight: '400' })
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

const MainPage = () => {
  const wordList = [
    "Mingle more, scroll less.",
    "Hello World",
    "Mingle. Connect. Laugh."

  ]

  return (
    <>
      <div className='relative flex flex-col h-[100dvh] bg-black'>
        <div className='flex justify-center items-center p-2 shadow-[0_0_5px_white] rounded-b-[10px] bg-gradient-to-b from-gray-800 to-black-950'>
          <h1 className={`${delius.className} text-3xl font-bold pt-2 text-center`}>WELCOME TO <span className={`${delius.className}  glow-text text-4xl`}>MINGLE</span></h1>
        </div>

        <div className={`${delius.className} p-10 flex-grow`}>
          <div className='flex flex-col justify-center items-center'>
            <span className='text-3xl font-extrabold text-blue-400'>
              <Typewriter
                words={wordList}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={700}
              />
            </span>
            <div className='mt-10 flex flex-col justify-center items-center'>
              <p className='md:px-40'>Mingle is your ultimate destination for chatting, laughing, and connecting with people around the world. Whether you’re catching up with old friends, meeting new ones, or just sharing a fun moment, Mingle makes every conversation feel effortless and enjoyable. Our app provides a safe and friendly environment where you can express yourself freely—send messages, emojis, GIFs, and even start group chats to keep the fun going. With Mingle, every interaction is designed to bring smiles, spark laughter, and turn casual chats into meaningful connections. Your next conversation, your next friend, or your next shared laugh is just a click away!</p>
              <h1 className={`text-5xl mt-10 font-bold`}>LET'S CHAT</h1>
            </div>
            
          </div>
          <div className='flex justify-center items-center w-full mt-8'>
          <div>
            <Link href="/login" className='bg-gray-900 p-4 hover:bg-gray-800 neon-shadow rounded-lg'>
              <span className={`${roboto.className} animate-pulse font-bold text-2xl`}>Say Hello 👋</span>
            </Link>
          </div>
        </div>
        </div>

        <footer className="bg-gray-900 text-gray-300 py-8 px-6 mt-12">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
    
    <div className="text-2xl font-bold text-cyan-400">
      MINGLE
    </div>

    {/* Links */}
    <div className="flex space-x-6">
      <a href="#" className="hover:text-white transition-colors">Home</a>
      <a href="#" className="hover:text-white transition-colors">Features</a>
      <a href="#" className="hover:text-white transition-colors">About</a>
      <a href="#" className="hover:text-white transition-colors">Contact</a>
    </div>

    <div className="flex space-x-4 text-2xl">
      <a href="#" className="hover:scale-125 transition-transform">💬</a>
      <a href="#" className="hover:scale-125 transition-transform">🎉</a>
      <a href="#" className="hover:scale-125 transition-transform">👋</a>
    </div>
  </div>

  <div className="text-center text-gray-500 mt-6 text-sm">
    &copy; 2025 Mingle. Developed by Muhammad Saad Ali. 🌟
  </div>
</footer>


      </div>
    </>
  )
}

export default MainPage