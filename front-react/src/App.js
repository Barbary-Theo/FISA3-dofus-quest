import './styleSheet/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './components/Login';

function DEV() {

  return (

      <BrowserRouter>
          <Routes>
              <Route path="/" exact element={<Login />}/>
          </Routes>
      </BrowserRouter>

  );

}

export default DEV;
