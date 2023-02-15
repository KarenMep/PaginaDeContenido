import React from 'react'
import { Agile } from './pages/Agile/Agile'
import { Cascada } from './pages/Cascadas/Cascada'
import { Comparacion } from './pages/Comparacion'

import '../javapath.css'
export const Metodologias = () => {

  const mostrarMetodologias = () => {
    const x = document.getElementById('metodologias_menu')

    if(x.style.display === 'none'){
      x.style.display = 'block';
    }else{
      x.style.display = 'none';
    }
  }

  return (
    <>
      <button className="button" onClick={mostrarMetodologias}>
        Metodologías de desarrollo de Software
      </button>

      <div id="metodologias_menu">
        <Cascada/>
        <Agile/>
        <Comparacion/>
      </div>

      
    </>
  )
}
