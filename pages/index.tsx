import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import Promo from '../components/promo.js'
import Footer from '../components/Footer.js'
import Navbar from '../components/Navbar.js'

interface UsersProps {
  dataMenu: Array<any>;
  dataPromo:Array<any>;
}
export default function Home(props: UsersProps) {
  const {dataMenu,dataPromo} = props;
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=''>
      <Navbar />
      </div>
      <section className='bg-secondary overflow-hidden z-30'>
      <div className=''>
     <Promo/>
      </div>
     </section>
      {/* menu panel */}
      <section className='bg-secondary py-4 overflow-hidden z-30'>
        <h1 className='text-primary text-lg font-bold text-center mb-5'>Menu</h1>
        <div className='container px-4 lg:px-0 lg:max-w-6xl '>
          <div className='flex flex-wrap lg:justify-between justify-center'>
            <div className='flex items-center justify-center lg:w-1/3 w-full'>
                <h1 className='bg-white hover:bg-slate-100 rounded-lg w-20 text-center mr-2 text-sm  text-primary shadow-lg cursor-pointer'>#Drink</h1>
                <h1 className='bg-white hover:bg-slate-100 rounded-lg w-20 text-center mr-2 text-sm text-primary shadow-lg cursor-pointer'>#Food</h1>
                <h1 className='bg-white hover:bg-slate-100 rounded-lg w-20 text-center mr-2 text-sm text-primary shadow-lg cursor-pointer'>#Dessert</h1>
                </div>
             <div className='lg:w-1/3 w-full mt-5 lg:mt-0'>
              <div className='flex justify-center'>
              <input type={'text'} className='h-8 w-56 rounded-bl-lg rounded-tl-lg shadow-lg focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500'/>
                <button className='bg-primary h-8 w-8 rounded-br-lg rounded-tr-lg shadow-lg text-white font-bold hover:bg-third'>G</button>
                </div>
             </div>
          </div>
          <div className='flex flex-wrap mt-5'>
              {dataMenu.map((user) => (
                <div key={user.id} id={user.type} className='w-1/2 lg:w-1/4 px-4 mb-2' onClick={()=> router.push (`/Menu/${user.id}`)}>
                  <div className='bg-white hover:bg-slate-100 rounded-xl shadow-xl mx-auto py-4 mb-4 lg:w-64 lg:h-60 cursor-pointer'>
                    <img src={user.Image} alt='' className='mx-auto lg:w-40 lg:h-40 w-20 h-20'/>
                    <h1 className='text-center text-lg font-bold'>{user.nama}</h1>
                    <h1 className='text-center text-base'>{user.harga}</h1>
                   
                  </div>
                </div>
            ))}
          </div>
         
          <div className='flex items-center justify-center lg:mb-5 mb-16'>
          <button className='px-4 py-2 w-52 bg-primary hover:bg-third rounded-lg text-white font-bold'>Load More</button>  
          </div>
         
        </div>
      </section>
      <div className='relative'>
      <Footer />
      </div>
    </>
  )  
}
export async function getStaticProps() {
  const res = await fetch ('https://json-blueheron.vercel.app/menu')
  const dataMenu = await res.json()
  const rus = await fetch ('https://json-blueheron.vercel.app/promo/')
  const dataPromo = await rus.json()
  return {
      props :{
          dataMenu,
          dataPromo
      }
  }
}
