import React from "react"
import {
	NutritionWrapper,
	Image,
	InfoWrapper,
	DataWrapper,
	Title,
	Description
} from "./nutrition.styled"
import data from "./data.json"
import Img from "./img.jpg"

const Nutrition = () => (
	<NutritionWrapper>
		<InfoWrapper>
			{data.map(({ title, description, index }) => (
				<DataWrapper key={index}>
					<Title>{title}</Title>
					<Description>{description}</Description>
				</DataWrapper>
			))}
		</InfoWrapper>
		<Image src={Img} />
	</NutritionWrapper>
)

export default Nutrition
