import React from 'react'
import { Metodologias } from './Metodologias/Metodologias'
import { OrientacionObjetos } from './OrientacionObjetos/OrientacionObjetos'
import '../JavaPath/javapath.css'

export const JavaPath = () => {
  return (
    <>
        <div className="contenedor">
        {/* Metodologías */}
          <Metodologias/>   

        {/* ORientacion a objetos */}
          <OrientacionObjetos/>
        </div>

    </>
  )
}
