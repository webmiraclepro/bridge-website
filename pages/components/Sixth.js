import React from 'react'
import parrots from "../../public/image/Bitcoin_parrots_867.png";
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';

function Sixth() {
  const target = useRef(null);
  const [speed, setSpeed] = useState();

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
    <div className='relative overflow-hidden w-full h-[1250px] bg-black flex-col' ref={target}>
        <div className='mt-[70px] px-[70px]'>
          <p className='text-[#42EBC8] text-[40px] font-Exo2 tracking-2'>
            WHY USE <br />
            THE NFT BRIDGES <br />
            SYSTEM? <br />
          </p>
        </div>
        <div className='mt-[70px] flex px-[70px] tracking-1 font-Barlow font-semibold'>
          <div className='w-1/2 '>
            <div>
              <p className='text-[#42EBC8] text-[30px] font-exrabold'>
                Current situation
              </p>
            </div>
            <div className='mt-[30px]'>
              <p className='text-white text-[20px]'>
                Every chain is a universe.
              </p>
              <hr className='mt-[15px] mr-[70px]' />
            </div>
            <div className='mt-[15px]'>
              <p className='text-white text-[20px]'>
                If you deploy your assets on one chain, you are <br />
                locked into it, even if other, newer chains offer<br />
                better conditions to your initiatives.<br />
              </p>
              <hr className='mt-[15px] mr-[70px]' />
            </div>
            <div className='mt-[15px]'>
              <p className='text-white text-[20px]'>
                Most NFTs are deployed on Ethereum<br />
              </p>
              <hr className='mt-[15px] mr-[70px]' />
            </div>
            <div className='mt-[15px]'>
              <p className='text-white text-[20px]'>
                Many new networks are trying to entice NFT collections <br />
                and collectors to deploy on their Blockchains to increase <br />
                the chain&apos;s liquidity and number of transactions<br />
              </p>
              <hr className='mt-[15px] mr-[70px]' />
            </div>
            <div className='mt-[15px]'>
              <p className='text-white text-[20px]'>
                That&apos;s why we are building an NFT bridge.
              </p>
              <hr className='mt-[15px] mr-[70px]' />
            </div>
          </div>
          <div className='w-1/2 mt-[-45px]'>
            <div>
              <p className='text-[#42EBC8] text-[30px] font-extrabold'>
                We are building a set<br />
                of bridges that allows
              </p>
            </div>
            <div className='mt-[30px]'>
              <p className='text-white text-[20px]'>
                Chains to poach collections from Ethereum.
              </p>
              <hr className='mt-[15px]' />
            </div>
            <div className='mt-[15px]'>
              <p className='text-white text-[20px]'>
                Markets to reach new collectors and collections.
              </p>
              <hr className='mt-[15px]' />
            </div>
            <div className='mt-[15px]'>
              <p className='text-white text-[20px]'>
                Collections to deploy on multiple chains.
              </p>
              <hr className='mt-[15px]' />
            </div>
            <div className='mt-[15px]'>
              <p className='text-white text-[20px]'>
                Collectors to arbitrage the price of their<br />
                NFTs on multiple chains.
              </p>
              <hr className='mt-[15px]' />
            </div>
            <Parallax speed={speed} targetElement={target.current}>
              <div className='w-[500px] h-[500px] absolute mt-[31px] ml-[50px]'>
                <Image src={parrots} className='rounded-full'/>
              </div>
            </Parallax>
          </div>
        </div>
    </div>
  )
}

export default Sixth