import React from "react"
import { HomeWrapper, DescriptionWrapper, Img } from "./home.styled"
import { description } from "./data.json"

const Home = () => (
	<HomeWrapper data-testid="home">
		{/* <Img /> */}
		<DescriptionWrapper>{description}</DescriptionWrapper>
	</HomeWrapper>
)

export default Home
