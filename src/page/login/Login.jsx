import React from 'react';
import styled from 'styled-components';
import { moviesPelis } from '../../context/MovieContext';
import img1 from '../../assets/cta-logo-two.png';
import img3 from '../../assets/inicio-logo.png';
import img2 from '../../assets/login-background.jpg';

const Login = () => {
  const { googleSingIn } = moviesPelis();

  //funcion para inciar sesion
  const handleGoogleSingIn = async () => {
    try {
      await googleSingIn();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Content>
        <CTA>
          <CTAlogoOne src={img3} alt='logo' />
          <SingUp onClick={handleGoogleSingIn}>inciar secion</SingUp>
          <Descriptions>
            obtener acceso a informacion de las peliculas y series de diversas
            plataformas como NETFLIX, DYSNEY, HBO, y series de tv
          </Descriptions>
          <CTAlogotwo src={img1} alt='logo' />
        </CTA>
        <BgImagen />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  margin-bottom: 10vh;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  height: 100%;
`;

const BgImagen = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${img2});
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const CTAlogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
  object-fit: cover;
`;

const SingUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 20px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
    cursor: pointer;
  }
`;

const Descriptions = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 13px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTAlogotwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;
export default Login;
