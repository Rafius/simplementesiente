import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  height: 60px;
  background-color: #864761;
`

export const IconsWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: 10px;
  justify-content: flex-end;
`

export const Icon = styled.a`
  margin-right: 25px;
  cursor: pointer;

  svg {
    color: white;
  }
`