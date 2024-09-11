import styled from 'styled-components'

export const Card = styled.div`
  display: block;
  padding: 10px;
  align-items: center;
  margin: 16px 0;
  border: 1px solid #84817a;
  border-radius: 8px;
  background-color: #fff;
  color: #000;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
`

export const Nome = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const Dados = styled.div`
  display: grid;
  padding: 0 70px 10px;
`

export const Dado = styled.div`
  display: flex;
  align-items: center;
`

export const Label = styled.label`
  color: #84817a;
  display: flex;
  align-items: center;
  font-size: 16px;
  height: 20px;
  width: 70px;
  margin: 5px 0;
`

export const Campos = styled.input`
  color: #000;
  margin: 5px;
  width: 300px;
  height: 20px;
  font-size: 16px;
  border: none;
  background-color: transparent;
`

export const BotaoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Botao = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;
  border: none;
  margin-left: 5px;
  cursor: pointer;
  background-color: #000;
  color: #fff;
  font-weight: bold;
  border-radius: 8px;
`

export const Editando = styled.em`
  color: #84817a;
  margin-right: 5px;
`
