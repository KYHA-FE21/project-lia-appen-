import React from 'react';

const Section = ({children, header}) => {
  return (
    <section className={`flex column ${header ? 'gap-3 center' : 'gap-4 padding-inline-4'}`}>{children}</section>
  )
}

export default Section;