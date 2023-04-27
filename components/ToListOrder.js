import React from 'react'
import {collection, onSnapshot,orderBy,query} from "@firebase/firestore";
import { useEffect,useState } from 'react';
import moment from 'moment';
import { db } from '../firebase';
const ToListOrder = () => {
  const [todos,setTodos] = useState([])
  useEffect(()=>{
    const collectionRef = collection(db, "todos2")
    const q = query( collectionRef, orderBy("timestamp","desc"));
    const unsubscribe = onSnapshot(q,(querySnapshot)=>{
        setTodos(querySnapshot.docs.map(doc=>({...doc.data(),id: doc.id, timestamp: doc.data().timestamp?.toDate().getTime()

        })))
    });
return unsubscribe;
  },[])
  return (
    <>
    <div className='py-4 container'>
        {todos.map(todo => 
            <div key={todo.id} className=" bg-slate-100 px-4 mb-3">
                <img src={todo.img} />
                <h1 className=' text-xs text-right mb-5 py-2'>{moment(todo.timestamp).format("MMM dd,yyyy")}</h1>
                <h1 className='mb-2 text-center lg:text-2xl text-xl font-bold text-primary'>{todo.nama}</h1>
               <div className='flex flex-wrap'> 
                    <h1 className='px-2 font-bold text-primary'>Porsi</h1>
                    <h1 className='mb-2 font-bold text-primary'>{todo.porsi}</h1>
               </div>
               <div className='flex flex-wrap'>
               <h1 className='px-2 font-bold text-primary'>Paket</h1>
                <h1 className='mb-2  font-bold text-primary'>{todo.paket}</h1>
                </div>
                <div className='flex flex-wrap'>
               <h1 className='px-2 font-bold text-primary'>Pemesanan untuk tanggal</h1>
               <h1 className='mb-2 font-bold text-primary'>{todo.waktu}</h1>
                </div>
               
            </div>
            
            )}
           
    </div>
    
    </>
  )
}

export default ToListOrder