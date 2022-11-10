import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { API_KEY, URL_Api } from "../Utils/constants";

const Estrenos = () => {
  const [listaPeliculas, setListaPeliculas] = useState([]);
  const [page, setPage] = useState(1);

  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${URL_Api}/movie/popular?api_key=${API_KEY}&lenguage=es-ES&page=${page}`
      );
      const data = await response.json();
      setListaPeliculas(data);
    })();
  }, [page]);

  return (
    <>
      <Row>
        <Col>
          <h1>Nuevos Lanzamientos</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row className="mt-4">
            {
            listaPeliculas?.results?.length > 0 && listaPeliculas?.results?.map(peli => (
              <Col key={peli.id} xs={4}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${peli.backdrop_path}`} />
                  <Card.Body>
                    <Card.Title>{peli.original_title} </Card.Title>
                    <Card.Text>{peli.overview} </Card.Text>
                    <Button variant="primary" onClick={() => navigate (`/pelicula/${peli.id}`)}>Ver mas</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
            }
          </Row>
        </Col>
        <Col xs={12}>Paginacion</Col>
      </Row>
    </>
  );
};

export default Estrenos;
