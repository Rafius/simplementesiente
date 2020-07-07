import React from "react"
import ReactDOM from "react-dom"
import { render } from "@testing-library/react"
import Home from "./home"

test("renders Home component", () => {
	const { getByTestId } = render(<Home />)
	getByTestId("home")
})
