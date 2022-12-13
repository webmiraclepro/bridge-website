import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import First from './components/First'

export default function Home() {
  return (
    <div className="bg-[url('../public/image/Backgrouns-04.jpg')]">
      <First />
    </div>
  )
}
