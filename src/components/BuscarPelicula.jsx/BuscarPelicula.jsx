import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { moviesPelis } from '../../context/MovieContext';

const BuscarPelicula = () => {
  const [Movies, setMovies] = useState([]);
  const [query, setquery] = useState('');
  const { requests } = moviesPelis();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //&query=
  useEffect(() => {
    if (query != '') {
      axios.get(requests.requestBusqueda + query).then((response) => {
        setMovies(response.data.results);
      });
    } else {
      axios.get(requests.requestPopular).then((response) => {
        setMovies(response.data.results);
      });
    }
  }, [query]);

  return (
    <Container>
      <form action='' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='buscar peliculas'
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
      </form>
      <ContainerGrid>
        {Movies.map((response) => {
          return (
            <div key={response.id}>
              <Link key={response.id} to={'/detalle/' + response.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${response.poster_path}`}
                  alt=''
                />
              </Link>
            </div>
          );
        })}
      </ContainerGrid>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 50px;
  text-align: center;
  img {
    width: 250px;
    margin: 15px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
      rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
    cursor: pointer;
    margin-bottom: 15px;
    transition: transform 250ms ease-in-out, border 250ms ease-in-out,
      box-shadow 250ms ease-in-out;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.8) 0px 40px 58px -16px,
        rgba(0, 0, 0, 0.72) 0px 30px 22px -10px;
      transform: scale(1.05);
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }

  input {
    width: 50%;
    padding: 0.9rem;
    font-size: 1.5rem;
    background-color: rgba(255, 255, 255, 0.233);
    border-radius: 0.5rem;
    border: none;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
      rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
    color: #fff;
    font-weight: 500;
    margin-bottom: 50px;
    @media (max-width: 500px) {
      width: 90%;
    }
  }
  button {
    padding: 0.9rem;
    font-size: 1.3rem;
    margin-left: 1rem;
    background-color: rgba(250, 246, 246, 0.774);
    border-radius: 0.5rem;
    border: none;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
      rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
    color: #030000;
    font-weight: bold;
    transition: all 0.5s;
    &:hover {
      background-color: rgba(255, 255, 255, 0.932);
      font-size: 1.4rem;
      cursor: pointer;
    }
  }
`;

const ContainerGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default BuscarPelicula;
