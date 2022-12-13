import React from 'react'
import ReactPlayer from 'react-player'
// import myVideo from '../../public/image/a.mp4'
function Third() {
  return (
    <div className='bg-black w-full h-[600px] flex'>
        <div className='w-1/4 flex flex-col justify-center ml-[70px]'>
            <p className='text-[#70C48E] text-[40px]'>
                BUILDING <br />
                SECURE NFT <br />
                BRIDGES<br />
            </p>
            <p className='text-white text-[20px] mt-[40px]'>
                NFT Bridges make it possible <br />
                to move NFTs securely from<br />
                one blockchain to another,<br />
                scoring wins for blockchain<br />
                leaders, markets, collections,<br />
                and collectors.<br />
            </p>
        </div>
        <div className='w-3/4 h-full flex flex-col items-center justify-center'>
            <div className='!border-[3px] !border-[#70C48E] rounded-[50px] text-white'>
                <div className='flex items-center justify-center overflow-hidden p-[40px]'>
                    <ReactPlayer>
                        {/* <source url={'../../public/image/a.mp4'} type='video/mp4' /> */}
                    </ReactPlayer>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Third