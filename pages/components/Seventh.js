import React from 'react'
import Image from 'next/image'
import robel from '../../public/image/Rebel_tuer_NFT.jpg';
import crash from '../../public/image/Crash_Punk_NFT.jpg';
import { useRouter } from 'next/router';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { useRef, useEffect, useState } from 'react';

function Seventh() {
    const router = useRouter();
    const target = useRef(null);
    const [speed, setSpeed] = useState();
    const [speedX, setSpeedX] = useState();

    useEffect(() => {
        if (!target.current) return;
        const onScroll = e => {

            if (target.current.getClientRects()[0].y < 0) {
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
        <div className="relative overflow-hidden w-full h-[1800px] bg-[url('../public/image/Backgrouns-07.jpg')] bg-cover flex-col" ref={target}>

            <div className='flex flex-col lg:flex-row text-center lg:text-left'>
                <div className='flex-col mt-[120px] justify-center items-center lg:w-1/4'>
                    <div className='lg:ml-[70px] '>
                        <p className='text-[40px] text-[#42EBC8] font-Exo2 tracking-2'>
                            SECURITY
                        </p>
                    </div>
                    <Image src={robel} className='w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] lg:mt-[300px] rounded-full mx-auto absolute  hidden lg:flex' />
                </div>
                <div className='flex-col items-center lg:items-start justify-center lg:mt-[130px] lg:w-3/4 tracking-1 font-Barlow font-semibold'>
                    <div className=''>
                        <p className='text-white text-[20px]'>
                            When it comes to Web3, security is a prime concern, and we’ve made NFT Bridges as secure <br />
                            as Web3 allows. First, the bridge requires the user to login with their wallet on both ends. <br />
                            That means the user has the seed phrase for the wallet containing the NFTs. If you know the <br />
                            seed phrase then you are the owner of the wallet and can make choices about the NFTs in it.<br />
                            <br />
                            The user must approve the transaction manually on both chains, signaling that the rightful <br />
                            owner of the wallets approves the transaction.<br />
                            <br />
                            Every user has his own Lockbox on the bridge. You can only have access to the lockbox <br />
                            by logging in with your wallet. Therefore, if you know your seed phrase, you are the owner <br />
                            of the NFTs in the wallet and no one else has access to the contents of the vault. In other <br />
                            words, there is no private key or master key. NFT Bridges personnel do not have access <br />
                            to the vaults’ contents.<br />
                        </p>
                    </div>
                    <div className='flex flex-col lg:flex-row mt-[100px]'>
                        <div className='flex-col lg:w-1/3'>
                            <p className='seventh-title'>
                                Benefits for <br />
                                Everyone on Web3: <br />
                            </p>
                            <p className='mt-[20px] text-[20px] text-white'>
                                Collection Managers, <br />
                                Blockchains, NFT Markets,<br />
                                and Collectors<br />
                            </p>
                            <p className='mt-[20px] text-[20px] text-white'>
                                Increased NFT mobility <br />
                                offers significant Benefits<br />
                                for all Web3 participants.<br />
                            </p>
                        </div>
                        <div className='flex-col lg:w-1/3'>
                            <p className='seventh-title'>
                                Collection <br />
                                Managers <br />
                            </p>
                            <p className='mt-[20px] text-[20px] text-white'>
                                Collections can deploy <br />
                                on multiple chains at the <br />
                                same time, reaching more<br />
                                collectors and increasing<br />
                                the possibility of selling<br />
                                out right away.<br />
                            </p>
                        </div>
                        <div className='flex-col lg:w-1/3'>
                            <p className='seventh-title'>
                                Blockchain <br />
                                Leadership <br />
                            </p>
                            <p className='mt-[20px] text-[20px] text-white'>
                                Blockchains can entice <br />
                                NFT collections to move<br />
                                away from Ethereum to<br />
                                their blockchain, and<br />
                                increase liquidity and<br />
                                transaction volume.<br />
                            </p>
                        </div>
                    </div>
                    <div className='flex mt-[50px]'>
                        <div className='flex-col lg:w-1/3'>
                            <p className='seventh-title'>
                                NFT Markets <br />
                            </p>
                            <p className='mt-[20px] text-[20px] text-white'>
                                Instead of having to court <br />
                                NFT collections based on a<br />
                                single blockchain, Markets<br />
                                will suddenly have access to<br />
                                an incredible range of NFTs<br />
                                from a variety of chains.<br />
                                Arties.<br />
                            </p>
                        </div>
                        <div className='flex-col lg:w-1/3'>
                            <p className='seventh-title'>
                                Collectors <br />
                            </p>
                            <p className='mt-[20px] text-[20px] text-white'>
                                NFT collectors will have <br />
                                more control over their<br />
                                investments when they can <br />
                                move their NFTs from chain<br />
                                to chain and arbitrage their<br />
                                assets&apos; prices on multiple<br />
                                chains.<br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ParallaxProvider scrollAxis='vertical'>
                <div className='flex mt-[105px]'>
                    <div className='lg:w-1/2'>
                        <Parallax speed={speed} targetElement={target.current}>
                            <div>

                            </div>
                            <div className='w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] absolute ml-[300px]'>
                                <Image src={crash} className='rounded-full' />
                            </div>
                        </Parallax>
                    </div>
                    <div className='lg:w-1/2'>
                        <div className='w-[300px] h-[100px] rounded-full flex items-center mt-[120px]  font-[700] text-black'>
                            <button className='py-[30px] px-[80px] bg-[#42EBC8] rounded-full text-[30px] font-Barlow tracking-1'
                                onClick={() => router.push('/Contact')}>
                                CONTACT
                            </button>
                        </div>
                    </div>
                </div>
            </ParallaxProvider>
        </div>
    )
}

export default Seventh