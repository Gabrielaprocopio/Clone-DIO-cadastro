
import React from 'react'

import { ButtonContainer, ButtonCriar } from './styles';

const Button = ({title,variant = "primary", onClick}) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>{title}</ButtonContainer>
  )
}

  const Criar = ({name, onClick}) => {
return (
  <ButtonCriar onClick={onClick} >{name}</ButtonCriar>
)
}

export { Button, Criar}