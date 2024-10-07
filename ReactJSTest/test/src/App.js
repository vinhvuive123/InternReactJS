import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Sử dụng Routes thay vì Switch
import Home from './Home';
import Login from './Login';

const App = () => {
  return (
    <Routes> {/* Sử dụng Routes để định nghĩa các route */}
      <Route path="/" element={<Home />} /> {/* Sử dụng element thay vì component */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
