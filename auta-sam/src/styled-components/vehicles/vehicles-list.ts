import styled from "styled-components";
import vehiclePage from '../../assets/vehiclePage.svg';

 const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-image: url(${vehiclePage});
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  align-items: center;
  
`
const ContainerFilters = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 200px;
  gap: 20px;
  margin-left: 15px;

`
 const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: var(--family-color-secondary);
  font-weight: bold;

  
`;

 const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 0.25rem;

  &:focus {
    border-color: var(--color-primary); 
    outline: none;
  }
`;

 const ContainerVehicles = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  padding: 20px;
  gap: 20px;
`;

 const VehicleCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  overflow: hidden;
  margin-top: 140px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;


  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .details {
    padding: 10px;
    text-align: left;
    width: 50%;

    p {
      margin: 5px 0;
      display: flex;
      justify-content: space-between;
      font-size: 0.9rem;
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
  
  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
  }
`;

 const NoVehiclesMessage = styled.p`
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  margin-top: 50px;
`;

export { Container, ContainerFilters, ContainerVehicles, Label, Input, VehicleCard, NoVehiclesMessage };