import React, { useState } from 'react'
import Image from 'next/image'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { useRef, useEffect } from 'react';
import leaderIcon from '../../public/image/Blockchain_Leaders_Icon.png';
import marketIcon from '../../public/image/Markets_Icon.png';
import bookIcon from '../../public/image/Collections_Icon.png';
import manIcon from '../../public/image/Collectors_Icon.png';
import artiesImage from '../../public/image/Artie-7713.jpeg';


function Fourth() {
    const target = useRef(null);
    const [speed, setSpeed] = useState();
    console.log({ speed });
    useEffect(() => {
        if (!target.current) return;
        const onScroll = e => {
            if (target.current.getClientRects()[0].y < 0) {
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
            <div className='w-full h-[600px] flex flex-col lg:flex-row justify-between px-2 lg:px-[70px] text-center lg:text-left' >
                <div className='fourth-capdiv'>
                    <div className='rounded-full w-30 h-30 items-start overflow-hidden ml-[-10px]'>
                        <Image src={leaderIcon} />
                    </div>
                    <div className='mt-[30px] tracking-4'>
                        <p className='fourth-title'>
                            BLOCKCHAIN <br />
                            LEADERS <br />
                        </p>
                    </div>
                    <div className='mt-[40px] tracking-1'>
                        <p className='fourth-description'>
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
                <div className='fourth-capdiv'>
                    <div className='rounded-full w-30 h-30 items-start ml-[-15px]'>
                        <Image src={marketIcon} className='' />
                    </div>
                    <div className='mt-[30px] tracking-4'>
                        <p className='fourth-title'>
                            MARKETS <br />
                            <br />
                        </p>
                    </div>
                    <div className='mt-[40px] tracking-1'>
                        <p className='fourth-description'>
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
                <div className='fourth-capdiv'>
                    <div className='rounded-full w-30 h-30 items-start ml-[-15px]'>
                        <Image src={bookIcon} className='' />
                    </div>
                    <div className='mt-[30px] tracking-4'>
                        <p className='fourth-title'>
                            COLLECTIONS <br />
                            <br />
                        </p>
                    </div>
                    <div className='mt-[40px] tracking-1'>
                        <p className='fourth-description'>
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
                <div className='fourth-capdiv'>
                    <div className='rounded-full w-30 h-30 items-start overflow-hidden ml-[-15px]'>
                        <Image src={manIcon} className='' />
                    </div>
                    <div className='mt-[30px] tracking-4'>
                        <p className='fourth-title'>
                            COLLECTORS <br />
                            <br />
                        </p>
                    </div>
                    <div className='mt-[40px] tracking-1'>
                        <p className='fourth-description'>
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
            <ParallaxProvider scrollAxis='vertical'>
                <Parallax speed={speed} targetElement={target.current}>
                    <div className='w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] absolute mx-auto lg:right-[300px] lg:mt-[-55px]'>
                        <Image src={artiesImage} className='rounded-full' />
                    </div>
                </Parallax>
            </ParallaxProvider>
        </div>
    )
}

export default Fourth