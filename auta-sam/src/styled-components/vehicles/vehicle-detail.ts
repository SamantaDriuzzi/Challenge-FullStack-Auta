import styled from 'styled-components';
import vehiclePage from '../../assets/vehiclePage.svg';

export const ContainerDetail = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${vehiclePage});
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  padding-bottom: 100px;

`;

export const ModalDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: calc(100vh - 200px);
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  max-width: 800px;
  background-color: #fff;
  text-align: center; 
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }

  button {
    align-self: flex-start;
    background: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.3s;

    &:hover {
      background: #0056b3;
    }
  }

  h1 {
    margin: 20px 0;
    font-size: 32px;
    color: #333;
  }
  
  .image-container {
    width: 100%;
    max-width: 600px;
    height: 400px;

    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }
  }

  .details {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    max-width: 400px;
    margin-bottom: 20px;
  }
  .description {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
  }

  p {
    margin: 8px 0;
    font-size: 16px;
    color: #333;
  }

  .label {
    font-weight: bold;
    color: #555;
  }

  .value {
    color: #777;
  }
`;
export const Button = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  margin-top: 20px;

  button {
    background: var(--color-primary);
    color: white;
    font-weight: bold;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.3s;
    width: 100%;
    height: 100%;

    &:hover {
      background: var(--color-tertiary);
    }
  }
  
`;
