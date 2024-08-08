import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: var(--family-color);
  height: 80px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;

  ul {
    display: flex;
    list-style: none;
    padding: 10px;
    margin: 0;
    background-color: var(--color-secondary);
    border-radius: 20px;
    transition: all 0.3s ease;

    &.active {
      display: flex;
    }

    li {
      margin: 0 10px;
      color: var(--family-color-secondary);
      font-size: 1rem;
      font-family: "Inter", sans-serif;
      padding: 8px;
      font-weight: bold;

      a {
        color: inherit;
        text-decoration: none;
      }

      &:hover {
        background-color: var(--color-primary);
        border-radius: 20px;
        padding: 8px;
        color: var(--family-color-primary);
        font-weight: bold;
      }
    }
  }

  @media (max-width: 768px) {
    
    ul {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 80px;
      right: 0;
      width: 100%;
      background-color: var(--color-primary);
      border-radius: 20px;
      font-size: 1rem;
      font-family:  var(--font-family);
      padding: 10px;
      font-weight: bold;
      text-align: center;

      
    }

    ul.active {
      display: flex; 

    }
  }
`;

export const NavStart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
`;

export const ElementNull = styled.div`
  display: flex;
  width: calc(100% / 3);
`;

export const ImgContainer = styled.div`
  display: flex;
  width: calc(100% / 3);
  justify-content: center;

  img {
    width: 40%;
    height: auto;
    margin: 20px 0  20px 0;
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
