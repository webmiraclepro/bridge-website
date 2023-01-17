import React from 'react'
import spaceWhalesImage from "../../public/image/Space_whales_NFT.jpg";
import Image from 'next/image';

function Second() {
    return (
        <div className="w-full h-[1200px] bg-[url('../public/image/Backgrouns-02.jpg')] bg-cover flex flex-col lg:flex-row items-center  gap-10 mx-auto justify-start px-5 py-5 lg:px-[70px]">
                <Image src={spaceWhalesImage} className='w-[500px] h-[500px] rounded-full ml-[-100px] overflow-hidden'/>
            <div className='flex flex-col items-start justify-center text-center lg:text-left'>
                <p className='text-[#42EBC8] lg:text-[40px] text-2xl leading-10 font-Exo2 lg:pt-[50px] tracking-1'>
                    ARE YOUR NFTS STUCK ON THEIR <br />
                    NATIVE CHAINS? NFT BRIDGES ALLOW <br />
                    YOU TO PORT YOUR DIGITAL ASSETS <br />
                    BETWEEN CHAINS, POSITIONING THEM <br />
                    FOR MAXIMUM VISIBILITY OR PROFITS. <br />
                </p>
                <p className='text-white text-xl lg:text-[38px] leading-10 lg:pt-[50px] tracking-1 font-Barlow font-bold'>
                    What if you could transfer your Eth-based NFTs to <br />
                    another blockchain, or vice versa? Now, you can. <br />
                </p>
                <p className='second-description'>
                    We’re developing technology that will change the landscape for everyone involved with <br />
                    Web3. As NFTs become more mobile, blockchains will enjoy more liquidity and higher <br />
                    revenues on their chains. Markets will thrive as successful NFT collections spread across<br />
                    various blockchains, and collections can be released on multiple chains simultaneously, <br />
                    increasing the probability of selling out. Collectors will enjoy capitalizing on trends they <br />
                    notice on various chains and moving their assets to the most advantageous environments. <br />
                </p>
                <p className='second-description '>
                    Best of all, NFT Bridges are non-custodial. It’s your lock and your key; you’re in charge of <br />
                    your own fate. We never have access to your NFTs. To increase security, we developed <br />
                    Bridge Monitors, which verify transactions and keep transfers running smoothly.<br />
                </p>
                <p className='second-description'>
                    Our experienced group of developers and advisors are Web3.0 veterans who have seen the  <br />
                    ups and downs of the NFT market. With a deep understanding of multiple blockchains and <br />
                    the priorities of collectors, collection directors, and blockchain leaders alike, the NFT <br />
                    Bridges team is enhancing the utility and profitability of NFTs.<br />
                </p>
            </div>
        </div>
    )
}

export default Second