import React from "react"
import { FooterWrapper, IconsWrapper, Icon } from "./footer.styled"
import icons from "./icons.json"

const Footer = () => (
	<FooterWrapper data-testid="footer">
		<IconsWrapper>
			{icons.map(({ className, index, href, target }) => (
				<Icon data-testid="footer-icon" key={index} href={href} target={target}>
					<i className={className}> </i>
				</Icon>
			))}
		</IconsWrapper>
	</FooterWrapper>
)

export default Footer
