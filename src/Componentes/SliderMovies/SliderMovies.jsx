import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import { Loading } from "../Layout/Loading/Loading";

const SliderMovies = ({ movies }) => {
    if( !movies.result || movies.loading ) return <Loading/>;

  const peliculas = movies?.result?.results || []
  
//   console.log(movies.result.results);

  return (
    <Carousel>
      {peliculas.map((pelicula) =>{
        return (
            <Carousel.Item key={pelicula.id} interval={2000} >
            <img
              className="d-block w-100"
              src={`https://image.tmdb.org/t/p/original/${pelicula.backdrop_path}`}
              alt={pelicula.original_title}
            />
            <Carousel.Caption>
              <h3>{pelicula.original_title} </h3>
              <p>{pelicula.overview}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
        
      
    </Carousel>
  );
};

export default SliderMovies;
