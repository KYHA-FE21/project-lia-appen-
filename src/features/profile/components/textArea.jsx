import React from 'react'

const TextArea = ({children}) => {
  return (
      <div className='textArea'>
          <span>0/120</span>
          <textarea placeholder={children}></textarea>
      </div>
  )
}

export default TextArea;