import React from 'react'

const TextArea = ({children, prefix, onChange}) => {
  return (
      <div className='textArea'>
          <span>0/120</span>
          <textarea 
            id={prefix} 
            placeholder={children} 
        onChange={onChange}></textarea>
      </div>
  )
}

export default TextArea;