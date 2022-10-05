import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const { pathname } = useLocation();
  const excludedRoutes = ['signin', 'signup', 'reset'];
  const noHeadOrFoot = excludedRoutes.includes(pathname.split('/')[1]);

  return (
    <>
      {!noHeadOrFoot && <header>Header</header>}
      <main>
        <Outlet />
      </main>
      {!noHeadOrFoot && <footer>Footer</footer>}
    </>
  );
};

export default Layout;
