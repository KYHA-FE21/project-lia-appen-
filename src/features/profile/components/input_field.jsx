import React from 'react'

const inputField = ({children, img}) => {
  return (
    <div style={{display: 'flex'}}>
      {img}<input style={{ display: 'flex', margin: '1em', padding: '0.5em', background: 'none', border: 'none', borderBottom: '0.15em solid #fff', borderRadius: '0.4em'}} placeholder={children} />
    </div>
  )
}

export default inputField;