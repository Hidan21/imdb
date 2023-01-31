import axios from 'axios';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { moviesPelis } from '../../context/MovieContext';

const Detalle = () => {
  const [Movies, setMovies] = useState(null);

  const { key } = moviesPelis();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
      )
      .then((response) => {
        setMovies(response.data);
      });
  }, [id]);
  // console.log(Movies);

  return (
    <Container>
      {!Movies ? (
        ''
      ) : (
        <div>
          <div className='blur'></div>
          <img
            className='bg-image'
            src={`https://image.tmdb.org/t/p/original/${Movies.backdrop_path}`}
            alt=''
          />
          <DetallesPeli>
            <div className='img-pelicula'>
              {!Movies ? (
                ''
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/original/${Movies.poster_path}`}
                  alt=''
                />
              )}
            </div>
            <div className='movie-detalle'>
              {!Movies ? (
                ''
              ) : (
                <>
                  <h1>{Movies.title}</h1>
                  <p>{Movies.overview}</p>
                  <p>
                    {' '}
                    <span>lanzamiento</span>: {Movies.release_date}
                  </p>
                </>
              )}
            </div>
          </DetallesPeli>
        </div>
      )}
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  height: 100vh;
  display: block;
  padding: 0;

  .bg-image {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    object-fit: cover;
  }
  .blur {
    position: absolute;
    background-color: #292f4293;
    width: 100vw;
    min-height: 110vh;
    backdrop-filter: blur(3px);
  }
`;

const DetallesPeli = styled.div`
  position: absolute;
  top: 120px;
  left: 20px;
  right: 20px;
  width: 90%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  img {
    max-width: 330px;
    width: 100%;
    object-fit: cover;

    /*   @media (max-width: 600px) {
      width: 100%;
    } */
  }
  .movie-detalle {
    width: 50%;
    padding: 5px;
    text-align: center;
    @media (max-width: 500px) {
      width: 100%;
    }
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.5rem;
      font-weight: 500;
      letter-spacing: 2px;
      span {
        font-weight: bold;
      }
    }
  }
`;
export default Detalle;
