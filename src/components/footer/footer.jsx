import React from "react"
import { FooterWrapper, IconsWrapper, Icon } from "./footer.styled"
import icons from "./icons.json"

const Footer = () => (
	<FooterWrapper>
		<IconsWrapper>
			{icons.map(({ className, index, href, target }) => (
				<Icon key={index} href={href} target={target}>
					<i className={className}> </i>
				</Icon>
			))}
		</IconsWrapper>
	</FooterWrapper>
)

export default Footer
