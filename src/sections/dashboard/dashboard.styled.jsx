import styled, { createGlobalStyle  }  from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 @import url('../../assets/fonts/AdventPro-Bold.ttf');
  html, body {
    margin: 0;
    padding: 0;
    position: absolute;
    width: 100%;
    font-family: 'My custom family';
    @font-face {
     font-family: 'My custom family';
     src: url('../../assets/fonts/AdventPro-Bold.ttf');
   }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 140px);
  background-color: #FFEDF9;
  color:#864761;
`

export const P = styled.div`
 margin: auto;
 max-width: 600px;
 color: #4E1D26;
 font-family: Advent Pro;

`


export const Title = styled.h1`
 color: #425440;
`
