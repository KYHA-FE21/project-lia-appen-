import React from 'react'

const Title = ({children, underline, img, size}) => {
  return (
    <>
          <h1 className={`${(underline) ? 'border-b padding-b-05 bold size-3' : `flex gap-05 bold ${size}`}`}>{img}{children}</h1>
    </>
  )
}

export default Title;