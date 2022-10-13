import React from 'react'

const TextArea = ({children, prefix}) => {
  return (
      <div className='textArea'>
          <span>0/120</span>
          <textarea id={prefix} placeholder={children}></textarea>
      </div>
  )
}

export default TextArea;