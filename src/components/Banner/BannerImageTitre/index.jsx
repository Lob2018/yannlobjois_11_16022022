import styled from 'styled-components'
import DeskMontagnes from '../../../assets/pictures/desk-lac.jpg'
import MobMontagnes from '../../../assets/pictures/mob-lac.jpg'

const StyledContainerImage = styled.div`
  box-sizing: border-box;
  position: relative;
  text-align: center;
  height: 223px;
  width: 100%;
  background-color: #f7f7f7;
  border-radius: 25px;
  @media only screen and (max-width: 768px) {
    height: 111px;
    border-radius: 10px;
  }
`
const StyledTitle = styled.h1`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;
  padding: 0 20px;
  color: #fff;
  font-weight: 500;
  line-height: 68.45px;
  font-size: 48px;
  transform: translate(-50%, -50%);
  width: 100%;
  border-radius: 25px;
  @media only screen and (max-width: 768px) {
    text-align: left;
    font-size: 24px;
    line-height: 24px;
    max-width: 70%;
    padding: 0 0 0 16px;
    left: 0px;
    transform: translate(0%, -50%);
  }
`

const StyledBgBlend = styled.div`
  box-sizing: border-box;
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
    height: 111px;
    border-radius: 10px;
  }
`

const StyledImage = styled.img`
  box-sizing: border-box;
  object-fit: cover;
  content: url(${DeskMontagnes});
  position: absolute;
  top: 0%;
  left: 0%;
  height: 223px;
  width: 100%;
  border-radius: 25px;
  @media only screen and (max-width: 768px) {
    height: 111px;
    content: url(${MobMontagnes});
    border-radius: 10px;
  }
`

function BannerImageTitre() {
  return (
    <StyledContainerImage role="img" aria-labelledby="image-1">
      <StyledImage alt="Mountainous landscape" />
      <StyledBgBlend></StyledBgBlend>
      <StyledTitle id="image-1">Chez vous, partout et ailleurs</StyledTitle>
    </StyledContainerImage>
  )
}

export default BannerImageTitre
