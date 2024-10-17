import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardComponent from '../components/DashboardComponent';
import SiteManagerComponent from '../components/SiteManagerComponent';
import ItemManagerComponent from '../components/ItemManagerComponent';
import ProcessManagerComponent from '../components/ProcessManagerComponent';
import FileManagerComponent from '../components/FileManagerComponent';
import LoginComponent from '../components/LoginComponent';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardComponent />} />
      <Route path="/sites" element={<SiteManagerComponent />} />
      <Route path="/items" element={<ItemManagerComponent />} />
      <Route path="/processes" element={<ProcessManagerComponent />} />
      <Route path="/files" element={<FileManagerComponent />} />
      <Route path="/login" element={<LoginComponent />} />
    </Routes>
  );
}
