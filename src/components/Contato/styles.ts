import styled from 'styled-components'

export const Card = styled.div`
  display: block;
  align-items: center;
  margin: 16px 0;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;
`

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #000;
  margin-right: 20px;
`

export const Nome = styled.h3`
  font-size: 16px;
  font-weight: bold;
`

export const Dados = styled.div`
  display: grid;
`

export const Campos = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  resize: none;
  border: none;
  height: 30px;
  padding: 0 70px;
  background-color: transparent;
`

export const Botao = styled.button`
  padding: 6px 10px;
  cursor: pointer;
  background-color: #2f3640;
  color: #fff;
  border-radius: 50px;
`
