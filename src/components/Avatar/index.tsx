import React from 'react'
import { AvatarContainer } from './styles'

interface AvatarProps {
  nome: string
}

const Avatar: React.FC<AvatarProps> = ({ nome }) => {
  const initial = nome.charAt(0)

  return <AvatarContainer>{initial}</AvatarContainer>
}

export default Avatar
