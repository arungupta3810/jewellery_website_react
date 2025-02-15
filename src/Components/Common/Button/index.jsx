import { Button } from 'antd'
import React from 'react'
import './style.scss'

const PrimaryButton = ({name,handleClick,className}) => {
  return (
    <Button className={`butn ${className ? className : null}`} onClick={handleClick}>{name}</Button>
  )
}

export default PrimaryButton