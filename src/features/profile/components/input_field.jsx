import React from 'react'

const InputField = ({ children, img, change, prefix, type}) => {
  return (
    <div className='flex center gap-05'>
      {img}<input type={type} className='flex input' id={prefix} placeholder={children} onChange={change} />
    </div>
  )
}

export default InputField;