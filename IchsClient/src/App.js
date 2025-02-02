// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navigationbar';
import Dotaznik from './components/Dotaznik'; // Create Home, About, Contact components for each page
import RizikoveFaktory from './components/RizikoveFaktory'; 
import Map from './components/Map';
import Table from './components/Table';

function App() {
  return (
    <Router>
      <div className="App">
 
        <NavigationBar />

        <Routes>
          <Route path="/Dotaznik" element={<Dotaznik />} />
          <Route path="/RizikoveFaktory" element={<RizikoveFaktory />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/Table" element={<Table />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;