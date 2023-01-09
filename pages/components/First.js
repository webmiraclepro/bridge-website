import React from 'react'
import Header from './Header'
import Image from 'next/image'
import crashPunksImage from "../../public/image/Crash_Punk_NFT.jpg";

function First() {
  return (
    <div className="w-full h-[800px] bg-[url('../public/image/Backgrouns-04.jpg')] bg-cover px-[70px]">
      <div>
          <Header />
      </div>
      <div className='w-full flex items-center justify-center'>
        <div className='w-1/2 flex items-center justify-center'>
          <Image src={crashPunksImage} className='w-[550px] h-[530px] rounded-full p-[80px]' />
        </div>
        <div className='w-1/2 space-y-4'>
          <div className='flex tracking-2 font-extrabold text-[85px]'>
            <p className='text-[#42EBC8] my-[8px]'>
              NFT 
            </p>
            <p className='text-white pl-[30px]'>
              BRIDGES
            </p> 
          </div>
          <div className="flex flex-col font-Exo2 tracking-4">
            <p className='text-white text-[35px]'>
              BUILDING THE
            </p> 
            <p className='text-white text-[35px]'>
              SWIFT SYSTEM
            </p> 
            <p className='text-white text-[35px]'>
              FOR NFTs
            </p> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default First