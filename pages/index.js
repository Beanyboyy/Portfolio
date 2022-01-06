import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './navbar';
import Footer from './footer';

export default function Home() {
  return (
    <div className="bg-black w-screen h-screen">
      <Navbar/>
      <div>

      </div>
      <Footer/>
    </div>
  )
}
