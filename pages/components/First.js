import React from 'react'
import Header from './Header'
import Image from 'next/image'
import crashPunksImage from "../../public/image/Crash_Punk_NFT.jpg";

function First() {
  return (
    <div className="w-full h-[800px] bg-[url('../public/image/Backgrouns-04.jpg')] bg-cover">
        <Header />
      <div className='w-full flex flex-col lg:flex-row items-center justify-center lg:gap-28'>
        <Image src={crashPunksImage} className='w-[300px] h-[280px] lg:w-[550px] lg:h-[530px] rounded-full p-20' />
        <div className='flex flex-col gap-10 lg:gap-20'>
          <div className='flex tracking-2 font-extrabold text-2xl lg:text-[85px]'>
            <p className='text-[#42EBC8] py-2'>
              NFT
            </p>
            <p className='text-white pl-2 lg:pl-8'>
              BRIDGES
            </p>
          </div>
          <div className="flex flex-col font-Exo2 tracking-3 gap-4 lg:tracking-4">
            <p className='first-description'>
              BUILDING THE
            </p>
            <p className='first-description'>
              SWIFT SYSTEM
            </p>
            <p className='first-description'>
              FOR NFTs
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default First