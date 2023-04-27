import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
  
     
    <div className='bg-secondary absolute w-full '>
   {/* menu responsive */}
    
{/* lg footer */}
        <div className='hidden lg:block bg-primary py-4'>
            <div className='py-2'>
                <div className='bg-white w-full h-2 mb-2' />

                <div className='bg-white w-full h-2' />
                
            </div>
            <div className='container'>
                
                <div className='flex flex-wrap '>
                    <div className='w-full lg:w-1/3 mt-2 '>
                    <img src='https://raw.githubusercontent.com/peeweeid/BahanBlueheron/main/image/logo%20semua%20di%20kantor.png' className='w-52 mx-auto my-auto'/>
                        
                    </div>
                    <div className='w-full lg:w-1/3'>
                        <h1 className='text-center text-sm flex items-center justify-center mt-10 text-white font-medium'>© 2023 Bluheron.com by ASWgroup Tbk. | All rights reserved.</h1>
                    </div>
                    <div className='w-full lg:w-1/3'>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default Footer