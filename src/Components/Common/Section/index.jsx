import React from 'react'
import "./style.scss"

const Section = ({children,className}) => {
  return (
    <div className={`section ${className ? className : null}`}>
        {children}
    </div>
  )
}

export default Section