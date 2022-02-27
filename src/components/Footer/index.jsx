import styled from 'styled-components'
import Logo from '../../assets/logo-footer.svg'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const LogoFooter = styled.img`
  width: 122px;
  margin-top: 66px;
  @media only screen and (max-width: 768px) {
    margin-top: 62px;
  }
`
const StyledP = styled.p`
  font-size: 24px;
  margin: 46px 0px 29px 0px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
    margin: 31px 0px 62px 0px;
  }
`

function Footer() {
  return (
    <FooterContainer>
      <LogoFooter src={Logo} alt="Logo Kasa en blanc" />
      <StyledP>© 2020 Kasa. All rights reserved</StyledP>
    </FooterContainer>
  )
}

export default Footer
