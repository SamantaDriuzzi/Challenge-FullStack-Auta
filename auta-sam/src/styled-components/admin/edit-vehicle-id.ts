import styled from 'styled-components';
import adminPageEdit from "../../assets/adminPageEdit.svg";

export const Container = styled.div`
  background-image: url(${adminPageEdit});
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
 export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  max-width: 500px;
  margin-right: 20px;
  margin-bottom: 120px;
  margin-top: 300px;
 `
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
  width: 95%;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  width: 100%;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }
`;
