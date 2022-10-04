import React from 'react'

const InputField = ({ children, img, change, prefix }) => {
  return (
    <div className='flex center gap-05'>
      {img}<input className='flex input' id={prefix} placeholder={children} onChange={change} />
    </div>
  )
}

export default InputField;