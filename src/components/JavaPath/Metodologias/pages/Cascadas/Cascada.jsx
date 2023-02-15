import React from 'react'
import './cascada.css'
import { Cascada_modelo } from './Cascada_modelo'

export const Cascada = () => {

  const mostrarCascada = () => {
    const x = document.getElementById('contendor_cascada')

    if(x.style.display === 'none'){
      x.style.display = 'block';
    }else{
      x.style.display = 'none';
    }
  }

  return (
    <>
      <button className="button2" onClick={mostrarCascada}>
        Cascada
      </button>


    </>
  )
}
