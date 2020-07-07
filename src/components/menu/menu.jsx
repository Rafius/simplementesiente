import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { MenuWrapper, Item } from "./menu.styled"
import data from "./data.json"

const Menu = () => {
	const history = useHistory()
	const getInitialSection = () =>
		data.find(({ route }) => route === history.location.pathname).index
	const [activeItem, setActiveItem] = useState(getInitialSection())

	const handleClick = (route, index) => {
		history.push(route)
		setActiveItem(index)
	}

	return (
		<MenuWrapper data-testid="menu">
			{data &&
				data.map(({ name, route, index }) => (
					<Item
						data-testid={`menu-item-${index}`}
						key={index}
						onClick={() => handleClick(route, index)}
						isActive={index === activeItem}>
						{name}
					</Item>
				))}
		</MenuWrapper>
	)
}

export default Menu
