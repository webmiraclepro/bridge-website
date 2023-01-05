import Image from 'next/image'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {useState} from 'react'
import { useEffect, useRef } from "react"

function Contact() {
  const [open, setOpen] = useState(false);
  const [listValue, setListValue] = useState();
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
    <div>
      <div className="w-full h-[1110px] bg-[url('../public/image/Backgrouns-04.jpg')] bg-cover flex-col">
        <div >
            <Header />
        </div>
        <div>
          <div className='flex'>
              <div className='flex-col mt-[120px] justify-center items-center ml-[70px]'>
                  <div className=''>
                      <p className='text-[40px] text-[#42EBC8] font-Exo2'>
                          BRIDGE <br />
                          YOUR NFT<br />
                          COLLECTION<br />
                      </p>
                  </div>
                  <div className='mt-[100px] ml-[-250px]'>
                      <div className='w-[450px] h-[450px]'>
                          <Image src='/image/Crash_Punk_NFT.jpg' width={450} height={450} className='rounded-full'/>
                      </div>
                  </div>
              </div>
              <div className='flex-col items-start justify-center ml-[130px] mt-[130px]'>
                <div className='flex-col ml-[50px]'>
                  <form action='https://formspree.io/f/xpzezdew' method='post'>
                    <div className=' text-black'>
                      <input placeholder='Name' name='Name' 
                      className='w-[700px] h-[30px] rounded-full pl-[15px]'/>
                    </div>
                    <div className='mt-[15px]'>
                      <input placeholder='Email' name='From'
                      className='w-[700px] h-[30px] rounded-full pl-[15px]'/>
                    </div>
                    <div className='flex'>
                      <div className='mt-[15px]'>
                        <div className="relative z-40 w-[340px]" ref={ref} onClick={e => {e.stopPropagation()}}>
                          <input 
                            placeholder='I am a ...'
                            value={listValue}
                            onChange={(e) => onChange(e.target.value)}
                            onClick={() => setOpen(true)}
                            className="w-4px px-2 py-1 text-right text-black bg-white rounded-full w-[340px]" />
                            {
                              open &&
                              <div className="absolute mt-[30px] rounded-lg px-[8px] mt-[-2px] flex flex-col bg-white w-full text-right px-[8px] rounded-b-[4px] cursor-pointer" style={{color: "grey"}}>             
                                <div onClick={() => {setOpen(false), setListValue("Collection")}} name="Collection">
                                    Collection
                                </div>
                                <div onClick={() => {setOpen(false), setListValue("NFT market")}} name="NFT market">
                                    NFT market
                                </div>
                                <div onClick={() => {setOpen(false), setListValue("Blockchain")}} name="Blockchain">
                                    Blockchain
                                </div>
                                <div onClick={() => {setOpen(false), setListValue("Other")}} name="Other">
                                    Other
                                </div>
                              </div>
                            }
                      </div>
                      </div>
                      <div className='mt-[15px] ml-[20px]'>
                        <input placeholder='Phone' name='Phone'
                        className='w-[340px] h-[30px] rounded-full pl-[15px]'/>
                      </div>
                    </div>
                    <div className='mt-[15px]'>
                      <textarea name='Message' className='w-[700px] h-[300px] rounded-[20px] pl-[15px] text-left' />
                    </div>
                    <div className='w-[300px] h-[100px] rounded-full flex items-center'>     
                      <button type='submit' className='py-[7px] px-[20px] bg-[#42EBC8] rounded-full font-bold'>
                        SUBMIT
                      </button>
                    </div>
                    <div className='w-[400px] h-[400px] ml-[500px] overflow-hidden rounded-full'>
                        <div className='w-[400px] h-[300px] overflow-hidden'>
                            <Image src='/image/Space_whales_NFT.jpg' width={400} height={400} className='rounded-full'/>
                        </div>
                    </div>
                  </form>
                </div>
              </div>
          </div>
        </div>
        <hr />
      </div>
      <div className='bg-black'>
        <Footer />
      </div>
    </div>
  )
}

export default Contact