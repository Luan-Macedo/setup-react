import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  display: block;
`

export const DivDados = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  margin-bottom: 4px;
`

export const Icone = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 8px;
`

export const DivDado = styled.div`
  display: flex;
  padding: 12px;
  background-color: #000;
  border-radius: 8px;
`

export const InputDados = styled.input`
  color: #fff;
  background-color: transparent;
  border: none;
`

export const BotaoEditar = styled.button`
  width: 100%;
  border: none;
  background-color: #000;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
`
