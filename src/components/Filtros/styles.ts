import styled from 'styled-components'
import { Props } from '.'

export const Option = styled.div<Props>`
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#000' : '#fff')};
  background-color: ${(props) => (props.ativo ? '#000' : '#fff')};
  color: ${(props) => (props.ativo ? '#fff' : '#000')};
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
