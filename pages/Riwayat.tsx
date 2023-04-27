import Head from 'next/head'

import Footer from '../components/Footer.js'
import Navbar from '../components/Navbar.js'
import ToListOrder from '../components/ToListOrder.js'
export default function Riwayat() {
  

  return (
    <div className='bg-secondary '> 
      <Navbar/>
      <section className=''>
        <ToListOrder/>
      </section>
      <Footer/>
      </div>
  )
}

