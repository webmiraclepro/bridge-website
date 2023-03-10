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
    <div className="w-full h-[250px] flex relative px-[70px]">
        <div className='w-1/2 flex items-center'>
          <div className='mt-[-30px] ml-[-80px]'>
            <Image src={nftBridgeImage} width={350} height={150} className='flex object-cover p-[50px]' onClick={goToTop} />
          </div>
        </div>
        <div className='w-1/2 flex'>
          <div className='w-1/2'>
            <div className='flex space-x-7 mt-[120px]'>
              <div className='bg-white rounded-full w-10 h-10'>
                <Image src={twitterIcon} className='p-1'/>
              </div>
              <div className='bg-white rounded-full w-10 h-10'>
                <Image src={discordIcon} className='p-1'/>
              </div>
              <div className='bg-white rounded-full w-10 h-10'>
                <Image src={telegramIcon} className='p-2'/>
              </div>
            </div>
          </div>
          <div className='w-1/2 flex items-center justify-center mt-[60px]'>
            <div className=''>
                  <p className='text-white font-[17px]'>
                      © NFT Bridges 2022
                  </p>
              </div>
            </div>
        </div>
        <div className='flex flex-col mt-[110px] ml-[-20px] absolute right-[70px]'>
          <p className='text-white'>
              TOP
          </p>
          <div className='w-[30px] h-[30px] rounded-full mt-[10px]'>
            <button>
              <Image src={arrowup} className='rounded-full' onClick={goToTop}/>
            </button>
          </div>
        </div>
      </div>
  )
}

export default Footer
