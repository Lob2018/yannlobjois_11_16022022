import PropTypes from 'prop-types'
import { useState } from 'react'
import styled from 'styled-components'
import colors from '../../../utils/style/colors'
import ChevronHaut from '../../../assets/chevron-haut.svg'
import ChevronBas from '../../../assets/chevron-bas.svg'

const StyledCollapsibleHalf = styled.div`
  white-space: pre-line;

  width: 46.93%;
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
  width: 100%;
  border-radius: 10px;
  border-width: 0;
  height: 52px;
  padding: 13px 0px 13px 20px;
  position: relative;
  z-index: 1;
  @media only screen and (max-width: 768px) {
    border-radius: 5px;
    height: 29.93px;
    padding: 5.48px 0px 5.45px 11.51px;
  }
`
const StyledCardBtnTxt = styled.span`
  box-sizing: border-box;
  background-color: ${colors.primary};
  width: calc(100% - 50px);
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  text-overflow: ellipsis;
  font-size: 18px;
  line-height: 25.67px;
  @media only screen and (max-width: 768px) {
    font-size: 13px;
    line-height: 18.54px;
    width: calc(100% - 30px);
  }
`

const StyledCardBtnChevronHaut = styled.span`
  background-color: ${colors.primary};
  cursor: pointer;
  width: 26.4px;
  height: 15.56px;
  content: url(${ChevronHaut});
  margin-right: 12px;
  @media only screen and (max-width: 768px) {
    width: 15.2px;
    height: 8.96px;
    margin-right: 6.79px;
  }
`

const StyledCardBtnChevronBas = styled.span`
  background-color: ${colors.primary};
  cursor: pointer;
  width: 26.4px;
  height: 15.56px;
  content: url(${ChevronBas});
  margin-right: 12px;
  @media only screen and (max-width: 768px) {
    width: 15.2px;
    height: 8.96px;
    margin-right: 6.79px;
  }
`
const StyledCardContentContainerHalf = styled.p`
  box-sizing: border-box;
  height: 249px;
  max-width: 100%;
  color: ${colors.primary};
  background-color: ${colors.bgDropdown};
  border-radius: 10px;
  padding: 43px 12px 53px 20px;
  margin: -20px 0 0 0;
  @media only screen and (max-width: 768px) {
    height: 143.32px;
    border-radius: 5px;
    padding: 23.02px 6.91px 1.3px 11.51px;
    margin: -10px 0 0 0;
  }
`

const StyledCardContentTextHalf = styled.span`
  margin: 0;
  line-height: 25.67px;
  font-weight: 400;
  font-size: 18px;
  line-height: 25.67px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  @media only screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 12px;
    line-height: 17.11px;
    -webkit-line-clamp: 6;
  }
`

function CollapsibleHalf(props) {
  const [isOpen, setIsOpen] = useState(false)

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) setIsOpen(!isOpen)
  }

  return (
    <StyledCollapsibleHalf>
      <>
        <StyledCollapsibleButton
          onClick={() => setIsOpen(!isOpen)}
          onKeyUp={(e) => handleKeyUp(e)}
          role="button"
          aria-controls="ID"
          aria-expanded={!isOpen ? 'false' : 'true'}
          tabIndex="0"
        >
          <StyledCardBtnTxt>{props.title}</StyledCardBtnTxt>
          {!isOpen ? <StyledCardBtnChevronBas /> : <StyledCardBtnChevronHaut />}
        </StyledCollapsibleButton>

        <StyledCardContentContainerHalf
          className={isOpen ? undefined : 'hidden'}
          id="ID"
          tabIndex="0"
        >
          <StyledCardContentTextHalf>
            {props.children}
          </StyledCardContentTextHalf>
        </StyledCardContentContainerHalf>
      </>
    </StyledCollapsibleHalf>
  )
}

CollapsibleHalf.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

CollapsibleHalf.defaultProps = {
  title: 'Titre vide',
  children: 'Contenu vide',
}

export default CollapsibleHalf
