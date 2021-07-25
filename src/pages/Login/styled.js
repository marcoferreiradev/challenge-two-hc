import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
`;

export const ContainerAside = styled.article`
  width: 50%;
  padding: 3.2rem 0;
  background: var(--color-base-bone);
  min-height: 100vh;
  border-right: 1px solid var(--color-base-gray-secondary);
`;

export const ContainerMain = styled.article`
  width: 50%;
  height: 100%;
  min-height: 100vh;
`;

export const AsideWrapper = styled.div`
  max-width: 640px;
  padding: 0 6.5rem;
`;

export const LogoWrapper = styled.div`
  margin-bottom: 4rem;
`;

export const Title = styled.h2`
  color: var(--color-base-blue);
  font-size: 4.8rem;
  letter-spacing: -.01em;
  line-height: 53px;
  font-weight: 900;
  margin-bottom: 0.2rem;
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

export const MainWrapper = styled.div`
  max-width: 40rem;
  padding: 3.2rem 0;
  margin: 0 12.8rem;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;


export const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const FormTitle = styled.h2`
  font-size: 3.2rem;
  line-height: 35px;
  font-weight: 900;
  color: var(--color-base-blue);
  margin-bottom: 2.4rem;
`;


export const FormButton = styled.div`
  width: 100%;

  svg {
    width: 100%;
    margin: 2.4rem 0 ;
  }
`;

export const TextBottom = styled.div`
  width: 100%;
  text-align: center;
  color: var(--color-base-gray);
  font-size: 1.6rem;

  a {
    color: var(--color-link-static);
    font-weight: 500;
    text-decoration: none;
    transition: color .2s ease;

    &:hover {
      color: var(--color-link-hover);
    }
  }
`;