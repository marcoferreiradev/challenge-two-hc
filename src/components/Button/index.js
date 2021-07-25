import styled , { css } from 'styled-components';

const Primary = css`
  background: var(--color-button-primary);
  color: var(--color-neutral-white);

  &:hover {
    background: var(--color-button-primary-hover);
  }
`;

const Button = styled.button`
  padding: 0.6rem 2.4rem;
  height: 4.8rem;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  font-style: normal;
  font-weight: bold;
  font-size: 1.6rem;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity .3s;
  letter-spacing: .02em;
  transform-origin: center center;
  transition: background-color .2s ease,transform .2s ease,-webkit-transform .2s ease;

  ${props => props.primary && Primary}
`;

export default Button;
