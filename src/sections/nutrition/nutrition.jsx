import React from "react"
import { NutritionWrapper, Description, Image } from "./nutrition.styled"

import { description } from "./data.json"
import Img from "./img.jpg"

const Team = () => (
	<NutritionWrapper>
		<Description>{description}</Description>
		<Image src={Img} />
	</NutritionWrapper>
)

export default Team
