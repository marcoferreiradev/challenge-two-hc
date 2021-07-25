import styled from 'styled-components';

export const Group = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 2.4rem;

`;

export const GroupText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.8rem;
`;

export const Label = styled.label`
  font-size: 1.6rem;
  color: var(--color-base-gray);
`;

export const Errors = styled.div`
  p {
    font-size: 1.6rem;
    color: var(--color-type-error);
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  flex: 1;
  border-color: var(--color-form-input-border);
  border-style: solid;
  border-width: 2px;
  border-radius: 4px;
  box-shadow: none;
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: .02em;
  margin: 0;
  min-height: 4.4rem;
  outline: 0;
  padding: 0 1.6rem;
  transition: border-color .2s ease;


  &:active, &:focus {
    border-color: var(--color-form-input-active);
  }
  &.in--error {
    border-color: var(--color-form-status-error);
    color: var(--color-type-error);
  }
`;