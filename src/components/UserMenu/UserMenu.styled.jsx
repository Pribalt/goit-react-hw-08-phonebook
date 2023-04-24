import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Username = styled.p`
  font-size: 18px;
  color: white;
`;

export const Button = styled.button`
  width: 100%;
  min-height: 30px;

  font-weight: 500;
  font-size: 18px;

  background-color: white;
  color: black;

  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 8px;
  outline: rgba(0, 0, 0, 0);

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus,
  :hover {
    color: #2196f3;
  }
`;
