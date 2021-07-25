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

export const BigTitle = styled.h1`
  font-size: 8.6rem;
  font-weight: 900;
  line-height: 96px;
  color: var(--color-base-blue);
  margin-top: 5rem;
`;