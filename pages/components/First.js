import React from 'react'
import Header from './Header'
import Image from 'next/image'
import crashPunksImage from "../../public/image/Crash_Punk_NFT.jpg";

function First() {
  return (
    <div className="w-full h-[800px] bg-[url('../public/image/Backgrouns-04.jpg')] bg-cover">
      <div>
          <Header />
      </div>
      <div className='w-full flex items-center justify-center'>
        <div className='w-1/2 flex items-center justify-center'>
          <Image src={crashPunksImage} className='w-[700px] h-[700px] rounded-full p-[80px]' />
        </div>
        <div className='w-1/2 space-y-4'>
          <div className='flex'>
            <p className='text-[#42EBC8] text-[75px] font-bold'>
              NFT 
            </p>
            <p className='text-white text-[75px] font-bold ml-4'>
              BRIDGES
            </p> 
          </div>
          <div className="flex flex-col font-Exo2">
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