import styled, { createGlobalStyle }  from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  html, body {
    margin: 0;
    padding: 0;
    position: absolute;
    width: 100%;
    font-family: Bold;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 140px);
  background-color: #FFEDF9;
  color:#864761;
`