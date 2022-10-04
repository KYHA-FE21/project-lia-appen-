import React from 'react'

const InputField = ({children, img}) => {
  return (
    <div className='flex center gap-05'>
      {img}<input className='flex input' placeholder={children} />
    </div>
  )
}

export default InputField;