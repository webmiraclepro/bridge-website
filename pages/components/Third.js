import React, { useRef } from 'react'
import { useState } from 'react'
import Image from 'next/image';
import videoPlay from '../../public/image/videoPlay.png';

function Third() {
    const [playing, setPlaying] = useState(false);
    const [over, setOver] = useState(false);

    const video1 = useRef()

    return (
        <div className='bg-black w-full h-[900px] flex px-[70px]'>
            <div className='w-1/4 flex flex-col justify-center'>
                <p className='text-[#42EBC8] text-[35px] font-Exo2 tracking-2'>
                    BUILDING <br />
                    SECURE NFT <br />
                    BRIDGES<br />
                </p>
                <p className='text-white text-[25px] mt-[40px] tracking-1 font-Barlow font-semibold'>
                    NFT Bridges make it possible <br />
                    to move NFTs securely from<br />
                    one blockchain to another,<br />
                    scoring wins for blockchain<br />
                    leaders, markets, collections,<br />
                    and collectors.<br />
                </p>
            </div>
            <div className='w-3/4 h-full flex flex-col justify-center relative ' onMouseOver={() => {setOver(true);console.log("over", over);}} onMouseOut={() => setOver(false)}>
                <div className='flex overflow-hidden'>
                    {/* <video src='/image/a.mp4' controls width={1250} height={800} className='!border-[5px] p-[50px] !border-[#42EBC8] rounded-[50px]'>
                    </video> */}
                    <video ref={video1} autoplay width={1250} height={800} controls
                        className='!border-[5px] p-[50px] !border-[#42EBC8] rounded-[50px]'>
                        <source src="/image/a.mp4" />
                    </video>
                </div>
                {
                    !playing && over &&
                    <div className='absolute z-10 left-0 top-0 w-full h-full flex justify-center items-center pointer-events-none'>
                        <div class=" pointer-events-auto w-[180px] h-[180px]">
                            <Image src={videoPlay} onClick={() => { playing ? video1.current.pause() : video1.current.play(), setPlaying(!playing)}}/>
                        </div>
                    </div>
                }
                {
                    playing && over &&
                    <div className='absolute z-10 left-0 top-0 w-full h-full flex justify-center items-center pointer-events-none'>
                        <div class=" pointer-events-auto w-[180px] h-[180px]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="w-180 h-180 bg-transparent" onClick={() => { playing ? video1.current.pause() : video1.current.play(), setPlaying(!playing)}}>
                                <path fillRule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm5-2.25A.75.75 0 017.75 7h.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75v-4.5zm4 0a.75.75 0 01.75-.75h.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75v-4.5z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Third