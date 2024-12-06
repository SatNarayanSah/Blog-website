import React from 'react'

const NewsLetter = () => {
  return (
    <div className='text-center '>
        <h1 className='text-3xl font-bold text-blue-950'>Subscribe to our Newsletter</h1>
        <p className='text-xl opacity-50 tracking-widest py-5'>Subscribe to our email newsletter to get the latest posts <br /> delivered right to your email.</p>
        <div className='bg-white  flex items-center justify-between px-2 py-2 rounded-lg shadow-xl mb-4'>
            <input className='p-3' type="text" placeholder='Your email address ' />
            <button className='bg-gradient-to-b from-blue-500 to-blue-950 p-3 text-white font-bold rounded-xl tracking-widest '>Subscribe</button>
        </div>
        <p>Pure inspiration zero spam ✨✨</p>
    </div>
  )
}

export default NewsLetter