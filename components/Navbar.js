import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LogoB from '../public/blueheron.svg'
import { AiFillHome} from "@react-icons/all-files/ai/AiFillHome";
import { AiOutlineLogin} from "@react-icons/all-files/ai/AiOutlineLogin";
import { BiFoodMenu } from "@react-icons/all-files/bi/BiFoodMenu";
import { RiFilePaperFill } from "@react-icons/all-files/ri/RiFilePaperFill";
function Navbar() {
  return (
    <>
    <div className=' w-full '>
            <div className='py-2 bg-white hidden lg:block  '>
            <div className='container px-4'>
                {/* lg form */}
                    <div className='lg:flex lg:flex-wrap '>
                            <div className='mx-auto flex items-center justify-center '>
                                <Link href={'/'} className='text-primary font-semibold mr-5 hover:text-secondary '>Menu</Link>
                                <Link href={'/Services'}  className='text-primary font-semibold mr-5 hover:text-secondary'>Service</Link>
                                <Link href={'/Riwayat'} className='text-primary font-semibold mr-5 hover:text-secondary'>Riwayat</Link>
                            </div>
                            <div className='mx-auto'>
                                <Image src={LogoB} alt='' width={150} height={50}/>
                            </div>
                            <div className='mx-auto flex items-center justify-center '>
                                <Link href={'/login'} className='px-4 py-2 bg-primary text-white rounded-lg mr-5 hover:bg-secondary'>Login</Link>

                            </div>
                    </div>
                 
                   
            </div>
            </div>
            
    </div>
       {/* responsive form */}
    <div className='py-4 lg:hidden bg-white block rounded-t-3xl  fixed w-full bottom-0 '>
        <div className='flex flex-wrap  lg:hidden '>
                <div className='mx-auto flex items-center justify-center '>
                    <Link href={'/'} className='text-primary font-semibold mr-5 hover:text-secondary text-2xl '><AiFillHome/></Link>
                
                </div>
                <div className='mx-auto flex items-center justify-center'>
                    <Link href={'/Services'} className='text-primary font-semibold mr-5 hover:text-secondary text-2xl'><BiFoodMenu/></Link>
                </div>
                <div className='mx-auto flex items-center justify-center '>

                    <Link href={'/Riwayat'} className='text-primary font-semibold mr-5 hover:text-secondary text-2xl'><RiFilePaperFill/></Link>
                </div>
                <div className='mx-auto flex items-center justify-center '>
                    
                     <Link href={'/login'} className='text-primary font-semibold mr-5 hover:text-secondary text-2xl'><AiOutlineLogin/></Link>
                </div>
        </div>
    </div>
</>
  )
}

export default Navbar