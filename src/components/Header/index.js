import React from 'react'
import IconLogo from '../../components/Logo';

import * as S from './styled';

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Nav>
        <S.LogoWrapper>
          <IconLogo />
        </S.LogoWrapper>
        <S.NavWrapper>
          <S.NavLink to="/cadastro-produtos">
            Cadastro de produtos
          </S.NavLink>
        </S.NavWrapper>
        <S.CredentialsGroup>
          <S.NavLink to="/login">
            Login
          </S.NavLink>
          <S.NavLink to="/signup" button>
            Cadastre-se
          </S.NavLink>
        </S.CredentialsGroup>
      </S.Nav>
    </S.HeaderContainer>
  )
}

export default Header;
