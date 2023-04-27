import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import Promo from '../components/promo.js'
import Footer from '../components/Footer.js'
import Navbar from '../components/Navbar.js'

interface UsersProps {

  dataService:Array<any>;
}
export default function Services(props: UsersProps) {
  const {dataService} = props;
  const router = useRouter();

  return (
    <div className='bg-secondary '> 
       <div className=''>
      <Navbar />
      </div>
      <section className='bg-secondary py-4 overflow-hidden -z-30  lg:h-[750px] '>
        <h1 className='text-primary lg:text-2xl text-lg font-bold text-center mt-5 lg:mt-16 mb-5 lg:mb-16'>Service BLueheron</h1>
        <div className='container px-4 lg:px-0 lg:max-w-6xl '>
          
          <div className='flex flex-wrap justify-center items-center '>
              {dataService?.map((user) => (
                <div key={user.id}  className='w-full lg:w-1/3 px-4 ' onClick={()=> router.push (`/Services/${user.id}`)} >
                  <div className='px-4 py-4 mb-4 rounded-lg bg-white hover:bg-slate-200 flex flex-wrap '>
                     
                        <img src={user.Image} alt='' className='mx-auto '/>

                  </div>
                  
                </div>
            ))}
          </div>
    
        </div>
      </section>
      <div className='relative'>
      <Footer />
      </div>
      </div>
  )
}
export async function getStaticProps() {

  const rus = await fetch ('https://json-blueheron.vercel.app/Service')
  const dataService = await rus.json()
  return {
      props :{
        
          dataService
      }
  }
}
