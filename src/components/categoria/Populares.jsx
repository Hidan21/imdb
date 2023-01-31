import styled from 'styled-components';
import axios from 'axios';
import { moviesPelis } from '../../context/MovieContext';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Link, useParams } from 'react-router-dom';

const Populares = () => {
  const [Movies, setMovies] = useState([]);
  const { requests } = moviesPelis();

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  // console.log(Movies);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <h2>POPULARES</h2>
      <Slider {...settings}>
        {Movies.map((respuesta) => {
          return (
            <DataInfo key={respuesta.id}>
              <Link to={'/detalle/' + respuesta.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${respuesta.backdrop_path}`}
                  alt=''
                />
                {respuesta.title}
              </Link>
            </DataInfo>
          );
        })}
      </Slider>
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  padding: 5px;
  margin: 0px 20px;
  h2 {
    margin-bottom: 0px;
  }
  .slick-dots {
    display: none;
  }
  .slick-slide {
    /* margin: 5px; */
    padding: 0px 10px;
  }
  .slick-prev {
    top: 100px;
    left: 10px;
    z-index: 1;
    &::before {
      font-size: 1.8rem;
    }
  }
  .slick-next {
    top: 100px;
    right: 10px;
    z-index: 1;
    &::before {
      font-size: 1.8rem;
    }
  }
`;

const DataInfo = styled.div`
  text-align: center;

  a {
    padding: 10px;
    font-size: 1.4rem;
  }

  img {
    width: 100%;
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
`;

export default Populares;
