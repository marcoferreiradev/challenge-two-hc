import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  position: relative;
  display: flex;
`;

export const ContainerAside = styled.article`
  width: 50%;
  padding: 1.5rem 0;
  background: var(--color-base-bone);
  min-height: 100vh;
  border-right: 1px solid var(--color-base-gray-secondary);
`;

export const ContainerMain = styled.article`
  width: 50%;
  min-height: 100vh;
`;

export const AsideWrapper = styled.div`
  max-width: 640px;
  padding: 0 6.5rem;
`;

export const LogoWrapper = styled.div``;

export const Logo = styled.img`

`;

export const Title = styled.h2`
  color: var(--color-base-blue);
  font-size: 4.8rem;
  letter-spacing: -.01em;
  line-height: 53px;
  font-weight: 900;
`;

export const AnimationWrapper = styled.div`
  pointer-events: none;
  position: relative;
  margin-bottom: 4rem;
`;


export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const FooterItem = styled.a`
  font-size: 1.6rem;
  color: var(--color-base-blue-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: color .2s ease;

  &:hover {
    color: var(--color-link-hover);
    cursor: pointer;
  }
`;

export const MainWrapper = styled.div``;

