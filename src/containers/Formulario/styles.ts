import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  width: 100%;
  margin: 0 auto;
`

export const Formulario = styled.form`
  display: grid;
  text-align: center;
  gap: 10px;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Campos = styled.input`
  margin: 5px;
  height: 30px;
  font-size: 14px;
  border: none;
  background-color: transparent;
`

export const BotaoCadastrar = styled.button`
  padding: 5px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  background-color: #44bd32;
  color: #fff;
  margin-top: 20px;
  cursor: pointer;
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
