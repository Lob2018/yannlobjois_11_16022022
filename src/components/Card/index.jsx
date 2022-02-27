import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledCard = styled(Link)`
  box-sizing: border-box;
  position: relative;
  width: calc(33.33% - 60px);
  min-width: 340px;
  min-height: 340px;
  border-radius: 10px;
  overflow: hidden;
  flex-grow: 1;
  &:after {
    content: '';
    border-radius: 10px;
    position: absolute;
    left: 0;
    top: 0;
    min-width: 100%;
    min-height: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }

  @media only screen and (max-width: 768px) {
    width: 335px;
    height: 255px;
    min-width: 100%;
    min-height: 100%;
  }
`

const StyledCardPicture = styled.img`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  min-width: 100%;
  min-height: 100%;
  border-radius: 10px;
  display: inline-block;
  object-fit: cover;

  @media only screen and (max-width: 768px) {
    width: 335px;
    height: 255px;
    min-width: 100%;
    min-height: 100%;
  }
`

const StyledCardTitre = styled.h2`
  box-sizing: border-box;
  position: absolute;
  z-index: 1;
  bottom: 20px;
  margin: 0px 20px 0px 20px;
  line-height: 25.67px;
  color: #fff;
  font-weight: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  @media only screen and (max-width: 768px) {
    font-size: 18px;
    bottom: 15px;
    margin: 0px 19.71px 0px 19.71px;
  }
`

function Card(props) {
  return (
    <StyledCard
      aria-label={'Page : ' + props.children}
      tabIndex="0"
      to={'/fiche-logement/' + props.id}
    >
      <StyledCardPicture
        src={props.picture}
        alt={'Logement : ' + props.children}
      ></StyledCardPicture>
      <StyledCardTitre>{props.children}</StyledCardTitre>
    </StyledCard>
  )
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

Card.defaultProps = {
  id: -1,
  picture: '',
  children: 'Titre',
}

export default Card
