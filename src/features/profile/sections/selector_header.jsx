import React from 'react'
import Wrapper from '../components/wrapper';
import Title from '../components/title';

const SelectorHeader = ({children, reverse}) => {
  return (
    <Wrapper 
      width='100%' 
      gap={[3]} 
      styleDirection='center'>

      <div className={`${
        reverse ? 'selectorHeaderReverse' : 'selectorHeader'}`}>
        <Title size={[1.5]} bold={[700]}>{children}</Title>
      </div>
        
    </Wrapper>
  )
}

export default SelectorHeader;