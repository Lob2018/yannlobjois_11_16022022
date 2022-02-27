import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors.js'

const QuatCentQuatContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Styled404H1 = styled.h1`
  color: ${colors.primary};
  font-size: 288px;
  font-weight: 700;
  height: 263px;
  margin: 169px 0 66px 0;
  line-height: 1;
  @media only screen and (max-width: 768px) {
    font-size: 96px;
    height: 99px;
    margin: 199px 0 11px 0;
  }
`
const Styled404P = styled.p`
  text-align: center;
  color: ${colors.primary};
  font-size: 36px;
  margin: 0 0 182px 0;
  @media only screen and (max-width: 768px) {
    font-size: 18px;
    margin: 0 0 133px 0;
    width: 260px;
  }
`
const StyledLink = styled(Link)`
  margin-bottom: 159px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 235px;
    font-size: 14px;
  }
`

function QuatCentQuat() {
  return (
    <QuatCentQuatContainer>
      <Styled404H1>404</Styled404H1>
      <Styled404P>Oups! La page que vous demandez n'existe pas.</Styled404P>
      <StyledLink to="/" rel="noopener">
        Retourner sur la page d'accueil
      </StyledLink>
    </QuatCentQuatContainer>
  )
}

export default QuatCentQuat
