import React from 'react'
import Image from 'next/image'
import nftBridgeImage from "../../public/SVG_LINKS/NFT_BRIDGES_LOGO.png";
import twitterIcon from "../../public/image/twitter.png";
import discordIcon from "../../public/image/discord.png";
import telegramIcon from "../../public/image/telegram.png";
import youtubeIcon from "../../public/image/youtube.png";
import arrowup from "../../public/image/arrowup.png";

function Footer() {
  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      }
    )
  }
  return (
    <div className="w-full lg:h-[250px] flex flex-col lg:flex-row lg:px-[70px]">
        <div className='lg:w-1/2 flex flex-col lg:flex-row items-center mx-auto'>
            <Image src={nftBridgeImage} width={350} height={150} className='flex object-cover p-[50px] ml-0 lg:mt-[-30px] lg: ml-[-80px] ' onClick={goToTop} />
        </div>
        <div className='lg:w-1/2 flex flex-col lg:flex-row justify-center items-center'>
          <div className='lg:w-1/2'>
            <div className='flex gap-7 items-center '>
              <div className='circle-icon'>
                <Image src={twitterIcon} className='p-1'/>
              </div>
              <div className='circle-icon'>
                <Image src={discordIcon} className='p-1'/>
              </div>
              <div className='circle-icon'>
                <Image src={telegramIcon} className='p-2'/>
              </div>
            </div>
          </div>
          <div className='lg:w-1/2 flex items-center justify-center mt-[60px]'>
            <div className=''>
                  <p className='text-white font-[17px]'>
                      © NFT Bridges 2022
                  </p>
              </div>
            </div>
        </div>
        <div className='flex flex-col lg:mt-[110px] lg:ml-[-20px] items-center lg:items-start '>
          <p className='text-white'>
              TOP
          </p>
          <div className='w-[30px] h-[30px] rounded-full lg:mt-[10px]'>
            <button>
              <Image src={arrowup} className='rounded-full' onClick={goToTop}/>
            </button>
          </div>
        </div>
      </div>
  )
}

export default Footer
