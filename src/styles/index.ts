import { Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    text-decoration: none;
    list-style: none;
  }

  body{
    background-color: #171717;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px 1fr 1fr;
`

export const BotaoPadrao = styled(Link)`
  height: 40px;
  width: 100%;
  background-color: #424242;
  color: #fff;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
`

export default EstiloGlobal
