import React from 'react'

function Hero() {
  return (
    <>
        <div className='w-full max-h-dvh pt-15 px-60 font-medium justify-between items-center flex'>
            <div className='flex items-start justify-center flex-col w-full'>
                <h1 className='font-extrabold text-8xl py-4'>YOUR FEET <br />DESERVE <br /> THE BEST</h1>
                <p className=' w-xl py-8'>
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div>
                    <button className='px-4 py-[0.3rem] text-white rounded-2xl text-xl bg-red-600 hover:bg-red-700'>Shop Now</button >
                    <button className='px-4 ml-8 py-[0.3rem] text-black rounded-2xl text-xl border-black border-[1px] hover:bg-gray-400'>Category</button>
                </div>
                <p className='pt-4'>Also Available On</p>
                <div className='flex pt-2'>
                    <img className='pr-4' src="/images/flipkart.png" alt="icon" />
                    <img src="/images/amazon.png" alt="icon" />
                </div>
            </div>
            <img className='w-2/5' src="/images/shoe_image.png" alt="" />
        </div>
    </>
  )
}

export default Hero