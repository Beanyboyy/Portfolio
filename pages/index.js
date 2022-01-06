import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './navbar';
import Footer from './footer';

export default function Home() {
  return (
    <div className="bg-black w-screen h-screen">
      <Navbar/>
      <div className="text-white absolute top-1/2 left-1/2 flex xl:hidden">
        <div>
          Beanny
        </div>
        <div>
          Boy
        </div>
      </div>
      <Footer/>
    </div>
  )
}
