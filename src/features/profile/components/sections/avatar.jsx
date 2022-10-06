import React from 'react'
import LayoutContainer from '../layout-container';

const Avatar = () => {
  return (
    <LayoutContainer 
      width='100%' 
      gap={[3]} 
      styleDirection='center'>
        
        <div className='bgBlur'></div>
        <div className='flex center avatar'></div>
        
    </LayoutContainer>
  )
}

export default Avatar;