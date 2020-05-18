import React from 'react'
import { description, studies, experience } from './about.json'
import { AboutWrapper, Image, InfoWrapper } from './about.styled'
import Img from './img.jpg'

const About = () => {
  return (
    <AboutWrapper>
      <Image src={Img} />
      <InfoWrapper>
        <p>{description}</p>
        <p>{studies}</p>
        <p>{experience}</p>
      </InfoWrapper>
    </AboutWrapper>
  )
}

export default About