import React from 'react'
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";
import { useRouter } from 'next/router';
function promo() {
   
    const images = [
        { url: "https://raw.githubusercontent.com/peeweeid/BahanBlueheron/main/image/slider%201.jpg" },
        { url: "https://raw.githubusercontent.com/peeweeid/BahanBlueheron/main/image/slider%202.jpg" },
        { url: "https://raw.githubusercontent.com/peeweeid/BahanBlueheron/main/image/slider%203.jpg" },
      ];

  return (
    <div className='mt-0 px-2 py-1 lg:py-0 lg:px-0 w-full flex justify-center items-center '>
        <Slider imageList={images}  loop={true}
  autoPlay={true}
  autoPlayInterval={3000}
  className='w-full rounded-5xl'/>
    </div>
  )
}
export async function getStaticProps() {
  
    const rus = await fetch ('https://json-blueheron.vercel.app/promo/')
    const dataPromo = await rus.json()
    return {
        props :{
           
            dataPromo
        }
    }
  }
  

export default promo