import { createContext, useContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { auth } from '../db/firebase';

export const PeliculasContext = createContext();

//contexto

const PeliculasProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [login, setlogin] = useState(false);

  const key = '5ac15b62fc4ddb6c554b0c189a93ff43';
  const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestdetalles: `https://api.themoviedb.org/3/movie/`,
    requestBusqueda: `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=`,
  };

  //verificar usuario
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      user ? setlogin(true) : setlogin(false);
      // console.log(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //cerrar usuario
  const logOut = () => {
    signOut(auth);
  };

  const googleSingIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  return (
    <PeliculasContext.Provider
      value={{ googleSingIn, user, logOut, requests, key }}
    >
      {children}
    </PeliculasContext.Provider>
  );
};

export const moviesPelis = () => {
  return useContext(PeliculasContext);
};

export default PeliculasProvider;
