import React, { useEffect, useState } from 'react';
import './index.scss';

const LayoutContainer = ({ children, gap, type, direction, styleDirection, margin, padding, wrap}) => {

  const [styleGap, setStyleGap] = useState();
  const [styleMargin, setStyleMargin] = useState();
  const [stylePadding, setStylePadding] = useState();

  useEffect(() => {
    if (gap !== undefined) setStyleGap(gap.join('em ') + 'em')
  }, [gap])

  useEffect(()=>{
    if (padding !== undefined) setStylePadding(padding.join('em ') + 'em')
  }, [padding])

  useEffect(() => {
    if (margin !== undefined) setStyleMargin(margin.join('em ') + 'em')
  }, [margin])

  return (
    <div style={{ 
        display: type || 'flex', 
        flexDirection: 
        direction, 
        gap: styleGap, 
        alignItems: styleDirection, 
        justifyContent: styleDirection,
        margin: styleMargin,
        padding: stylePadding,
        flexWrap: wrap || 'nowrap'
      }} 
      className='container'>
      {children} 
    </div>
  )
}

export default LayoutContainer;