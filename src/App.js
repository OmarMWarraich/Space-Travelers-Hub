import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './features/header/Header';
import MyProfile from './features/myProfile/MyProfile';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MyProfile />} />
        <Route path="/rockets" element={<div>Rockets</div>} />
        <Route path="/missions" element={<div>Missions</div>} />
      </Routes>
    </div>
  );
}

export default App;
