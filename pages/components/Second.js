import React from 'react'
import spaceWhalesImage from "../../public/image/Space_whales_NFT.jpg";
import Image from 'next/image';

function Second() {
  return (
    <div className="w-full h-[1200px] bg-[url('../public/image/Backgrouns-02.jpg')] bg-cover flex items-center justify-start px-[70px]">
        <div className='w-1/4'>
            <div className='w-[500px] h-[500px] rounded-full ml-[-100px] overflow-hidden'>
                <Image src={spaceWhalesImage}/>
            </div>
        </div>
        <div className='w-3/4 flex-col items-start justify-center'>
            <div>
                <p className='text-[#42EBC8] text-[40px] font-Exo2 mt-[50px] tracking-1'>
                    ARE YOUR NFTS STUCK ON THEIR <br />
                    NATIVE CHAINS? NFT BRIDGES ALLOW <br />
                    YOU TO PORT YOUR DIGITAL ASSETS <br />
                    BETWEEN CHAINS, POSITIONING THEM <br />
                    FOR MAXIMUM VISIBILITY OR PROFITS. <br />
                </p>
            </div>
            <div className='mt-[50px]'>
                <p className='text-white text-[38px] tracking-1 font-Barlow font-bold'>
                    What if you could transfer your Eth-based NFTs to <br />
                    another blockchain, or vice versa? Now, you can. <br />
                </p>
            </div>
            <div className='mt-[20px] font-Barlow font-semibold'>
                <p className='text-white text-[25px] tracking-1'>
                We’re developing technology that will change the landscape for everyone involved with <br />
                Web3. As NFTs become more mobile, blockchains will enjoy more liquidity and higher <br />
                revenues on their chains. Markets will thrive as successful NFT collections spread across<br /> 
                various blockchains, and collections can be released on multiple chains simultaneously, <br />
                increasing the probability of selling out. Collectors will enjoy capitalizing on trends they <br />
                notice on various chains and moving their assets to the most advantageous environments. <br />
                </p>
            </div>
            <div className='mt-[20px] font-Barlow font-semibold'>
                <p className='text-white text-[25px] tracking-1'>
                Best of all, NFT Bridges are non-custodial. It’s your lock and your key; you’re in charge of <br />
                your own fate. We never have access to your NFTs. To increase security, we developed <br />
                Bridge Monitors, which verify transactions and keep transfers running smoothly.<br />
                </p>
            </div>
            <div className='mt-[20px] font-Barlow font-semibold'>
                <p className='text-white text-[25px] tracking-1'>
                Our experienced group of developers and advisors are Web3.0 veterans who have seen the  <br />
                ups and downs of the NFT market. With a deep understanding of multiple blockchains and <br />
                the priorities of collectors, collection directors, and blockchain leaders alike, the NFT <br />
                Bridges team is enhancing the utility and profitability of NFTs.<br />
                </p>
            </div>
        </div>
    </div>
  )
}

export default Second