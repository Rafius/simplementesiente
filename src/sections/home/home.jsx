import React from 'react'
import { HomeWrapper, DescriptionWrapper } from './home.styled'
import { description } from './home.json'

const Home = () => {
  return(
    <HomeWrapper>
      <DescriptionWrapper>
        {description}
      </DescriptionWrapper>
    </HomeWrapper>
  )
}

export default Home