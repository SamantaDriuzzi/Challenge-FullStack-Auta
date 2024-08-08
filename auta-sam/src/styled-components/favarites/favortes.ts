import styled from "styled-components";
import favoritePage from "../../assets/favoritePage.svg";

export const FavoritePage = styled.body`
  display: flex;
  background-image: url(${favoritePage});
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    background-size: cover;
  }
`
export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
  margin-bottom: 50px;
  gap: 20px;
  font-family: var(--font-family);
  color: var(--color-primary);
  font-weight: bold;
  font-size: 24px;
`
export const ContainerCar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

`
export const Car = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 200px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px;
  background-color: #fff;
  
  img {
    width: 200px;
    height: 200px;
  }
  p {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 14px;
    font-family: var(--font-family);
    color: var(--family-color-secondary);
    font-weight: bold;
    text-align: center;
  
  }
  &:hover {
    cursor: pointer;
    scale: 1.05;
    transition: all 0.3s ease;
  }
`