import React from 'react'

const Checkbox = ({children}) => {
  return (
    <>
      <label htmlFor={children} style={{display: 'flex'}}>
        {children}
      </label>
      <input id={children} type='checkbox' style={{ display: 'flex', margin: '1em', padding: '0.3em 0.5em', background: 'none', border: 'none', borderBottom: '0.13em solid #fff', borderRadius: '0.2em' }} />
    </>
  )
}

export default Checkbox;