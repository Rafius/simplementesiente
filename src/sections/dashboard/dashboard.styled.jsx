import styled, { createGlobalStyle  }  from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`
export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Helvetica, sans-serif;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: calc(100vh - 120px)
`