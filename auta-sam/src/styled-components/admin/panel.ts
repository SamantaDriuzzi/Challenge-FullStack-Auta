import styled from "styled-components";
import adminPage from "../../assets/adminPage.svg";

export const ContainerPanelAdmin = styled.section`
  background-image: url(${adminPage});
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
  width: 400px;
  transform: translateX(150px);

  &:hover {
    background: #218838;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
    width: 300px;
    transform: translateX(0);
  }
`;