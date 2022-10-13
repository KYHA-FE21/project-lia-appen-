import React, { useEffect, useState } from 'react';
import './index.scss';

const Wrapper = ({ children, gap, type, direction, styleDirection, margin, padding, wrap, width, maxWidth, lineHeight}) => {

  const [styleGap, setStyleGap] = useState();
  const [styleMargin, setStyleMargin] = useState();
  const [stylePadding, setStylePadding] = useState();
  const [styleLineHeight, setStyleLineHeight] = useState();

  useEffect(() => {
    if (lineHeight !== undefined) setStyleLineHeight(lineHeight.join('em ') + 'em')
  }, [lineHeight])

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
        width: width || 'min(100%, 1200px)',
        display: type || 'flex', 
        flexDirection: 
        direction, 
        gap: styleGap, 
        alignItems: styleDirection, 
        justifyContent: styleDirection,
        margin: styleMargin,
        padding: stylePadding,
        flexWrap: wrap || 'nowrap',
        lineHeight: styleLineHeight,
        maxWidth: maxWidth
      }} 
      className='container'>
      {children} 
    </div>
  )
}

export default Wrapper;