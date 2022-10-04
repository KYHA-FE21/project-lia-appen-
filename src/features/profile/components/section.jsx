import React from 'react';

const Section = ({children, header}) => {
  return (
    <section className={`flex column ${header ? 'gap-2 center' : 'gap-4'}`}>{children}</section>
  )
}

export default Section;