import React from 'react'
import Image from 'next/image'
import nftBridgeImage from "../../public/SVG_LINKS/NFT_BRIDGES_LOGO.png";
import twitterIcon from "../../public/image/twitter.png";
import discordIcon from "../../public/image/discord.png";
import telegramIcon from "../../public/image/telegram.png";
import youtubeIcon from "../../public/image/youtube.png";
import menuIcon from "../../public/image/menu.png";
import { useRouter } from 'next/router';

function Header() {
  
  const router = useRouter();
  
  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  };
  return (
    <div className="w-full h-[150px] flex">
        <div className='w-1/2 pl-[20px] pt-[40px] flex items-center'>
          <button>
            <Image src={nftBridgeImage} width={300} height={180} className='flex object-cover p-[50px]' onClick={() => router.push('/')} />
          </button>
        </div>
        <div className='w-1/2 flex'>
          <div className='flex space-x-6 mt-[60px] content-start w-4/5'>
            <a className='bg-white rounded-full w-10 h-10' href='https://twitter.com/nft_bridges' target='_blank' rel="noreferrer">
              <Image src={twitterIcon} className='p-1'/>
            </a>
            <a className='bg-white rounded-full w-10 h-10' href='https://discord.gg/cnEsj65uJh' target='_blank' rel="noreferrer">
              <Image src={discordIcon} className='p-1'/>
            </a>
            <a className='bg-white rounded-full w-10 h-10' href='https://t.me/nft_bridges' target='_blank' rel="noreferrer">
              <Image src={telegramIcon} className='p-2'/>
            </a>
          </div>
          <div className='w-14 h-14 mt-[50px]'>
            <button>
              <Image src={menuIcon} onClick={() => router.push('/Contact')} />
            </button>
          </div>
        </div>
    </div>
  )
}

export default Header