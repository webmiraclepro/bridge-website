import React from 'react'
import Image from 'next/image'
import ilan from '../../public/image/ILAN2.png';
import micha from '../../public/image/Micha.jpg';
import ethan from '../../public/image/Ethan.jpg';
import trevor from '../../public/image/Trevor_Owens.png';
import luis from '../../public/image/Luis_Ramirez.png';
import jamil from '../../public/image/JAMIL.png';

function Fifth() {
  return (
    <div className="w-full lg:h-[1500px] bg-[url('../public/image/Backgrouns-05.jpg')] bg-cover flex-col overflow-hidden">
        <div className='w-full lg:h-[600px] flex flex-col lg:flex-row px-2 lg:px-[70px] text-center lg:text-left items-center lg:items-start'>
            <div className='flex flex-col items-start pt-20 lg:w-1/4 tracking-3'>
                <p className='text-[#42EBC8] text-[40px] font-Exo2'> 
                    TEAM AND <br />
                    ADVISORS <br />
                </p>
            </div>
            <div className='fifth-avatar-div'>
                <div className='fifth-avatar-img  w-[200px] h-[200px] ml-[-20px]'>
                    <Image src={ilan} className='rounded-full'/>
                </div>
                <div className='fifth-title-cap'>
                    <p className='fifth-title'>
                        Ilan Klein
                    </p>
                    <div className='flex'>
                        <p className='fifth-title-role'>
                            Founder
                        </p>
                        <a href={'https://www.linkedin.com/in/ilan-klein-8073192'} target="_blank" rel="noreferrer" className='bg-white w-[20px] h-[20px] ml-[10px] mt-[10px] font-bold flex items-center justify-center'>
                            in
                        </a>
                    </div>
                </div>
                    <p className='fifth-description'>
                    Ilan worked for 15+ years in <br />
                    the digital marketing space <br />
                    before transitioning to Web3.<br />
                    An expert in digital marketing,<br />
                    lead generation and campaign <br />
                    optimization, he successfully <br />
                    launched the Arties NFT collection<br />
                    in 2022 on the STX blockchain. <br />
                    At a time when only 500 people in <br />
                    the world had more than 100 STX <br />
                    in their wallets, he sold 1700 <br />
                    Arties.<br />
                    </p>
               
            </div>
            <div className='fifth-avatar-div'>
                <div className='fifth-avatar-img'>
                    <Image src={micha} className='p-1 bg-cover rounded-full'/>
                </div>
                <div className='fifth-title-cap'>
                    <p className='fifth-title'>
                        Micha Riss
                    </p>
                    <div className='flex'>
                        <p className='fifth-title-role'>
                            CMO
                        </p>
                        <a href={'https://www.linkedin.com/in/michariss'} target='_blank' rel="noreferrer" className='bg-white w-[20px] h-[20px] ml-[10px] mt-[10px] font-bold flex items-center justify-center'>
                            in
                        </a>
                    </div>
                </div>
                    <p className='fifth-description'>
                    Founder and Creative Director <br />
                    of Flying Machine, a New York<br />
                    -based branding and design <br />
                    compan, Micha and his team have<br />
                    produced award-winning results<br />
                    for ESPN International, the New<br />
                    York Knicks, the New York Rangers,<br />
                    A&E Television Networks, IFC, Sky <br />
                    Italia, Shop, Japan, Starhome, <br />
                    Douglas Elliman and Teva <br />
                    Pharmaceuticals<br />
                    </p>
            </div>
            <div className='fifth-avatar-div'>
                <div className='fifth-avatar-img'>
                    <Image src={ethan} className='p-1 bg-cover rounded-full'/>
                </div>
                <div className='fifth-title-cap'>
                    <p className='fifth-title'>
                        Ethan Tan
                    </p>
                    <div className='flex'>
                        <p className='fifth-title-role'>
                            Advisor
                        </p>
                        <a href={'https://www.linkedin.com/in/ethanjy'} target='_blank' rel="noreferrer" className='bg-white w-[20px] h-[20px] ml-[10px] mt-[10px] font-bold flex items-center justify-center'>
                            in
                        </a>
                    </div>
                </div>
                <div className='mt-[30px]'>
                    <p className='fifth-description'>
                        Ethan was an entrepreneur, <br />
                        having co-founded a deepwater <br />
                        exploration drone company based <br />
                        in London that provides anyone <br />
                        with a cost-effective solution <br />
                        for exploring the ocean at depths <br />
                        that are usually only accessible <br />
                        by large organizations with a <br />
                        sizeable budget. He then turned <br />
                        venture capitalist and is currently <br />
                        responsible for Hanwha Group’s <br />
                        Southeast Asia Corporate Venture <br />
                        Capital arm.<br />
                    </p>
                </div>
            </div>
        </div>
        <div className='w-full lg:h-[600px] flex flex-col lg:flex-row pt-[130px] px-2 lg:px-[70px]'>
            <div className='fifth-avatar-div mt-[70px]'>
                <div className='w-[160px] h-[160px] items-start'>
                    <Image src={trevor} className='p-1 bg-cover rounded-full'/>
                </div>
                <div className='fifth-title-cap'>
                    <p className='fifth-title'>
                        Trevor Owens
                    </p>
                    <div className='flex'>
                        <p className='fifth-title-role'>
                            Advisor
                        </p>
                        <a href={'https://www.linkedin.com/in/owenstrevor'} target='_blank' rel="noreferrer" className='bg-white w-[20px] h-[20px] ml-[10px] mt-[10px] font-bold flex items-center justify-center'>
                            in
                        </a>
                    </div>
                </div>
                    <p className='fifth-description'>
                        Trevor is an entrepreneur, <br />
                        author, and investor in <br />
                        early-stage startups. He is <br />
                        currently a Managing Partner <br />
                        at Stacks Accelerator, where <br />
                        he invests in outstanding <br />
                        teams building Web3 startups <br />
                        on Bitcoin with the Stacks <br />
                        blockchain. Stacks Accelerator<br />
                        has a portfolio of nearly 50 <br />
                        startups spanning Defi, NFTs, <br />
                        and Web3.<br />
                    </p>
            </div>
            <div className='fifth-avatar-div'>
                <div className='fifth-avatar-img'>
                    <Image src={luis} className='p-1 bg-cover rounded-full'/>
                </div>
                <div className='fifth-title-cap'>
                    <p className='fifth-title'>
                        Luis Ramirez
                    </p>
                    <div className='flex'>
                        <p className='fifth-title-role'>
                            Advisor
                        </p>
                        <a href={'https://www.linkedin.com/in/luis-ramirez-5b6a6a238'} target='_blank' rel="noreferrer" className='bg-white w-[20px] h-[20px] ml-[10px] mt-[10px] font-bold flex items-center justify-center'>
                            in
                        </a>
                    </div>
                </div>
                    <p className='fifth-description'>
                        Luis Ramirez is an advisor  <br />
                        for the SpaceLabs team. He <br />
                        is also a Community Growth <br />
                        Lead at Astar Network, where<br />
                        he helps educate the community<br />
                        on ecosystem developments and <br />
                        form connections with various <br />
                        projects for the betterment of<br />
                        the ecosystem<br />
                    </p>
            </div>
            <div className='fifth-avatar-div mt-[50px]'>
                <div className='rounded-full w-[210px] h-[210px] items-start bg-cover mt-[10px] ml-[-25px]'>
                    <Image src={jamil} className='p-1 bg-cover rounded-full'/>
                </div>
                <div className='fifth-title-cap'>
                    <p className='fifth-title'>
                        Jamil Dhanani
                    </p>
                    <div className='flex'>
                        <p className='fifth-title-role'>
                            Advisor
                        </p>
                        <a href={'https://www.linkedin.com/in/jdhanani'} target='_blank' rel="noreferrer" className='bg-white w-[20px] h-[20px] ml-[10px] mt-[10px] font-bold flex items-center justify-center'>
                            in
                        </a>
                    </div>
                </div>
                    <p className='fifth-description'>
                        Jamil is the Founder and <br />
                        CEO of Gamma.io, the leading <br />
                        marketplace and creator <br />
                        platform for NFTs on Bitcoin, <br />
                        built on Stacks. Prior to <br />
                        founding Gamma, he worked <br />
                        as a Machine Learning <br />
                        Engineer and Researcher at <br />
                        Apple and studied Computer <br />
                        Science at Stanford and the <br />
                        University of Toronto.<br />
                    </p>
            </div>
        </div>
    </div>
  )
}

export default Fifth