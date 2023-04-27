
import React from 'react'
import { useState } from 'react'
import { db } from '../../firebase'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import { collection, serverTimestamp,addDoc } from 'firebase/firestore'
import Footer from '../../components/Footer.js'
import Navbar from '../../components/Navbar.js'
const Pokeid= ({dataService}:any) => {
    const [todo,setTodo] = useState({nama:'',paket:'',porsi: '',waktu:'',img:''})
    
    const onSubmit = async () => {
        const collectionRef = collection(db, "todos2")
        const docRef = await addDoc(collectionRef, {...todo,timestamp:
        serverTimestamp( ) })
        setTodo({nama:'',paket:'',porsi:'',waktu:'',img:''})
     
    }
  return (  
    <>
         <div className=''>
      <Navbar />
      </div>
        <div className='bg-secondary h-[900px] lg:h-[750px] '>
       
            <div className='container bg-secondary'>
                <div className='text-center lg:py-10 py-5 font-bold text-lg lg:text-2xl text-primary'>
                    <h1 className='lg:block hidden'>Service BLueheron</h1>
                    
                </div>
                <form className="form" onSubmit={event => { event.preventDefault(); onSubmit(); }} data-validation-minmaxlength-message="This message will override the default rule message, and only use [minToken].">  
                <fieldset>
                <div className='flex flex-wrap items-center justify-center py-4 '>  
                    <div className='lg:w-1/2 w-full h-96 mt-2 lg:mt-16'>
                        <h1 className='text-center font-bold text-primary text-xl'>{dataService.nama}</h1>
                        <img src={dataService.Image}  alt="" className=' lg:w-[350px] lg:h-auto mx-auto  '/>
                    </div>
                    <div className='lg:w-1/2 w-full mt-2 lg:mt-16'>
                        <div className=' py-4 px-4 w-[300px] lg:w-[400px] mx-auto bg-white'>
                            <h1 className='text-center text-sm'>{dataService.diskripsi}</h1>
                                
                                <input type="text" id="img"  value={dataService.Image}
                                    onChange={e => setTodo({...todo, img: e.target.value})}  
                                    className="mt-4 px-3 py-2 hidden bg-secondary border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500  w-full  sm:text-sm focus:ring-1" placeholder="nama pemesan" />

                                <input type="text" id="nama"  value={todo.nama}
                                    onChange={e => setTodo({...todo, nama: e.target.value})} 
                                    required={true} minLength={3} maxLength={10} 
                                    className="mt-4 px-3 py-2 bg-secondary border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full  sm:text-sm focus:ring-1" placeholder="nama pemesan" />
                                

                                <input type="text" id="porsi"  value={todo.porsi}
                                    onChange={e => setTodo({...todo, porsi: e.target.value})} 
                                    required={true} minLength={1} maxLength={4} 
                                    className="mt-4 px-3 py-2 bg-secondary border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full  sm:text-sm focus:ring-1" placeholder="banyak porsi" />
                                
                                
                                <input type="date" id="waktu"  value={todo.waktu}
                                    onChange={e => setTodo({...todo, waktu: e.target.value})} 
                                      required={true} minLength={1} maxLength={400} 
                                    className="mt-4 px-3 py-2 bg-secondary border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full  sm:text-sm focus:ring-1" placeholder="untuh tanggal" />

                                <select id="underline_select" value={todo.paket} onChange={e => setTodo({...todo, paket: e.target.value})}  className="block py-2.5 px-0 w-full text-sm mt-5 text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option selected >Pilih Paket</option>
                                    {
                                    dataService.paket.map((type:any)=>{
                                        return (
                                                  <option value={type}  key={type}> {type} </option>
                                                )
                                            }
                                                
                                        )
                                    }
                                </select>
                            <div className='flex items-center justify-center'>
                                <button type='submit' className='text-xl font-bold rounded-lg  bg-primary hover:bg-third px-8 py-2 mt-5 w-full text-white'> Order </button>
                            </div>
                        </div>
                        
                    </div>     
                </div> 
                </fieldset>
                </form>
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
        const res = await fetch(`https://json-blueheron.vercel.app/Service/${query.id}`);
        const dataService = await res.json();
        
        return {
            props: { 
                dataService,
            }
        }
    } catch (err) {
        console.error(err);
    }
}

export default Pokeid
