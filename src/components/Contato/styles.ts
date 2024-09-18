import styled from 'styled-components'

export const Card = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #424242;
  cursor: pointer;
  color: #fff;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
`

export const Nome = styled.h3`
  font-size: 14px;
  font-weight: bold;
`

export const Tag = styled.span`
  font-size: 12px;
`

export const Dados = styled.div`
  display: grid;
  align-items: center;
`

export const Campos = styled.input`
  font-size: 12px;
  border: none;
  background-color: transparent;
`

export const BotaoContainer = styled.div`
  display: flex;
  align-items: center;
`

export const BotaoOptions = styled.button`
  border: none;
  background-color: transparent;

  img {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`

export const Botao = styled.button`
  height: 20px;
  padding: 0 4px;
  cursor: pointer;
  border: none;
  background-color: #000;
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
`
