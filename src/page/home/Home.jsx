import styled from 'styled-components';
import ImgSlider from '../../components/imgSlider/ImgSlider';
import Populares from '../../components/categoria/Populares';
import MasValoradas from '../../components/categoria/MasValoradas';
import Tendencia from '../../components/categoria/Tendencia';
import Proximos from '../../components/categoria/Proximos';
const Home = () => {
  // console.log(peliculas);
  //VARIABLES DE ESTADO

  return (
    <Container>
      <ImgSlider />
      <Populares />
      <MasValoradas />
      <Tendencia />
      <Proximos />
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
export default Home;
