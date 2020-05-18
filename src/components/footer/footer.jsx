import React from 'react'
import { FooterWrapper, IconsWrapper, Icon } from './footer.styled'
import icons from './icons.json'

const Footer = () => (
  <FooterWrapper>
    <IconsWrapper>
      {icons.map(({ className, index, href })=>
        <Icon key={index} href={href} target="blank">
          <i className={className}> </i>
        </Icon>
      )}
    </IconsWrapper>
  </FooterWrapper>
)

export default Footer