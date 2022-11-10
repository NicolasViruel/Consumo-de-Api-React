import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ListaPeliculas from '../Componentes/ListaPeliculas/ListaPeliculas'
import SliderMovies from '../Componentes/SliderMovies'
import useFetch from '../Hooks/UseFetch'
import { URL_Api, API_KEY  } from '../Utils/constants'


const URL_Api_NEW_PELIS = `${URL_Api}/movie/now_playing?api_key=${API_KEY}&language=es-ES`

const URL_API_POPULAR_PELIS = `${URL_Api}/movie/popular?api_key=${API_KEY}&language=es-ES`

const URL_Api_TOP_PELIS = `${URL_Api}/movie/top_rated?api_key=${API_KEY}&language=es-ES`

const Home = () => {

    const newPeliculas = useFetch(URL_Api_NEW_PELIS)
    const popularPelis = useFetch(URL_Api_NEW_PELIS)
    const topPelis = useFetch(URL_Api_NEW_PELIS)
     

  return (
    <div>
        <SliderMovies movies={newPeliculas} />
        <Row>
            <Col>
                <ListaPeliculas titulo="Peliculas mas vistas" movies={popularPelis} />
            </Col>
            <Col>
                <ListaPeliculas titulo="Peliculas mejor puntuadas" movies={topPelis}/>
            </Col>
        </Row>
    </div>
  )
}

export default Home