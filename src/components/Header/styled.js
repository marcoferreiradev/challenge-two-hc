import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import ButtonLink from '../../components/ButtonLink';


export const HeaderContainer = styled.header`
  max-width: 960px;
  width: 960px;
  position: relative;
  margin: 0 auto;
  padding: 1.6rem;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  svg {
    width: 200px;
  }
`;

export const CredentialsGroup = styled.div`
  display: flex;
  align-items: baseline;
  margin-left: auto;

`;

export const NavButton = styled(ButtonLink)`
  min-height: 32px;
  font-size: 1.3rem;
  height: 3.2rem;
  background: red;
`;


export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const styleButton = css`
  background: var(--color-button-primary);
  color: var(--color-neutral-white);
  min-height: 3.2rem;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 0 1.6rem;

  &:hover, &:active {
    background: var(--color-button-primary-hover);
    color: var(--color-neutral-white);
  }
`;

export const NavLink = styled(Link)`
  color: var(--color-base-blue);
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: .1em;
  margin-right: 4rem;
  transition: color .2s ease;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: var(--color-link-hover);
  }

  ${props => props.button && styleButton}
`;