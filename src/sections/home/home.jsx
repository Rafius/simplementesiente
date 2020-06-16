import React from 'react'
import { HomeWrapper, DescriptionWrapper, Img } from './home.styled'
import { description } from './home.json'

const Home = () => (
  <HomeWrapper>
    <Img />
    <DescriptionWrapper>
      {description}
    </DescriptionWrapper>
  </HomeWrapper>
)

export default Home