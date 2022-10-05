import React from 'react';
import './index.scss';

const LayoutContainer = ({ children, gap, type, direction, styleDirection, margin, padding}) => {

  const styleGap = gap + 'em';
  
  const styleMargin = margin + 'em';
  const stylePadding = padding + 'em';

  return (
    <div style={{ 
        display: type, 
        flexDirection: 
        direction, 
        gap: styleGap, 
        alignItems: styleDirection, 
        justifyContent: styleDirection,
        margin: styleMargin,
        padding: stylePadding,
      }} 
      className='container'>
      {children} 
    </div>
  )
}

export default LayoutContainer