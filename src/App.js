import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './features/header/Header';
import MyProfile from './features/myProfile/MyProfile';
import Rockets from './features/rockets/Rockets';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/" element={<div>Missions</div>} />
      </Routes>
    </div>
  );
}

export default App;
