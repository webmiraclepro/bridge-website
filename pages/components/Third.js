import React from 'react'
import ReactPlayer from 'react-player'
// import myVideo from '../../public/image/a.mp4'
function Third() {
  return (
    <div className='bg-black w-full h-[900px] flex px-[70px]'>
        <div className='w-1/4 flex flex-col justify-center'>
            <p className='text-[#42EBC8] text-[35px] font-Exo2 tracking-2'>
                BUILDING <br />
                SECURE NFT <br />
                BRIDGES<br />
            </p>
            <p className='text-white text-[25px] mt-[40px] font-Exo2 tracking-widest'>
                NFT Bridges make it possible <br />
                to move NFTs securely from<br />
                one blockchain to another,<br />
                scoring wins for blockchain<br />
                leaders, markets, collections,<br />
                and collectors.<br />
            </p>
        </div>
        <div className='w-3/4 h-full flex flex-col justify-center'>
            <div className='flex overflow-hidden'>
                <video src='/image/a.mp4' controls width={1250} height={800} className='!border-[5px] p-[50px] !border-[#42EBC8] rounded-[50px]'>
                </video>
            </div>
        </div>
    </div>
  )
}

export default Third