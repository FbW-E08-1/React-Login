import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../components/Login';
import LoggedIn from '../components/LoggedIn';
import Alien from '../components/Alien';

const Routings = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/logged-in' element={<LoggedIn />} />
      <Route path='/alien' element={<Alien />} />
    </Routes>
  </Router>
);

export default Routings;
