import React from 'react'
import Image from 'next/image'
import leaderIcon from '../../public/image/team-leader.png';
import marketIcon from '../../public/image/shopping-cart.png';
import bookIcon from '../../public/image/books-stack-of-three.png';
import manIcon from '../../public/image/books-stack-of-three.png';
import artiesImage from '../../public/image/Artie-7713.jpeg';

function Fourth() {
  return (
    <div className="w-full h-[800px] bg-[url('../public/image/Backgrouns-04.jpg')] bg-cover flex-col">
        <div className='w-full h-[600px] flex'>
            <div className='flex flex-col items-start mt-[60px] w-1/4 ml-[100px]'>
                <div className='bg-white rounded-full w-12 h-12 items-start'>
                    <Image src={leaderIcon} className='p-1'/>
                </div>
                <div className='mt-[30px]'>
                    <p className='text-[#70C48E] text-[30px]'>
                        BLOCKCHAIN <br />
                        LEADERS <br />
                    </p>
                </div>
                <div className='mt-[40px]'>
                    <p className='text-[#FFFFFF] text-[20px]'>
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
            <div className='flex flex-col items-start mt-[60px] w-1/4'>
                <div className='bg-white rounded-full w-12 h-12 items-start'>
                    <Image src={marketIcon} className='p-1'/>
                </div>
                <div className='mt-[30px]'>
                    <p className='text-[#70C48E] text-[30px]'>
                        MARKETS <br />
                        <br />
                    </p>
                </div>
                <div className='mt-[40px]'>
                    <p className='text-[#FFFFFF] text-[20px]'>
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
            <div className='flex flex-col items-start mt-[60px] w-1/4'>
                <div className='bg-white rounded-full w-12 h-12 items-start'>
                    <Image src={bookIcon} className='p-1'/>
                </div>
                <div className='mt-[30px]'>
                    <p className='text-[#70C48E] text-[30px]'>
                        COLLECTIONS <br />
                         <br />
                    </p>
                </div>
                <div className='mt-[40px]'>
                    <p className='text-[#FFFFFF] text-[20px]'>
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
            <div className='flex flex-col items-start mt-[60px] w-1/4'>
                <div className='bg-white rounded-full w-12 h-12 items-start'>
                    <Image src={manIcon} className='p-1'/>
                </div>
                <div className='mt-[30px]'>
                    <p className='text-[#70C48E] text-[30px]'>
                        COLLECTORS <br />
                        <br />
                    </p>
                </div>
                <div className='mt-[40px]'>
                    <p className='text-[#FFFFFF] text-[20px]'>
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
        <div className='w-[500px] h-[500px] rounded-full overflow-hidden ml-[750px] mt-[-70px]'>
            <Image src={artiesImage} />
        </div>
    </div>
  )
}

export default Fourth