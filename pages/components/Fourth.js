import React, { useState } from 'react'
import Image from 'next/image'
import { Parallax, useParallax } from 'react-scroll-parallax';
import { useRef, useEffect } from 'react';
import leaderIcon from '../../public/image/Blockchain_Leaders_Icon.png';
import marketIcon from '../../public/image/Markets_Icon.png';
import bookIcon from '../../public/image/Collections_Icon.png';
import manIcon from '../../public/image/Collectors_Icon.png';
import artiesImage from '../../public/image/Artie-7713.jpeg';

function Fourth() {
    const target = useRef(null);
    const [speed, setSpeed] = useState();
    console.log({speed});
    useEffect(() => {
        if(!target.current) return;
        const onScroll = e => {
            if(target.current.getClientRects()[0].y < 0) {
                setSpeed(-70);
            }
            else {
                setSpeed(0);
            }
        }

        window.addEventListener('scroll', onScroll);
        
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [target.current])
    
    return (
        <div className="relative overflow-hidden w-full h-[1050px] bg-[url('../public/image/Backgrouns-04.jpg')] bg-cover flex-col tracking-wide" ref={target}>
            <div className='w-full h-[600px] flex px-[70px]' >
                <div className='w-1/4 mt-[60px]'>
                    <div className='flex flex-col items-start'>
                        <div className='rounded-full w-30 h-30 items-start overflow-hidden ml-[-10px]'>
                            <Image src={leaderIcon}/>
                        </div>
                        <div className='mt-[30px] tracking-4'>
                            <p className='text-[#42EBC8] text-[30px] font-Exo2'>
                                BLOCKCHAIN <br />
                                LEADERS <br />
                            </p>
                        </div>
                        <div className='mt-[40px] tracking-1'>
                            <p className='text-[#FFFFFF] text-[20px] tracking-1 font-Barlow font-semibold'>
                            How can you attract more  <br />
                            transactions to your chain? <br />
                            Encourage collectors to <br />
                            transfer their NFTs to your <br />
                            chain to enjoy the benefits <br />
                            you’ve been building. Our <br />
                            NFT Bridges make it easy. <br />
                            With more transactions, <br />
                            your blockchain will enjoy <br />
                            greater liquidity and <br />
                            revenues<br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-1/4 mt-[60px]'>
                    <div className='flex flex-col items-start'>
                        <div className='rounded-full w-30 h-30 items-start ml-[-15px]'>
                            <Image src={marketIcon} className=''/>
                        </div>
                        <div className='mt-[30px] tracking-4'>
                            <p className='text-[#42EBC8] text-[30px] font-Exo2'>
                                MARKETS <br />
                                <br />
                            </p>
                        </div>
                        <div className='mt-[40px] tracking-1'>
                            <p className='text-[#FFFFFF] text-[20px] tracking-1 font-Barlow font-semibold'>
                            Markets thrive when they are <br />
                            stocked with exciting NFT <br />
                            collections. And with NFT <br />
                            Bridges, you can attract <br />
                            collections that have <br />
                            performed well on other <br />
                            blockchains. Strengthen <br />
                            your marketplace with <br />
                            experienced collectors <br />
                            and proven collections.<br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-1/4 mt-[60px]'>
                    <div className='flex flex-col items-start'>
                        <div className='rounded-full w-30 h-30 items-start ml-[-15px]'>
                            <Image src={bookIcon} className=''/>
                        </div>
                        <div className='mt-[30px] tracking-4'>
                            <p className='text-[#42EBC8] text-[30px] font-Exo2'>
                                COLLECTIONS <br />
                                <br />
                            </p>
                        </div>
                        <div className='mt-[40px] tracking-1'>
                            <p className='text-[#FFFFFF] text-[20px] tracking-1 font-Barlow font-semibold'>
                            When you’re releasing a <br />
                            collection, the pressure is <br />
                            on! By offering your collection<br />
                            on multiple chains at <br />
                            the same time, you can grow <br />
                            your collector base, reach a <br />
                            larger audience, and sell out <br />
                            quicker.<br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-1/4 mt-[60px]'>
                    <div className='flex flex-col items-start'>
                        <div className='rounded-full w-30 h-30 items-start overflow-hidden ml-[-15px]'>
                            <Image src={manIcon} className=''/>
                        </div>
                        <div className='mt-[30px] tracking-4'>
                            <p className='text-[#42EBC8] text-[30px] font-Exo2'>
                                COLLECTORS <br />
                                <br />
                            </p>
                        </div>
                        <div className='mt-[40px] tracking-1'>
                            <p className='text-[#FFFFFF] text-[20px] tracking-1 font-Barlow font-semibold'>
                            Enjoy arbitrage opportunities <br />
                            for your NFTs by buying and <br />
                            selling strategically on <br />
                            different chains. The best <br />
                            collectors watch trends on <br />
                            different blockchains, and <br />
                            NFT Bridges can help you <br />
                            capitalize on your knowledge.<br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Parallax speed={speed} targetElement={target.current}>
                <div className='w-[500px] h-[500px] absolute right-[300px] mt-[-55px]'>
                    <Image src={artiesImage} className='rounded-full'/>
                </div>
            </Parallax>
        </div>
    )
}

export default Fourth