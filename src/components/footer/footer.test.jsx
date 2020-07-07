import React from "react"
import ReactDOM from "react-dom"
import { render } from "@testing-library/react"
import Footer from "./footer"

describe("Render the menu component", function () {
	test("Check the test id", () => {
		const { getByTestId } = render(<Footer />)
		getByTestId("footer")
	})
})
