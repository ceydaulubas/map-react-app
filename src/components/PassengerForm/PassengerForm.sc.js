import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 500px;
  margin: 20px auto;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  color:#808080;
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  background-color: #f1f1f1;
  padding: 5px;
  border-radius: 5px;
  padding:2px
`;

export const StyledInput = styled.input`
  padding: 5px;
  font-size: 14px;
  border: 1px solid #efefef;
  border-radius: 3px;
  width: 100%;
  height: 25px; 
  margin-left: 10px;
  color: #ff9f00;
  background-color: #f1f1f1;
  &:hover,
  &:focus {
    border: 1px solid #ff9f00;
    outline: none;
  }
`;

export const StyledButton = styled.button`
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  background-color: #ff9f00;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ff4700;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const InputRow = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const IconWrapper = styled.span`
  color: #ff9f00;
  margin-right: 5px;
`;
