import Image from 'next/image'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react'
import { useEffect, useRef } from "react"
import { Message, useToaster, Button, Notification } from 'rsuite';

function Contact() {
  const [open, setOpen] = useState(false);
  const [listValue, setListValue] = useState();
  const ref = useRef();
  const toaster = useToaster();

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

  async function handleSubmit(event) {
    event.preventDefault();

    var data = new FormData(event.target);

    fetch(event.target.action, {
      method: event.target.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        toaster.push(
          <Notification showIcon type="success">
            Your Email was sent successfully.
          </Notification>, { placement: 'topEnd' })
      } else {
        toaster.push(
          <Notification showIcon type="error">
            Failed to send Email.
          </Notification>, { placement: 'topEnd' })
      }
    }).catch(error => {
      console.log(error);
    });
  }

  return (
    <div className='bg-black'>
      <div className="w-full lg:h-[1110px] bg-[url('../public/image/Backgrouns-04.jpg')] bg-cover flex-col ">
        <Header />
        <div className='flex flex-col lg:flex-row'>
          <div className='flex-col pt-20 lg:pt-32 text-center lg:text-left justify-center items-center lg:ml-[70px]'>
            <p className='text-[40px] text-[#42EBC8] font-Exo2 tracking-2'>
              BRIDGE <br />
              YOUR NFT<br />
              COLLECTION<br />
            </p>
            <div className='mt-[100px] ml-[-250px] hidden lg:flex'>
              <div className='w-[450px] h-[450px]'>
                <Image src='/image/Crash_Punk_NFT.jpg' width={450} height={450} className='rounded-full' />
              </div>
            </div>
          </div>
          <div className='flex-col items-start justify-center lg:ml-[130px] lg:mt-[130px] mx-auto'>
            <div className='flex-col lg:ml-[50px]'>
              <form action='https://formspree.io/f/xpzezdew' onSubmit={handleSubmit} method='post'>
                <div className=' text-black'>
                  <input placeholder='Name' name='Name'
                    className='contact-input-long' />
                </div>
                <div className='pt-[15px]'>
                  <input placeholder='Email' name='From'
                    className='contact-input-long' />
                </div>
                <div className='flex'>
                  <div className='pt-[15px]'>
                    <div className="relative z-40 lg:w-[340px]" ref={ref} onClick={e => { e.stopPropagation() }}>
                      <input
                        placeholder='I am a ...'
                        value={listValue}
                        onChange={(e) => onChange(e.target.value)}
                        onClick={() => setOpen(true)}
                        className="w-4px px-2 py-1 text-right text-black bg-white rounded-full lg:w-[340px] h-[40px]" />
                      {
                        open &&
                        <div className="absolute mt-[3px] rounded-lg px-[8px] flex flex-col bg-white w-full text-right rounded-b-[4px] cursor-pointer" style={{ color: "black" }}>
                          <div onClick={() => { setOpen(false), setListValue("Collection") }} name="Collection" className='pt-[20px]'>
                            Collection
                          </div>
                          <hr />
                          <div onClick={() => { setOpen(false), setListValue("NFT market") }} name="NFT market">
                            NFT market
                          </div>
                          <hr />
                          <div onClick={() => { setOpen(false), setListValue("Blockchain") }} name="Blockchain">
                            Blockchain
                          </div>
                          <hr />
                          <div onClick={() => { setOpen(false), setListValue("Other") }} name="Other">
                            Other
                          </div>
                          <hr />
                        </div>
                      }
                    </div>
                  </div>
                  <div className='pt-[15px] pl-[20px]'>
                    <input placeholder='Phone' name='Phone'
                      className='lg:w-[340px] h-[40px] rounded-full pl-[15px]' />
                  </div>
                </div>
                <div className='mt-[15px]'>
                  <textarea name='Message' className='w-full lg:w-[700px] h-[300px] rounded-[20px] pl-[15px] text-left' />
                </div>
                <div className='justify-center lg:justify-start lg:w-[300px] h-[100px] rounded-full flex items-center'>
                  <button type='submit' className='py-[7px] px-[20px] bg-[#42EBC8] rounded-full font-bold text-black tracking-1'>
                    SUBMIT
                  </button>
                </div>
                <div className='lg:w-[400px] h-[400px] lg:ml-[500px] overflow-hidden rounded-full hidden lg:flex'>
                  <div className='lg:w-[400px] h-[300px] overflow-hidden'>
                    <Image src='/image/Space_whales_NFT.jpg' width={400} height={400} className='rounded-full' />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact