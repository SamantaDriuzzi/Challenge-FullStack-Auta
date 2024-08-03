import styled from 'styled-components';

export const ContainerCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 90%;
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;

  img {
    width: 100px;
    height: auto;
    border-radius: 8px;
    margin-right: 20px;
  }

  .details {
    display: flex;
    flex-direction: column;
    flex: 1;

    p {
      margin: 4px 0;
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
  }
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

  &:hover {
    background: #218838;
  }
`;
