import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const Formulario = styled.form`
  display: grid;
  height: 500px;
  width: 400px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Campos = styled.input`
  height: 30px;
  font-size: 14px;
  border: none;
  background-color: transparent;
`

export const BotaoCadastrar = styled.button`
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  background-color: #44bd32;
  color: #fff;
  cursor: pointer;
  height: 70px;

  &:hover {
    background-color: #5ad945;
  }
`

export const BotaoVoltar = styled.button`
  border: none;
  border-radius: 5px;
  background-color: transparent;
  color: #000;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
  }
`

export const Titulo = styled.h2`
  padding: 40px 20px;
`
