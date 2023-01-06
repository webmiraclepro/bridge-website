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
      if(!ref.current) return
      const onclick = (e) => {
          setOpen(false)   
      }
      window.addEventListener('click', onclick);
      return () => {
          window.removeEventListener('click', onclick);
      }
  }, [ref])
  return (
    <div className="w-full h-[150px] flex">
        <div className='w-1/2 pl-[20px] pt-[40px] flex items-center'>
          <button>
            <Image src={nftBridgeImage} width={350} height={200} className='flex object-cover p-[50px]' onClick={() => router.push('/')} />
          </button>
        </div>
        <div className='w-1/2 flex'>
          <div className='flex space-x-7 mt-[80px] content-start w-4/5'>
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
          <div className='w-14 h-14 mt-[70px]' ref={ref} onClick={e => {e.stopPropagation()}}>
            <button type='button' onClick={() => setOpen(true)} onChange={(e) => onChange(e.target.value)}>
              <Image src={menuIcon} />
            </button>
            {
              open &&
              <div className="flex flex-col bg-white w-[150px] text-center px-[8px] rounded-[15px]" style={{color: "black"}}>             
                <div className='mt-[5px]'>
                  <a href='https://testnet.nftbridges.xyz' target='_blank' rel="noreferrer">
                    NFT BRIDGE
                  </a>
                </div>
                <hr />
                <button className='mt-[5px]' onClick={() => router.push('/Contact')}>
                  CONTACT
                </button>
              </div>
            }
            <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
              <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">NFT BRIDGE</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">CONTACT</a>
                </li>

              </ul>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Header