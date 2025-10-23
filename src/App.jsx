import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Shop from '../Pages/Shop'
import Contact from '../Pages/Contact'
import Description from "../Pages/Description";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Description" element={<Description />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App