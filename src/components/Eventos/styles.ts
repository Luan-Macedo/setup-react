import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  padding: 20px;

  span {
    display: block;
  }
`

export const Evento = styled.div`
  display: flex;
  padding: 10px;
  background-color: #000;
  color: #fff;
  border-radius: 8px;
  margin-top: 4px;
  margin-bottom: 4px;
`

export const Titulo = styled.h3``

export const Data = styled.div`
  padding: 1px 5px;
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  margin-right: 14px;

  span {
    text-align: center;
    font-weight: bold;
  }
`

export const Mes = styled.span`
  font-size: 12px;
`

export const Dia = styled.span`
  font-size: 16px;
`

export const Horario = styled.span`
  font-size: 12px;
`

export const BotaoAdicionarEvento = styled.button`
  border: none;
  background-color: #000;
  color: #fff;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
`
