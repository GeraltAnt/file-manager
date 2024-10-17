import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import DashboardComponent from './components/DashboardComponent';
import LoginComponent from './components/LoginComponent';
import SiteItemProcessFileView from './components/SiteItemProcessFileView'; // 引入新组件
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<DashboardComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/view" element={<SiteItemProcessFileView />} />
      </Routes>
    </div>
  );
}

export default App;
