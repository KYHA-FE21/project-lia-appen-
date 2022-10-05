import React, { useEffect, useState } from 'react';
import './index.scss';

const LayoutContainer = ({ children, gap, type, direction, styleDirection, margin, padding}) => {

  const styleGap = gap + 'em';
  
  const [styleMargin, setStyleMargin] = useState();
  const [stylePadding, setStylePadding] = useState();

  useEffect(()=>{
    if (padding !== undefined) setStylePadding(padding.join('em ') + 'em')
  }, [padding])

  useEffect(() => {
    if (margin !== undefined) setStyleMargin(margin.join('em ') + 'em')
  }, [margin])

  return (
    <div style={{ 
        display: type, 
        flexDirection: 
        direction, 
        gap: styleGap, 
        alignItems: styleDirection, 
        justifyContent: styleDirection,
        margin: styleMargin,
        padding: stylePadding
      }} 
      className='container'>
      {children} 
    </div>
  )
}

export default LayoutContainer;