import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  background-color: #1c2331;
`

export const IconsWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: 10px;
  justify-content: flex-end;
`

export const Icon = styled.a`
  text-decoration: none;
  margin-right: 25px;
  cursor: pointer;

  svg {
    color: white;
    text-decoration: none;
  }
`