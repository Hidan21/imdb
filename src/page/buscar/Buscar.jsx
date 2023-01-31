import React from 'react';
import styled from 'styled-components';
import BuscarPelicula from '../../components/BuscarPelicula.jsx/BuscarPelicula';

const Buscar = () => {
  return (
    <Container>
      <BuscarPelicula />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  display: block;
  top: 70px;
  padding: 0;
  &::after {
    background: url(./images/home-background.png) center center / cover
      no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default Buscar;
