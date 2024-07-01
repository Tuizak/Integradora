import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from '../../NavBar/Navbar'
import Home from '../Pages/Home'
import Clientes from '../Pages/Clientes'
import AgregarClientes from '../Pages/AgregarClientes'
import Empleados from '../Pages/Empleados'
import Graficas from '../Pages/Graficas'
import Notificaciones from '../Pages/Notificaciones'
import Perfil from '../Pages/Perfil'
const Rutas = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Navbar/>}>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Clientes' element={<Clientes/>}/>
            <Route path='/AgregarClientes' element={<AgregarClientes/>}/>
            <Route path='/Empleados' element={<Empleados/>}/>
            <Route path='/Graficas' element={<Graficas/>}/>
            <Route path='/Notificaciones' element={<Notificaciones/>}/>
            <Route path='/Perfil' element={<Perfil/>}/>
            </Route>
        </Routes>
    </div>
  )
}

export default Rutas
