// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navigationbar';
import Dotaznik from './components/Dotaznik'; 
import RizikoveFaktory from './components/RizikoveFaktory'; 
import Map from './components/Map';
import Table from './components/Table';
import Prevention from './components/Prevention'; 

function App() {
  return (
    <Router>
      <div className="App">
 
        <NavigationBar />
        <div //style={{maxWidth: '1300px', margin: '0 auto', textAlign: 'center'}}
        >
          <Routes >
            <Route path="/Dotaznik" element={<Dotaznik />} />
            <Route path="/RizikoveFaktory" element={<RizikoveFaktory />} />
            <Route path="/Map" element={<Map />} />
            <Route path="/Table" element={<Table />} />
            <Route path="/" element={<Prevention />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;