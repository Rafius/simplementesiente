import React from 'react'
import { MenuWrapper, Item } from './menu.styled'
import data from './menu.json'

const Menu = ({ img }) => (
  <MenuWrapper>
    {data.map(({ name, route, index}) => <Item key={index} to={route}>{name}</Item>)}
  </MenuWrapper>
)

export default Menu
