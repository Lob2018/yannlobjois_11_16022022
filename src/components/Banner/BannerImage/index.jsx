import styled from 'styled-components'
import DeskMontagnes from '../../../assets/pictures/desk-montagnes.jpg'
import MobMontagnes from '../../../assets/pictures/mob-montagnes.jpg'

import { useWindowWidth } from '../../../utils/hooks'

const StyledContainerImage = styled.div`
  position: relative;
  text-align: center;
  height: 223px;
  width: 100%;
  background-color: #f7f7f7;
  border-radius: 25px;
  @media only screen and (max-width: 768px) {
    border-radius: 10px;
  }
`

const StyledBgBlend = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  height: 223px;
  width: 100%;
  background-color: #000;
  opacity: 0.3;
  mix-blend-mode: darken;
  border-radius: 25px;
  @media only screen and (max-width: 768px) {
    border-radius: 10px;
  }
`

const StyledImage = styled.img`
  object-fit: cover;
  position: absolute;
  top: 0%;
  left: 0%;
  height: 223px;
  width: 100%;
  border-radius: 25px;
  @media only screen and (max-width: 768px) {
    border-radius: 10px;
  }
`

function BannerImage() {
  const { windowWidth } = useWindowWidth()

  return (
    <StyledContainerImage>
      <StyledImage
        alt="Mountainous landscape"
        src={windowWidth > 768 ? DeskMontagnes : MobMontagnes}
      />
      <StyledBgBlend></StyledBgBlend>
    </StyledContainerImage>
  )
}

export default BannerImage
