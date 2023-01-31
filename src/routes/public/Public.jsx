import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Menu from '../../components/menu/Menu';
import Buscar from '../../page/buscar/Buscar';
import Detalle from '../../page/detalle/Detalle';
import Home from '../../page/home/Home';
import Login from '../../page/login/Login';

function Public() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/buscar' element={<Buscar />} />
          <Route path='detalle/:id' element={<Detalle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Public;
