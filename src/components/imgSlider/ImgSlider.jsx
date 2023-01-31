import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ImgSlider = () => {
  //configuraciones del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <Carrusel {...settings}>
        <Wrap>
          <img
            src='https://www.themoviedb.org/t/p/original/2KVXWp6pEtnhwafW5itvct35yCf.jpg'
            alt=''
          />
          <Link to={'/detalle/640146'}>
            <h2>Ant-Man and the Wasp: Quantumania</h2>
            <button>VER INFO</button>
          </Link>
        </Wrap>
        <Wrap>
          <img
            src='https://www.themoviedb.org/t/p/original/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg'
            alt=''
          />
          <Link to={'/detalle/505642'}>
            <h2>Black Panther: Wakanda Forever</h2>
            <button>VER INFO</button>{' '}
          </Link>
        </Wrap>
        <Wrap>
          <img
            src='https://www.themoviedb.org/t/p/original/4MS3PY7syZUULFGlujYeqQqnIoG.jpg'
            alt=''
          />
          <Link to={'/detalle/597'}>
            <h2>Titanic</h2>
            <button>VER INFO</button>
          </Link>
        </Wrap>
        <Wrap>
          <img
            src='https://www.themoviedb.org/t/p/original/ymT2Iy0VbSlQIEVOrmgDqrfY9vj.jpg'
            alt=''
          />
          <Link to={'/detalle/536554'}>
            <h2>M3GAN</h2>
            <button>VER INFO</button>
          </Link>
        </Wrap>
      </Carrusel>
    </div>
  );
};

const Carrusel = styled(Slider)`
  margin-top: 20px;
  padding: 0px 30px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-arrow .slick-prev {
    left: -200px;
    z-index: 1;
    padding: 60px 200px 60px 20px;
    border: 1px solid red;
    opacity: 0;
  }
  .slick-arrow .slick-next {
    right: -200px;
    z-index: 1;
    padding: 60px 200px 60px 20px;
    border: 1px solid red;
    opacity: 0;
  }
  .slick-dots {
    display: block;
    list-style: none;
    position: absolute;
    text-align: center;
    bottom: 0px;
    margin: 0;
    padding: 20px;
    right: 8px;
    width: 100%;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  padding: 8px;

  img {
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    display: block;
    position: relative;
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
    height: 400px;
    @media (max-width: 500px) {
      height: 300px;
    }
  }
  a {
    position: absolute;
    top: 35%;
    left: 5%;
    button {
      width: 15rem;
      padding: 10px;
      font-size: 1.5rem;
      border-radius: 10px;
      border: none;
      outline: none;
      background-color: #ffffffb3;
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
      transition: all 0.5s;
      &:hover {
        background-color: white;
        cursor: pointer;
      }
      @media (max-width: 500px) {
        width: 100%;
      }
    }
    h2 {
      font-size: 2.5rem;
      @media (max-width: 500px) {
        font-size: 1.5rem;
      }
    }
  }
`;

export default ImgSlider;
