import React from "react";
import { Card, Image, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Loading } from "../Layout/Loading/Loading";


const ListaPeliculas = ({ titulo, movies }) => {
  if (!movies.result || movies.loading) return <Loading />;

  const peliculas = movies.result.results
    const navigate = useNavigate();
  return (
    <>
    <h3 className="mt-4 mb-4">{titulo} </h3>
      <Card className="lista-pelis">
        <Card.Body>
          {/* <Card.Title>{titulo}</Card.Title> */}

          <ListGroup>
            {peliculas.map((pelicula) => (
              <ListGroup.Item action key={pelicula.id} onClick={() =>navigate (`/pelicula/${pelicula.id}}`)} >
                <div className="ms-2 d-flex justify-content-between">
                <Image roundedCircle src={`https://image.tmdb.org/t/p/original/${pelicula.backdrop_path}`} fluid style={{heigth:'40px', width:'40px'}} />
                  <div className="fw-bold">{pelicula.original_title} </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default ListaPeliculas;
