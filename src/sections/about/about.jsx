import React from 'react'
import { AboutWrapper, Image, InfoWrapper, DataWrapper, Title, Description } from './about.styled'
import about from './about.json'
import Img from './img.jpg'

const About = () => (
  <AboutWrapper>
    <Image src={Img} />
    <InfoWrapper>
      {about.map(({ title, description, index }) =>
        <DataWrapper key={index}>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </DataWrapper>)
      }
    </InfoWrapper>
  </AboutWrapper>
)


export default About