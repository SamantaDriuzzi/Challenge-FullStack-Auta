
import styled from "styled-components";
import adminPage from "../../assets/adminPage.svg";

export const SectionAdmin = styled.section`
  background-image: url(${adminPage});
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const Form = styled.form`
  background: white;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: rgba(195, 177, 229, 45%);
  position: relative;

  div {
    margin-bottom: 15px;
    
  }

  label {
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
  }

  input {
    width: 95%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  input[type="file"] {
    padding: 0;
  }

  button {
    background: #28a745;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.3s;
    width: 100%;

    &:hover {
      background: #218838;
    }

    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }

  p {
    color: red;
    margin-top: 5px;
    font-size: 14px;
  }
`;
export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 800px;
  margin-top: 300px;
  

`
export const Title = styled.div`
  margin-top: 300px;
  font-size: 24px;
  font-family: var(--font-family);
  color: var(--family-color-secondary);
  font-weight: bold;
`
export const ErrorMessage = styled.p`
  color: red;
  margin-top: 5px;
  font-size: 14px;
`;

export const Button = styled.button`
  background: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
  margin-top: 10px;

  &:hover {
    background: #218838;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;
export const ButtonAddCar = styled.button`
  background: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 24px;
  transition: background 0.3s;
  margin-top: 10px;
  width: 400px;
  margin-left: 250px;

  &:hover {
    background: #218838;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;
