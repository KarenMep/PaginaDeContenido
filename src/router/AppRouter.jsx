import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { JavaPath } from '../components/JavaPath/JavaPath'
import { OrientacionObjetos } from '../components/JavaPath/OrientacionObjetos/OrientacionObjetos'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='javapath' element={<JavaPath/>}/>
            <Route path='orientaobj' element={<OrientacionObjetos/>}/>
            
            <Route path='/' element={<Navigate to='/javapath'/>}/>
        </Routes>
    </>
  )
}
