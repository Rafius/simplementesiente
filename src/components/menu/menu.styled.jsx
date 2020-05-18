import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: #1c2331;
`

export const Item = styled(Link)`
  margin: 10px;
  color: white;
  text-decoration: none;
`