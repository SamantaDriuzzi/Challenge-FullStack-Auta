// src/styled-components/navbar/ModalStyles.ts

import styled from 'styled-components';
import { Button as MuiButton } from '@mui/material';

export const ContainerModal = styled.div`
  display: flex;
  justify-content: flex-end;

`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  top: 100px;
  right: 40px;
`;

export const Icon = styled.div`
  cursor: pointer;
  margin-left: auto;
  padding: 0 25px;
  display: flex;
  align-items: center;
`;

export const Button = styled(MuiButton)`
  display: block;
  margin-bottom: 10px;

  &:hover {
    background-color: #f5f5f5;
  }
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: #333;
  &:hover {
    color: #000;
  }
`;