
import React from 'react'
import Footer from '../../components/Footer.js'
import Navbar from '../../components/Navbar.js'
const Pokeid= ({dataMenu}:any) => {
    
  return (  
    <>
         <div className=''>
      <Navbar />
      </div>
        <div className='bg-secondary h-[900px] lg:h-[800px] '>
            <div className='container '>
                <div className='flex flex-wrap items-center justify-center py-4 '>
                    <div className='lg:w-1/2 w-full h-96 lg:translate-y-1/2'>
                        <img src={dataMenu.Image} alt="" className='w-72 h-80 lg:w-[350px] lg:h-auto mx-auto pt-16 pb-0 mb-48 '/>
                    </div>
                    <div className='lg:w-1/2 w-full lg:translate-y-1/2 '>
                        <div className='bg-white rounded-lg py-4 px-4 w-[300px] lg:w-[400px] mx-auto'>
                            <div className='flex justify-between px-4 mt-4'>
                                <h1 className='text-center text-primary text-lg lg:text-xl font-bold '>{dataMenu.nama}</h1>
                                <h1 className='text-center text-primary text-lg lg:text-xl font-medium'>{dataMenu.harga}</h1>
                            </div>
                            <p className='px-4 text-xs text-justify mt-4'>{dataMenu.diskripsi}</p>
                            <div className='flex flex-wrap justify-center items-center mt-5 mx-4'>
                               <div className='mr-2'> <button className='bg-secondary rounded-xl px-4 py-2 text-xl font-bold text-primary'>-</button></div>
                              <div className='mr-2'>  <h1 className='text-xl font-bold text-primary'>0</h1></div>
                               <div className='mr-2'> <button className='bg-secondary rounded-xl px-4 py-2 text-xl font-bold text-primary'>+</button></div>
                            </div>
                            <div className='flex items-center justify-center'>
                            <button className='text-xl font-bold rounded-lg bg-primary px-8 py-2 mt-5 w-full text-white'> add chart </button>
                            </div>
                        </div>
                    </div>     
                </div> 
            </div>  
        </div>
        <div>
            <Footer/>
        </div>
    </>
  )
}


export async function getServerSideProps({ query }:any) {
    try {
        const res = await fetch(`https://json-blueheron.vercel.app/menu/${query.id}`);
        const dataMenu = await res.json();
        
        return {
            props: { 
                dataMenu,
            }
        }
    } catch (err) {
        console.error(err);
    }
}

export default Pokeid