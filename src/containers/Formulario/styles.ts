import styled from 'styled-components'

export const DivForm = styled.div`
  padding: 0 40px;
`

export const Formulario = styled.form`
  max-width: 547px;
  width: 100%;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`

export const Inputs = styled.div`
  display: grid;
  margin: 16px 0;
`

export const Campos = styled.input`
  height: 30px;
  color: #fff;
  border: none;
  border-radius: 8px;
  background-color: #424242;
  margin-bottom: 4px;
`

export const BotaoCadastrar = styled.button`
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  background-color: #44bd32;
  color: #fff;
  cursor: pointer;

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

export const Titulo = styled.p`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 6px;
  }
`
