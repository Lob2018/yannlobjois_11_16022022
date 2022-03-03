import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useState } from 'react'

import ChevronGauche from '../../../assets/chevron-gauche.svg'
import ChevronDroit from '../../../assets/chevron-droit.svg'

const StyledCarouselContainer = styled.section`
  margin-top: 20px;
  @media only screen and (max-width: 768px) {
    margin-top: 27px;
  }
`

const StyledCarouselInner = styled.div`
  position: relative;
  @media only screen and (max-width: 768px) {
  }
`
const StyledPreviousButton = styled.button`
  cursor: pointer;
  padding: 0;
  position: absolute;
  z-index: 1;
  border: none;
  outline: none;
  width: 46.68px;
  height: 79.2px;
  left: 23.36px;
  top: calc(50% - 40px);
  background-color: transparent;
  background-image: url(${ChevronGauche});
  background-size: 46.68px 79.2px;
  @media only screen and (max-width: 768px) {
    left: 5.84px;
    top: calc(50% - 10px);
    background-size: 11.67px 19.8px;
    width: 11.67px;
    height: 19.8px;
  }
`

const StyledNextButton = styled.button`
  cursor: pointer;
  padding: 0;
  position: absolute;
  z-index: 1;
  border: none;
  outline: none;
  width: 46.68px;
  height: 79.2px;
  right: calc(0% + 23.36px);
  top: calc(50% - 40px);
  background-color: transparent;
  background-image: url(${ChevronDroit});
  background-size: 46.68px 79.2px;
  @media only screen and (max-width: 768px) {
    right: calc(0% + 5.94px);
    top: calc(50% - 10px);
    background-size: 11.67px 19.8px;
    width: 11.67px;
    height: 19.8px;
  }
`

const StyledCarouselItem = styled.div`
  box-sizing: border-box;
  position: relative;
  max-height: 415px;
  min-height: 415px;
  width: 100%;
  overflow: hidden;
  border-radius: 25px;
  margin-bottom: 30px;
  @media only screen and (max-width: 768px) {
    max-height: 255px;
    min-height: 255px;
    border-radius: 10px;
    margin-bottom: 15px;
  }
`

const StyledPicture = styled.img`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 415px;
  border-radius: 25px;
  display: inline-block;
  object-fit: cover;
  @media only screen and (max-width: 768px) {
    min-height: 255px;
    border-radius: 10px;
  }
`
const StyledCarouselCaption = styled.div`
  box-sizing: border-box;
  position: absolute;
  bottom: 0%;
  width: 100%;
  text-align: center;
  p {
    margin: 0 0 24.93px 0;
    font-weight: 500;
    color: white;
    line-height: 25px;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

function BannerCarousel(props) {
  const pictures = props.pictures
  const size = pictures.length
  const [activeIndex, setPosition] = useState(0)

  const updateIndex = (askedIndex) => {
    if (askedIndex < 0) {
      setPosition(size - 1)
    } else if (askedIndex > size - 1) {
      setPosition(0)
    } else {
      setPosition(askedIndex)
    }
  }

  return (
    <>
      {pictures && pictures.length > 0 && (
        <StyledCarouselContainer
          id="myBanner"
          aria-roledescription="carousel"
          aria-label="Highlighted television shows"
        >
          <StyledCarouselInner>
            {size === 1 ? null : (
              <div>
                <StyledPreviousButton
                  type="button"
                  aria-controls="myBanner-items"
                  aria-label="Slide précédent"
                  onClick={() => updateIndex(activeIndex - 1)}
                ></StyledPreviousButton>
                <StyledNextButton
                  type="button"
                  aria-controls="myBanner-items"
                  aria-label="Slide suivant"
                  onClick={() => updateIndex(activeIndex + 1)}
                ></StyledNextButton>
              </div>
            )}
            <div id="myBanner-items" className="carousel-items" aria-live="off">
              {pictures.map((result, index) => (
                <StyledCarouselItem
                  className={index === activeIndex ? undefined : 'hidden'}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${pictures.length}`}
                  key={`index-pictures-${index}-${result}`}
                >
                  <div className="carousel-image">
                    <StyledPicture
                      src={result}
                      alt={result.substring(result.lastIndexOf('/') + 1)}
                    />
                  </div>
                  {size === 1 ? null : (
                    <StyledCarouselCaption className="carousel-caption">
                      <p>
                        {index + 1}/{pictures.length}
                      </p>
                    </StyledCarouselCaption>
                  )}
                </StyledCarouselItem>
              ))}
            </div>
          </StyledCarouselInner>
        </StyledCarouselContainer>
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
