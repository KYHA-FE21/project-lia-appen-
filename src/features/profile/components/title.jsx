import { useState, useEffect } from 'react'

const Title = ({children, img, size, bold}) => {
  
  const [styleSize, setStyleSize] = useState();
  const [styleBold, setStyleBold] = useState();

  useEffect(() => {
    if (size !== undefined) setStyleSize(size.join('rem ') + 'rem')
  }, [size])

  useEffect(() => {
    if (bold !== undefined) setStyleBold(bold)
  }, [bold])
  
  return (
    <h2 style={{
      fontSize: styleSize || 1+'rem',
      fontWeight: styleBold || 400
    }}>{img}{children}
    </h2>
  )
}

export default Title;