import React from 'react';
import './index.scss';

const LayoutContainer = ({children, gap, type}) => {
  return (
    <div style={{display: type, gap: gap}} className='container'>
      {children} 
    </div>
  )
}

export default LayoutContainer