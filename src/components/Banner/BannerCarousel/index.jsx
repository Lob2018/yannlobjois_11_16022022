import styled from 'styled-components'
import PropTypes from 'prop-types'

import DeskMontagnes from '../../../assets/pictures/desk-lac.jpg'
import MobMontagnes from '../../../assets/pictures/mob-lac.jpg'
import ChevronGauche from '../../../assets/chevron-gauche.svg'
import ChevronDroit from '../../../assets/chevron-droit.svg'

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

function BannerCarousel(props) {
  const pictures = props.pictures

  return (
    <>
      {pictures && pictures.length > 0 && (
        <section
          id="myBanner"
          aria-roledescription="carousel"
          aria-label="Highlighted television shows"
        >
          <div className="carousel-inner">
            <div className="controls">
              <button
                aria-controls="myBanner-items"
                aria-label="Slide précédent"
              >
                Slide précédent
                <svg>${ChevronGauche}</svg>
              </button>
              <button aria-controls="myBanner-items" aria-label="Slide suivant">
                Slide suivant
                <svg>${ChevronDroit}</svg>
              </button>
            </div>
            <div id="myBanner-items" className="carousel-items" aria-live="off">
              {pictures.map((result, index) => (
                <div
                  className="carousel-item active" // active
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${pictures.length}"`}
                  key={`index-pictures-${index}-${result}`}
                >
                  <div className="carousel-image">
                    <img
                      src={result}
                      alt={result.substring(result.lastIndexOf('/') + 1)}
                    />
                  </div>
                  <div className="carousel-caption">
                    <p>
                      {index + 1}/{pictures.length}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

BannerCarousel.propTypes = {
  pictures: PropTypes.array.isRequired,
}

BannerCarousel.defaultProps = {
  pictures: [],
}

export default BannerCarousel

// <StyledContainerImage role="img">
// <StyledImage alt="Mountainous landscape" />
// <StyledBgBlend></StyledBgBlend>
// <StyledTitle>Chez vous, partout et ailleurs</StyledTitle>
// </StyledContainerImage>
