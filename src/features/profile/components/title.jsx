import { useState, useEffect } from 'react'

const Title = ({children, img, size, bold, subTitle}) => {
  
  const [styleSize, setStyleSize] = useState();
  const [styleBold, setStyleBold] = useState();

  useEffect(() => {
    if (size !== undefined) setStyleSize(size.join('rem ') + 'rem')
  }, [size])

  useEffect(() => {
    if (bold !== undefined) setStyleBold(bold)
  }, [bold])
  
  return (
    <>
      <h2 className={`${(img !== undefined) ? 'title' : '' }`} style={{
        fontSize: styleSize || 1 + 'rem',
        fontWeight: styleBold || 400
      }}><span>{img}</span>{children}<br /><span className='subTitle'>{subTitle}</span>
      </h2>
    </> 
  )
}

export default Title;