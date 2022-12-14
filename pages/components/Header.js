import React from 'react'
import Image from 'next/image'
import nftBridgeImage from "../../public/SVG_LINKS/NFT_BRIDGES_LOGO.png";
import twitterIcon from "../../public/image/twitter.png";
import discordIcon from "../../public/image/discord.png";
import telegramIcon from "../../public/image/telegram.png";
import youtubeIcon from "../../public/image/youtube.png";
import menuIcon from "../../public/image/menu.png";

function Header() {
  return (
    <div className="w-full h-[150px] flex">
        <div className='w-1/2 pl-[20px] pt-[40px] flex items-center'>
          <Image src={nftBridgeImage} width={300} height={200} className='flex object-cover p-[50px]'/>
        </div>
        <div className='w-1/2 flex'>
          <div className='flex space-x-6 mt-[60px] content-start w-4/5'>
            <a className='bg-white rounded-full w-12 h-12' href='https://twitter.com/nft_bridges' target='_blank'>
              <Image src={twitterIcon} className='p-1'/>
            </a>
            <a className='bg-white rounded-full w-12 h-12' href='https://discord.gg/cnEsj65uJh' target='_blank'>
              <Image src={discordIcon} className='p-1'/>
            </a>
            <a className='bg-white rounded-full w-12 h-12' href='https://t.me/nft_bridges' target='_blank'>
              <Image src={telegramIcon} className='p-2'/>
            </a>
          </div>
          <div className='w-16 h-16 mt-[50px]'>
            <Image src={menuIcon} />
          </div>
        </div>
    </div>
  )
}

export default Header