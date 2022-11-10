import React from 'react'
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'
import Home from '../Pages/Home'
import Error404 from '../Pages/Error404'
import Navegacion from '../Componentes/Layout/Navegacion'
import Footer from '../Componentes/Layout/Footer/Footer'
import Estrenos from '../Pages/Estrenos'
import Buscador from '../Pages/Buscador'
import Popular from '../Pages/Popular'
import Pelicula from '../Pages/Pelicula'
import Container from 'react-bootstrap/Container';

const RouterPrincipal=()=> {
  return (
    <Router>

    {/* navbar */}
    <Navegacion/>
     <Container fluid>
        <Routes>
            <Route path='' element={<Home/>} />
            <Route path='/estrenos' element={<Estrenos/>} />
            <Route path='/search' element={<Buscador/>} />
            <Route path='/popular' element={<Popular/>} />
            <Route path='/pelicula/:id' element={<Pelicula/>} /> 



            <Route path='/*' element={<Error404/>} />
        </Routes>
    </Container>
    {/* contenido de pagina */}
   

    {/* footer */}
    <Footer/>
    </Router>
  )
}

export default RouterPrincipal