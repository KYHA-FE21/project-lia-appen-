import React from 'react'

const InputButton = ({id, value, label, type, checked, changed}) => {
  return (
    <>
      <input id={id} type={type} value={value} checked={checked} onChange={changed} className='flex gap-1' />
      <label htmlFor={id} className='flex center evenly'>{label}</label>
    </>
  )
}

export default InputButton;