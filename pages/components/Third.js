import React from 'react'
import ReactPlayer from 'react-player'
// import myVideo from '../../public/image/a.mp4'
function Third() {
  return (
    <div className='bg-black w-full h-[900px] flex'>
        <div className='w-1/4 flex flex-col justify-center ml-[70px]'>
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
        <div className='w-3/4 h-full flex flex-col items-center justify-center'>
            <div className='!border-[3px] !border-[#42EBC8] rounded-[50px] text-white'>
                <div className='flex items-center justify-center overflow-hidden p-[30px]'>
                    <video src='/image/a.mp4' controls width={1250} height={800}>
                    </video>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Third