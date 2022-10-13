import React from 'react'

const InputButton = ({ children, id, value, label, type, checked, changed, click, placeholder }) => {
  return (
    <>
      <input 
        id={id} 
        type={type || 'button'} 
        value={value || children} 
        placeholder={placeholder} 
        checked={checked} 
        onChange={changed} 
        onClick={click} 
        className='flex center gap-1' />

      {(label !== undefined) ? 
      
      <label 
        htmlFor={id} 
        className='flex center evenly'>{label}
      </label> : <></>}
    </>
  )
}

export default InputButton;