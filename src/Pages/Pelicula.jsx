import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/UseFetch';
import { URL_Api, API_KEY  } from '../Utils/constants'
import { Loading } from "../Componentes/Layout/Loading/Loading";
import { Button, Col, Row  } from 'react-bootstrap';
import moment from 'moment/moment';
import ModalVideo from '../Componentes/ModalVideo.jsx/ModalVideo';

const Pelicula = () => {
  const params = useParams();
  const [showModal, setShowModal] = useState(false);  
  

    const { id}   = params;

    
    
    const URL_Api_PELICULA = `${URL_Api}/movie/${id}?api_key=${API_KEY}&language=es-ES`
    
    const URL_VIDEO = `${URL_Api}/movie/${id}/videos?api_key=${API_KEY}&language=es-ES`

    const video = useFetch(URL_VIDEO)

    // console.log(URL_Api_PELICULA);
    const pelicula = useFetch(URL_Api_PELICULA)

    if( !pelicula.result || pelicula.loading ) return <Loading/>;
    console.log(pelicula);

     const peli = pelicula.result;


     const openModal = () => setShowModal(true)


     const closeModal = () =>setShowModal(false)

     
  console.log(peli);


  return (
    <div className="pelicula" style ={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${peli.backdrop_path}')`}}>
      <div className='dark-pelicula'/>
      <Row className='d-flex justify-content-center align-items-center '>
        <Col md={6} className='pelicula-poster d-flex justify-content-center align-items-center mt-5 ' >


          <div  style ={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${peli.poster_path}')` }} /> 
        </Col>

        <Col md={6} className="pelicula-info">
          <div className="pelicula-header">
            <h1 style={{zIndex:1}}> {peli.title} <span>{moment(peli.release_date, "YYYY-MM-DD").format("YYYY")} </span> </h1>
            
          </div>
          <div className="pelicula-content" style={{zIndex:1}}>
              <h3>General</h3>
              <p>{peli.overview} </p>

              <h3>Generos</h3>
              <ul>
                {
                  peli?.genres.map((genero) =>(
                    <li key={genero.id}>{genero.name}</li>
                  ))
                }
              </ul>
            
            

                {
                  video.result.results && (
                    <>
                      <Button onClick={openModal} >Ver Trailer</Button>
                      <ModalVideo 
                      site = {video.result.results[0].site}
                      videoKey = {video.result.results[0].key}
                      show={showModal}
                      closeModal={closeModal}/>
                    </>
                  )
                }

              
            
            </div>
        </Col>

      </Row>
    </div>
  )
}

export default Pelicula