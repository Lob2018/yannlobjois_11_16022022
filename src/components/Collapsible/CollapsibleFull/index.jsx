import PropTypes from 'prop-types'
import { useState } from 'react'
import styled from 'styled-components'
import colors from '../../../utils/style/colors'
import ChevronHaut from '../../../assets/chevron-haut.svg'
import ChevronBas from '../../../assets/chevron-bas.svg'

const StyledCollapsibleFull = styled.div`
  width: 84.12%;
  max-width: 1023px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`
const StyledCollapsibleButton = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: ${colors.primary};
  color: #fff;
  font-size: 18px;
  width: 100%;
  border-radius: 10px;
  border-width: 0;
  height: 47px;
  padding: 13px 0px 13px 20px;
  position: relative;
  z-index: 1;
  @media only screen and (max-width: 768px) {
    font-size: 13px;
    border-radius: 5px;
    height: 29.93px;
    padding: 5.48px 0px 5.45px 11.51px;
  }
`
const StyledCardBtnTxt = styled.span`
  font-size: 24px;
  line-height: 34.22px;
  box-sizing: border-box;
  background-color: ${colors.primary};
  width: calc(100% - 71px);
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  text-overflow: ellipsis;
  @media only screen and (max-width: 768px) {
    width: calc(100% - 30px);
    font-size: 13px;
    line-height: 18.54px;
  }
`

const StyledCardBtnChevronHaut = styled.span`
  background-color: ${colors.primary};
  cursor: pointer;
  width: 23.86px;
  height: 14.06px;
  content: url(${ChevronHaut});
  margin-right: 32.61px;
  @media only screen and (max-width: 768px) {
    width: 15.2px;
    height: 8.96px;
    margin-right: 6.79px;
  }
`

const StyledCardBtnChevronBas = styled.span`
  background-color: ${colors.primary};
  cursor: pointer;
  width: 23.86px;
  height: 14.06px;
  content: url(${ChevronBas});
  margin-right: 32.61px;
  @media only screen and (max-width: 768px) {
    width: 15.2px;
    height: 8.96px;
    margin-right: 6.79px;
  }
`
const StyledCardContentContainerFull = styled.p`
  box-sizing: border-box;
  max-width: 100%;
  color: ${colors.primary};
  background-color: ${colors.bgDropdown};
  border-radius: 10px;
  padding: 36px 27px 19px 18px;
  margin: -20px 0 0 0;
  @media only screen and (max-width: 768px) {
    border-radius: 5px;
    padding: 23.08px 6.91px 52.58px 11.51px;
    margin: -10px 0 0 0;
  }
`

const StyledCardContentTextFull = styled.span`
  line-height: 34.22px;
  font-size: 24px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 17.11px;
  }
`

function CollapsibleFull(props) {
  const [isOpen, setIsOpen] = useState(false)

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) setIsOpen(!isOpen)
  }

  return (
    <StyledCollapsibleFull>
      <>
        <StyledCollapsibleButton
          onClick={() => setIsOpen(!isOpen)}
          onKeyUp={(e) => handleKeyUp(e)}
          role="button"
          aria-controls={props.title}
          aria-expanded={!isOpen ? 'false' : 'true'}
          tabIndex="0"
        >
          <StyledCardBtnTxt>{props.title}</StyledCardBtnTxt>
          {!isOpen ? <StyledCardBtnChevronBas /> : <StyledCardBtnChevronHaut />}
        </StyledCollapsibleButton>

        <StyledCardContentContainerFull
          className={isOpen ? undefined : 'hidden'}
          id={props.title}
          tabIndex="0"
        >
          <StyledCardContentTextFull>
            {props.children}
          </StyledCardContentTextFull>
        </StyledCardContentContainerFull>
      </>
    </StyledCollapsibleFull>
  )
}

CollapsibleFull.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

CollapsibleFull.defaultProps = {
  title: 'Titre vide',
  children: 'Contenu vide',
}

export default CollapsibleFull
