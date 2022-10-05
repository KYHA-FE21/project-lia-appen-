import React from 'react';
import { Outlet } from 'react-router-dom';
import Card from '../card/card';
import Footer from '../footer/footer';

const Layout = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, black , #4d243d)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1em',
        padding: '1em',
      }}
    >
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
