import React from 'react'

const Title = ({children, underline}) => {
  return (
    <>
          <h1 style={(underline) ? {paddingBottom: '0.5em', fontWeight: 'bold', fontSize: '1.3rem', borderBottom: '1px solid #fff' } : {fontSize: '1.2rem', fontWeight: 'bold'}}>{children}</h1>
     </>
  )
}

export default Title;