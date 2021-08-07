import styled from 'styled-components';


export const Container = styled.section`
  width: 100%;
  position: relative;
  min-height: 100vh;
  background: var(--color-base-bone);
`;

export const ContainerWrapper = styled.article`
  max-width: 960px;
  width: 100%;
  position: relative;
  margin: 0 auto;
`;

export const AnimationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content:center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 4.8rem;
  font-weight: 900;
  line-height: 53px;
  color: var(--color-base-blue);
  /* margin-top: 5rem; */
  text-align: center;
`;

export const  Description = styled.p`
  font-size: 2rem;
  color: var(--color-base-gray);
  font-weight: 400;
  letter-spacing: .01em;
  line-height: 30px;
  text-align: center;
  margin-top: 1.6rem;
`;

export const DividerWrapper = styled.div``;