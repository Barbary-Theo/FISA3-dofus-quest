import './styleSheet/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './components/Login';
import Index from './components/Index';
import Quests from './components/Quests';
import Succes from './components/Succes';

function DEV() {

  return (

      <BrowserRouter>
          <Routes>
              <Route path="/" exact element={<Login />}/>
              <Route path="/index" exact element={<Index />}/>
              <Route path="/all" exact element={<Quests />}/>
              <Route path="/succes" exact element={<Succes />}/>
          </Routes>
      </BrowserRouter>

  );

}

export default DEV;
