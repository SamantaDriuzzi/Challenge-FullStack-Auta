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


  img {
    width: 90px;
    height: 60px;
    margin: 20px 0  20px 0;
  }

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


      a {
        color: inherit;
        text-decoration: none;
      }

      &:hover {
        background-color: var(--color-primary);
        border-radius: 20px;
        padding: 8px;
        color: var(--family-color);
      }
    }
  }
`;