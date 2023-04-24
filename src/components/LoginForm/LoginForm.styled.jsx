import styled from 'styled-components';

export const Title = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
`;

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;
`;

export const Form = styled.form`
  width: 350px;
  height: auto;

  padding: 20px;

  border-radius: 8px;
  background-color: #f5f4fa;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;
`;

export const Lable = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  gap: 8px;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;

  font-weight: 500;
  font-size: 16px;

  padding: 0 5px;

  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  outline: rgba(0, 0, 0, 0);

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus,
  :hover {
    border: 3px solid #2196f3;
  }
`;

export const Button = styled.button`
  width: 100%;
  min-height: 30px;

  font-weight: 500;
  font-size: 18px;

  background-color: black;
  color: white;

  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 8px;
  outline: rgba(0, 0, 0, 0);

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus,
  :hover {
    color: #2196f3;
  }
`;
