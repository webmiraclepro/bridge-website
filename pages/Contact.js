import Image from 'next/image'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

function Contact() {
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
                      <p className='text-[40px] text-[#42EBC8]'>
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
                    <div className=''>
                      <input placeholder='Name' 
                      className='w-[700px] h-[30px] rounded-full pl-[15px]'/>
                    </div>
                    <div className='mt-[15px]'>
                      <input placeholder='Email' 
                      className='w-[700px] h-[30px] rounded-full pl-[15px]'/>
                    </div>
                    <div className='flex'>
                      <div className='mt-[15px]'>
                        <input placeholder='I am a ...' 
                        className='w-[340px] h-[30px] rounded-full pl-[15px]'/>
                      </div>
                      <div className='mt-[15px] ml-[20px]'>
                        <input placeholder='Phone' 
                        className='w-[340px] h-[30px] rounded-full pl-[15px]'/>
                      </div>
                    </div>
                    <div className='mt-[15px]'>
                      <input  
                      className='w-[700px] h-[300px] rounded-[20px] pl-[15px]'/>
                    </div>
                    <div className='w-[300px] h-[100px] rounded-full flex items-center'>     
                      <button className='py-[7px] px-[20px] bg-[#42EBC8] rounded-full font-bold'
                            onClick={() => router.push('/Contact')}>
                            SUBMIT
                        </button>
                    </div>
                    <div className='w-[400px] h-[400px] ml-[500px] overflow-hidden rounded-full'>
                        <div className='w-[400px] h-[300px] overflow-hidden'>
                            <Image src='/image/Space_whales_NFT.jpg' width={400} height={400} className='rounded-full'/>
                        </div>
                    </div>
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