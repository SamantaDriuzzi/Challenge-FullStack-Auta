// SuccessPage.jsx
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f8ff;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  color: #4caf50;
  margin-bottom: 20px;
`;

const Message = styled.p`
  color: #333;
  font-size: 18px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const SuccessPage = () => {
  return (
    <Container>
      <Title>¡Pago Realizado con Éxito!</Title>
      <Message>
        Tu reserva ha sido procesada exitosamente. Un agente de operaciones se comunicará contigo pronto para finalizar los detalles.
      </Message>
      <Button onClick={() => window.location.href = '/'}>
        Volver al Inicio
      </Button>
    </Container>
  );
};

export default SuccessPage;
