import React from 'react';
import './index.scss';

const Layout = ({children}) => {
  return (
    <div className='flex column gap-4 container'>{children}</div>
  )
}

export default Layout