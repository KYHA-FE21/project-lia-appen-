import React from 'react';
import { Outlet } from 'react-router-dom';
import Badge from '../badge/badge';

const Layout = () => {
  return (
    <>
      <header>Header</header>
      <Badge>test</Badge>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
