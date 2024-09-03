import styled from 'styled-components'

import { Props } from '.'

type PropsSemTipo = Omit<Props, 'tipo'>

export const Card = styled.div<PropsSemTipo>`
  padding: 2px 4px;
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#000')};
  background-color: ${(props) => (props.ativo ? '#1e90ff' : '#fff')};
  color: ${(props) => (props.ativo ? '#fff' : '#000')};
  border-radius: 8px;
`

export const Label = styled.span`
  font-size: 12px;
  font-weight: bold;
`
