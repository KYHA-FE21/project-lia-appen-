import React from 'react'
import LayoutContainer from '../layout-container';
import Title from '../title';

const SelectorHeader = ({children, reverse}) => {
  return (
    <LayoutContainer 
      width='100%' 
      gap={[3]} 
      styleDirection='center'>

      <div className={`${
        reverse ? 'selectorHeaderReverse' : 'selectorHeader'}`}>
        <Title size={[1.5]} bold={[700]}>{children}</Title>
      </div>
        
    </LayoutContainer>
  )
}

export default SelectorHeader;