import React from 'react'

const TextArea = ({children, prefix, handleChange}) => {
  return (
      <div className='textArea'>
          <span>0/120</span>
          <textarea 
            id={prefix} 
            placeholder={children} 
            onChange={handleChange}></textarea>
      </div>
  )
}

export default TextArea;