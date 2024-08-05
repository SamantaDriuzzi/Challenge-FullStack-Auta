import styled from 'styled-components';
import vehiclePageCart from '../../assets/vehiclePageCart.svg';

export const ContainerCart = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${vehiclePageCart});
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

  h1 {
    margin-top: 150px;
    font-size: 24px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    padding: 10px;
    padding-bottom: 50px;

    h1 {
      margin-top: 100px;
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      margin-top: 50px;
      font-size: 18px;
    }
  }
`;

export const ContainerCartItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  margin-top: 200px; /* Margen superior significativo */

  @media (max-width: 768px) {
    margin-top: 150px;
    padding: 10px;
  }

  @media (max-width: 480px) {
    margin-top: 100px;
    padding: 5px;
  }
`;

export const ContainerEmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;

  p {
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: bold;
  }

  img {
    width: 300px;
    height: auto;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    p {
      font-size: 20px;
    }

    img {
      width: 200px;
    }
  }

  @media (max-width: 480px) {
    p {
      font-size: 18px;
    }

    img {
      width: 150px;
    }
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
    width: 150px;
    height: auto;
    border-radius: 8px;
    margin-right: 20px;
  }

  .details {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;

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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    img {
      width: 80px;
      margin-bottom: 10px;
    }

    .details {
      align-items: center;
      text-align: center;

      p {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 480px) {
    img {
      width: 60px;
    }

    .details {
      p {
        font-size: 12px;
      }
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
  margin: 20px;
  width: 50%;

  &:hover {
    background: #218838;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
    margin: 10px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
    margin: 5px;
  }
`;

export const CartItemsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  max-width: 800px;
  margin-right: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
   
  }
`;

export const CartSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  max-width: 300px;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }

  p {
    font-size: 20px;
    font-weight: bold;
  }

  button {
    margin-top: 10px;
  }
`;
