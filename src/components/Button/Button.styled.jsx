import styled from '@emotion/styled'

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  margin-bottom: 16px;
  padding: 16px 8px;

  border: 1px solid;
  border-radius: 4px;

  font-size: 16px;
  color: #000;

  background-color: #B9E4C9;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(1);

  &:hover,
  &:focus {
    transform: scale(0.8);
  }
`;