import Footer from './components/Footer'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'
import Fourth from './components/Fourth'
import Fifth from './components/Fifth'
import Sixth from './components/Sixth'
import Seventh from './components/Seventh'

export default function Home() {
  return (
    <div className='flex flex-col bg-black mx-auto'>
        <First />
      <hr className='my-[0px]'/>
        <Second />
      <hr className='my-[0px]'/>
        <Third />
      <hr className='my-[0px]'/>
        <Fourth />
      <hr className='my-[0px]'/>
        <Fifth />
      <hr className='my-[0px]'/>
        <Sixth />
      <hr className='my-[1px]'/>
        <Seventh />
      <hr className='my-[0px]'/>
        <Footer />
    </div>
  )
}
