import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
// Routes
import Profile from './features/profile/routes';
import Matchmake from './features/matchmake/routes';
import Applications from './features/applications/routes';
import Splash from './features/splash/routes';
import Signin from './features/auth/routes/signin';
import Signup from './features/auth/routes/signup';
import Reset from './features/auth/routes/reset';

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Splash />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/reset/:id" element={<Reset />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/matchmake" element={<Matchmake />}></Route>
          <Route path="/applications" element={<Applications />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
