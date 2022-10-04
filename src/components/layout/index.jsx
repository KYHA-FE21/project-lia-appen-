import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const { pathname } = useLocation();
  const excludedRoutes = ['/signin', '/signup'];
  const noHeadOrFoot = excludedRoutes.includes(pathname);

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
