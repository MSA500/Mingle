import Link from 'next/link'
import React from 'react'

const MainPage = () => {
  return (
    <>
    <div className='flex h-[100dvh] justify-center items-center'>
        <Link href="/login" className='bg-cyan-500 p-4 inline-flex rounded-lg'>
            Get Started
        </Link>
    </div>
    </>
  )
}

export default MainPage