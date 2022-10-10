import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer';

const Layout = () => {
  return (
    <>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <Footer>footer</Footer>
    </>
  );
};

export default Layout;
