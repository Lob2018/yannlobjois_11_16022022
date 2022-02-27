import styled from 'styled-components'
import FullStar from '../../assets/star-full.svg'
import EmptyStar from '../../assets/star-empty.svg'

const StyledRatingContainer = styled.p`
  margin: 0;
  display: inline-flex;
  gap: 10px;
  flex-grow: 1;
  justify-content: flex-end;
  width: 30%;
  @media only screen and (max-width: 768px) {
    margin-top: 16px;
    justify-content: flex-start;
    align-items: center;
    max-width: 50%;
    gap: 5px;
  }
`

const StyledStars = styled.img`
  width: 30px;
  height: 30px;
  @media only screen and (max-width: 768px) {
    width: 15px;
    height: 15px;
  }
`

function Rating({ value }) {
  const range = [1, 2, 3, 4, 5]

  return (
    <StyledRatingContainer aria-roledescription="rating">
      {range.map((rangeElem) =>
        value >= rangeElem ? (
          <span key={rangeElem.toString()}>
            <StyledStars src={FullStar} alt="full-star-icon" />
          </span>
        ) : (
          <span key={rangeElem.toString()}>
            <StyledStars src={EmptyStar} alt="empty-star-icon" />
          </span>
        )
      )}
    </StyledRatingContainer>
  )
}

export default Rating
