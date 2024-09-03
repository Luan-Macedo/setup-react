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
`

export const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`

export default EstiloGlobal
