import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
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
`;
export const NavStart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
`
export const ElementNull = styled.div`
  display: flex;
  width: calc(100% / 3);
`
export const ImgContainer = styled.div`
  display: flex;
  width: calc(100% / 3);
  justify-content: center;

  img {
    width: 40%;
    height: auto;
    margin: 20px 0  20px 0;
  }
`