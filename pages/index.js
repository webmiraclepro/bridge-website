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
    <div className='bg-black'>
      <div>
        <First />
      </div>
      <hr className='my-[0px]'/>
      <div>
        <Second />
      </div>
      <hr className='my-[0px]'/>
      <div>
        <Third />
      </div>
      <hr className='my-[0px]'/>
      <div >
        <Fourth />
      </div>
      <hr className='my-[0px]'/>
      <div>
        <Fifth />
      </div>
      <hr className='my-[0px]'/>
      <div>
        <Sixth />
      </div>
      <hr className='my-[1px]'/>
      <div>
        <Seventh />
      </div>
      <hr className='my-[0px]'/>
      <div>
        <Footer />
      </div>
    </div>
  )
}
