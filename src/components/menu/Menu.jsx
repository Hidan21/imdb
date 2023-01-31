import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { moviesPelis } from '../../context/MovieContext';
import img1 from '../../assets/daniel1.svg';
import img2 from '../../assets/home-icon.svg';
import img3 from '../../assets/search-icon.svg';

const Menu = () => {
  const navigate = useNavigate();
  const { googleSingIn, user, logOut } = moviesPelis();

  //funcion para inciar sesion
  const handleGoogleSingIn = async () => {
    try {
      await googleSingIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/home');
    } else {
      navigate('/');
    }
  }, [user]);

  //cerrar sesion
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Nav>
      <Logo>
        <img src={img1} alt='' />
      </Logo>

      {!user && (
        <>
          {user?.displayName ? (
            <>
              <Login onClick={handleSignOut}>cerrar secion</Login>
              <LoginImg>
                <img src={user.photoURL} alt='logo' />
              </LoginImg>
            </>
          ) : (
            <Login onClick={handleGoogleSingIn}>iniciar sesion</Login>
          )}
        </>
      )}

      {user && (
        <>
          <NavMenu>
            <Link to='Home'>
              <img src={img2} alt='logo' />
              <span>Inicio</span>
            </Link>

            <Link to='buscar'>
              <img src={img3} alt='logo' />
              <span>Buscar</span>
            </Link>
          </NavMenu>
          {user?.displayName ? (
            <Usuario>
              <Login onClick={handleSignOut}>cerrar secion</Login>
              <LoginImg>
                <img src={user.photoURL} alt='logo' />
              </LoginImg>
            </Usuario>
          ) : (
            <Login onClick={handleGoogleSingIn}>iniciar sesion</Login>
          )}
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
  @media (max-width: 500px) {
    padding: 0;
  }
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 20px;
  min-height: 70px;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

const NavMenu = styled.div`
  display: flex;
  flex-wrap: wrap nowrap;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
  padding: 0px;
  margin: 0px;
  margin-right: auto;
  margin-left: 25px;
  position: relative;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-transform: uppercase;

    img {
      height: 28px;
      min-width: 28px;
      width: 28px;
      @media (max-width: 500px) {
        height: 22px;
        min-width: 22px;
        width: 22px;
      }
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 16px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      @media (max-width: 500px) {
        font-size: 0.9rem;
      }

      &::before {
        content: 'hello';
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: '';
        height: 2px;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
      }
    }
    &:hover {
      span:before {
        transform: scale(1);
        visibility: visible;
        opacity: 1;
      }
    }
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px 5px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
  @media (max-width: 500px) {
    font-size: 0.8rem;
    padding: 5px;
    margin: 28px;
  }
`;

const LoginImg = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid #f9f9f9;
  border-radius: 50%;
  max-width: 50px;
  max-height: 50px;
  margin-left: 10px;
  overflow: hidden;
  transition: all 0.2s ease 0s;
  img {
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Usuario = styled.div`
  display: flex;
`;

export default Menu;
