import styled from 'styled-components'

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: #1c2331;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
`


export const Item = styled.a`
  color: ${({ isActive }) => isActive ? 'lightBlue' : 'white' };
  margin: 10px;
  text-decoration: none;
  transition: 0.3s ease;
  cursor: pointer;

  :hover {
    border-top: 4px solid #ffffff;
    border-bottom: 4px solid #ffffff;
    padding: 6px 0; 
  }
`