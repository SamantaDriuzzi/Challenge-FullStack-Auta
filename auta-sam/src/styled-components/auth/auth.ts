import styled from "styled-components";
import vehiclePage from "../../assets/vehiclePage.svg";

export const ContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${vehiclePage});
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  align-items: center;
  height: 100%;
  justify-content: center;
  text-align: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  margin-top: 100px;
  position: relative;
`;
export const Button = styled.button`
  margin-top: 20px;
  background: var(--color-primary);
  color: white;
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  &:hover {
    background: var(--color-tertiary);
    color: var(--family-color-secondary);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const Instructions = styled.p`
  font-size: 18px;
  color: var(--family-color-secondary);
  margin-bottom: 20px;
  font-family: var(--font-family);
`;

export const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid var(--color-primary);
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
