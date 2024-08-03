import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { getVehicles } from '../../API/vehicles';
import { Vehicle, VehicleFilters } from '../../interfaces/Ivehicles';
import { Container, ContainerFilters, ContainerVehicles, Input, Label, NoVehiclesMessage, VehicleCard } from '../../styled-components/vehicles/vehicles-list';

const VehicleList: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [filters, setFilters] = useState<VehicleFilters>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Hook para navegación

  useEffect(() => {
    const fetchVehicles = async () => {
      setLoading(true);
      setError(null);
      try {
        const vehicles = await getVehicles(filters);
        setVehicles(vehicles);
      } catch (err) {
        setError('Failed to fetch vehicles');
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, [filters]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleCardClick = (id: string) => {
    navigate(`/vehicle/${id}`); 
  };

  return (
    <Container>
      <ContainerFilters>
        <Label>
          Marca:
          <Input
            type="text"
            name="brand"
            value={filters.brand || ''}
            onChange={handleFilterChange}
          />
        </Label>
        <Label>
          Modelo:
          <Input
            type="text"
            name="model"
            value={filters.model || ''}
            onChange={handleFilterChange}
          />
        </Label>
      </ContainerFilters>
      <ContainerVehicles>
        {loading && <p>Loading vehicles...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && vehicles.length === 0 && <NoVehiclesMessage>No vehicles found</NoVehiclesMessage>}
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} onClick={() => handleCardClick(vehicle.id)}> 
            <img src={vehicle.imageURL} alt={`${vehicle.brand} ${vehicle.model}`} />
            <div className="details">
              <p><span className="label">Marca:</span> <span className="value">{vehicle.brand}</span></p>
              <p><span className="label">Modelo:</span> <span className="value">{vehicle.model}</span></p>
              <p><span className="label">Año:</span> <span className="value">{vehicle.year}</span></p>
              <p><span className="label">Precio:</span> <span className="value">${vehicle.price}</span></p>
              <p><span className="label">Estado:</span> <span className="value">{vehicle.status}</span></p>
            </div>
          </VehicleCard>
        ))}
      </ContainerVehicles>
    </Container>
  );
};

export default VehicleList;
