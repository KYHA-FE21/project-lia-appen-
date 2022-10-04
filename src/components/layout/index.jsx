import React from 'react';
import { Outlet } from 'react-router-dom';
import Card from '../card/card';
import Footer from '../footer/footer';

const Layout = () => {
  return (
    <div style={{ background: 'black' }}>
      <header>Header</header>
      <Card type="Front-End Utvecklare" />
      <Card type="Front-End Utvecklare" />
      <Card type="Front-End Utvecklare" />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
