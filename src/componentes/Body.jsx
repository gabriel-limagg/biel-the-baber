import React from 'react'
import '../App.css'
import Whatsap from './Whatsap'
import Instagram from './Instagram'
import Localizaçao from './Localizaçao'


export default function Body() {
  return (
    <div className='bg-slate-950 w-screen h-screen '>
    <h1 className='text-slate-100 text-5xl m-auto text-center p-4 font-BebasNeue'>BIEL THE BARBER</h1>
    <div className='bg-slate-800 h-5/6 mt-0 m-10  rounded-2xl relative '>
    <h2 className='text-slate-200 text-2xl m-auto text-center p-12 font-RedRose'>Agende seu horário:</h2>
      <div className='m-auto flex justify-center pt-12'>
      <Whatsap />
      </div>
      <div className=' m-auto flex justify-center pt-16'>
        <Instagram/>
      </div>
      <div className='m-auto flex justify-center pt-16'>
        <Localizaçao/>
      </div>
      </div>
        
    </div>
  )
}
