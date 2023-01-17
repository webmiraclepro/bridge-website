import React from 'react'
import Image from 'next/image'
import nftBridgeImage from "../../public/SVG_LINKS/NFT_BRIDGES_LOGO.png";
import twitterIcon from "../../public/image/twitter.png";
import discordIcon from "../../public/image/discord.png";
import telegramIcon from "../../public/image/telegram.png";
import menuIcon from "../../public/image/menu.png";
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

function Header() {

  const router = useRouter();

  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    if (!ref.current) return
    const onclick = (e) => {
      setOpen(false)
    }
    window.addEventListener('click', onclick);
    return () => {
      window.removeEventListener('click', onclick);
    }
  }, [ref])
  return (
    <div className="w-full h-[150px] flex flex-row lg:px-[70px] justify-between items-center gap-5 py-10">
        <Image src={nftBridgeImage} width={230} height={180} className='flex bg-cover bg-center' onClick={() => router.push('/')} />
        <div className='hidden lg:flex gap-8 items-center'>
          <a className='circle-icon' href='https://twitter.com/nft_bridges' target='_blank' rel="noreferrer">
            <Image src={twitterIcon} className='p-1' />
          </a>
          <a className='circle-icon' href='https://discord.gg/cnEsj65uJh' target='_blank' rel="noreferrer">
            <Image src={discordIcon} className='p-1' />
          </a>
          <a className='circle-icon' href='https://t.me/nft_bridges' target='_blank' rel="noreferrer">
            <Image src={telegramIcon} className='p-2' />
          </a>
        </div>
        <div className='w-14 h-14  items-end' ref={ref} onClick={e => { e.stopPropagation() }}>
          <button type='button' onClick={() => setOpen(true)} onChange={(e) => onChange(e.target.value)}>
            <Image src={menuIcon} />
          </button>
          {
            open &&
            <div className="flex flex-col w-[150px] bg-[#42EBC8] text-center px-[8px] rounded-[15px] font-[30px] ml-[-40px]" style={{ color: "black" }}>
              <div className='pt-[20px] tracking-2 text-black'>
                <a href='https://testnets.nftbridges.xyz' target='_blank' rel="noreferrer">
                  NFT BRIDGE
                </a>
              </div>
              <hr />
              <button className='pb-[20px] tracking-2' onClick={() => router.push('/Contact')}>
                CONTACT
              </button>
            </div>
          }
        </div>
    
    </div>
  )
}

export default Header