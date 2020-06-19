import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html, body {
    position: fixed;
    margin: 0;
    padding: 0;
    min-width: 100%;
    font-family: Bold;
    min-height: 100%;
  }
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	min-height: calc(100vh - 140px);
	background-color: #fcf3e9;
	color: #864761;
`
