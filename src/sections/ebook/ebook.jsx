import React from 'react'
import { ProfileContainer, ImageWrapper, Image, IconsWrapper, DescriptionWrapper, PdfLink, Icon} from './ebook.styled'
import Img from './img.jpg'
import pdf from './index.pdf';
import ReactGa from 'react-ga';

const Ebook = () => {
  const handleClick = () => {
    ReactGa.event({
      category:'button',
      action:'pdf button'
    })
    window.open(pdf, 'blank')
  }

  return (
    <ProfileContainer>
      <ImageWrapper>
        <Image src={Img} />
        <IconsWrapper>
        <Icon href="https://www.instagram.com/simplementesiente/" target="blank">
          <i className="fab fa-instagram fa-2x"></i>
        </Icon>
        <Icon href="mailto:marialerinberna@gmail.com">
          <i className="far fa-envelope fa-2x"></i>
        </Icon> 
      </IconsWrapper>
      </ImageWrapper>
      <DescriptionWrapper>
        <h1>¡Hola!</h1>
        <p>Soy María Lerin, psicoterapeuta especializada en Trastornos de la Conducta Alimentaria. 
            Te presento el eBook que, junto con la nutricionista Miriam Vitoria, hemos escrito para 
            ayudarte a identificar los diferentes tipos de hambre, así como las emociones asociadas con ellos.
        </p>
        <PdfLink onClick={handleClick}>Descarga el indice ahora</PdfLink>
      </DescriptionWrapper>
    </ProfileContainer>
  )
}

export default Ebook