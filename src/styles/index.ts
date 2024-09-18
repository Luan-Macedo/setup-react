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

export default EstiloGlobal
