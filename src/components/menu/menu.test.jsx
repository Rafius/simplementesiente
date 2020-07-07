import React from "react"
import { MemoryRouter } from "react-router-dom"
import { render, fireEvent } from "@testing-library/react"
import Menu from "./menu"
import data from "./data.json"

describe("Render the menu component", function () {
	test("Check the test id", () => {
		const { getByTestId } = render(
			<MemoryRouter>
				<Menu />
			</MemoryRouter>
		)
		getByTestId("menu")
	})

	test("Count how many items the menu have", () => {
		const { getByTestId } = render(
			<MemoryRouter>
				<Menu />
			</MemoryRouter>
		)
		expect(data).toHaveLength(6)
	})

	test("Should redirect to home page", () => {
		const { getByTestId } = render(
			<MemoryRouter>
				<Menu />
			</MemoryRouter>
		)
		const homeClick = getByTestId("menu-item-0")
		fireEvent.click(homeClick)
		expect(window.location.pathname).toBe(data[0].route)
	})
})
