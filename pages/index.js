import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import First from './components/First'
import Second from './components/Second'

export default function Home() {
  return (
    <div>
      <div>
        <First />
      </div>
      <div>
        <Second />
      </div>
    </div>
  )
}
