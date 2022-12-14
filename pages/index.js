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
      <div>
        <Second />
      </div>
      <div>
        <Third />
      </div>
      <div>
        <Fourth />
      </div>
      <div>
        <Fifth />
      </div>
      <div>
        <Sixth />
      </div>
      <div>
        <Seventh />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
