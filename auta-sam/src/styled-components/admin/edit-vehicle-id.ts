import styled from "styled-components";
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
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 900px;
  margin-right: 20px;
  margin-bottom: 120px;
  margin-top: 450px;
  position: absolute;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 768px) {
    width: 60%;
  }
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
  width: 95%;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-top: 8px;
  margin-bottom: 16px;
  font-size: 16px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s ease-in-out;
  appearance: none; /* Removes default styling in some browsers */

  &:focus {
    border-color: #007bff;
  }


  &::-ms-expand {
    display: none;
  }
  -webkit-appearance: none;
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj4KICA8cGF0aCBkPSJNNSA1LDE1IEM2LjUsMTAsMTAsMTUsMTAgMTUsNjguNSA0LjUsMTUsNSA1LC5xMDAiIHN0cm9rZT0iIzAwN2JmZiIgLz4KPC9zdmc+Cg==') no-repeat right 10px center;
  background-size: 12px;
  cursor: pointer;

  option {
    color: #333;
    background: #fff;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px; 
  margin-right: 20px; 
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
   display: none;
  }
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 15px;
  text-align: center;
`;

export const CardContent = styled.div`
  font-size: 14px;
  color: #333;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-top: 8px;
  margin-bottom: 16px;
  font-size: 16px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  resize: vertical;
  font-family: var(--font-family);
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: #007bff;
  }
`;
