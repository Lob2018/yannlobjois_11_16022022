import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/logo.svg'

const HeaderLogo = styled.img`
  width: 210px;
  @media only screen and (max-width: 768px) {
    width: 145px;
  }
`
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledNav = styled.nav``

const StyledUL = styled.ul`
  display: flex;
  justify-content: right;
  gap: 57px;
  @media only screen and (max-width: 768px) {
    gap: 10px;
  }
`
const StyledLI = styled.li`
  list-style-type: none;
`

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <HeaderLogo src={Logo} alt="Logo Kasa" />
      </Link>
      <StyledNav aria-label="Navigation principale">
        <StyledUL role="menubar" aria-label="Navigation principale">
          <StyledLI role="none">
            <NavLink to="/" rel="noopener" role="menuitem" tabIndex="0">
              Accueil
            </NavLink>
          </StyledLI>
          <StyledLI role="none">
            <NavLink to="/a-propos" rel="noopener" role="menuitem" tabIndex="0">
              À propos
            </NavLink>
          </StyledLI>
        </StyledUL>
      </StyledNav>
    </HeaderContainer>
  )
}

export default Header
