import React from 'react'
import Wrapper from '../wrapper';

const Avatar = () => {
  return (
    <Wrapper 
      width='100%' 
      gap={[3]} 
      styleDirection='center'>
        
        <div className='bgBlur'></div>
        <div className='flex center avatar'></div>
        
    </Wrapper>
  )
}

export default Avatar;