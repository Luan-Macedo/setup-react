import styled from 'styled-components'
import { Props } from '.'

type PropsSemTag = Omit<Props, 'tag'>

export const Option = styled.div<PropsSemTag>`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: ${(props) => (props.ativo ? '#424242' : 'transparent')};
  color: #fff;
  padding: 4px;
  cursor: pointer;
`

export const Label = styled.span`
  font-weight: bold;
  font-size: 14px;
`

export const Icone = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 5px;
  margin-bottom: 5px;
`
