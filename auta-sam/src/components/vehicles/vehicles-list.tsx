import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, onSnapshot, QuerySnapshot, DocumentData, query, where } from 'firebase/firestore';
import { db } from '../../firebase.config';
import { Vehicle, VehicleFilters } from '../../interfaces/Ivehicles';
import { Container, ContainerFilters, ContainerVehicles, ContainerImage, Input, Label, NoVehiclesMessage, VehicleCard } from '../../styled-components/vehicles/vehicles-list';
import Loading from '../loading/loading';


const VehicleList: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [filters, setFilters] = useState<VehicleFilters>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setError(null);

    const vehiclesRef = collection(db, 'vehicles');
    let q = vehiclesRef as any;

    if (filters.brand) {
      q = query(q, where('brand', '==', filters.brand));
    }
    if (filters.model) {
      q = query(q, where('model', '==', filters.model));
    }

    const unsubscribe = onSnapshot(q, (snapshot: QuerySnapshot<DocumentData>) => {
      const vehiclesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Vehicle[];
      setVehicles(vehiclesData);
      console.log('Vehicles data: de firebase', vehiclesData);

      setLoading(false);
    }, (error) => {
      setError('Failed to fetch vehicles');
      setLoading(false);
    });

    return () => unsubscribe();
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
        {loading && <div><Loading /></div>}
        {error && <p>{error}</p>}
        {!loading && !error && vehicles.length === 0 && <NoVehiclesMessage>No vehicles found</NoVehiclesMessage>}
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} onClick={() => handleCardClick(vehicle.id)}>
            <ContainerImage>
              <img src={vehicle.imageURL} alt={`${vehicle.brand} ${vehicle.model}`} />
            </ContainerImage>
            <div className="details">
              <p><span className="label">Marca:</span> <span className="value">{vehicle.brand}</span></p>
              <p><span className="label">Modelo:</span> <span className="value">{vehicle.model}</span></p>
              <p><span className="label">Año:</span> <span className="value">{vehicle.year}</span></p>
              <p><span className="label">Precio:</span> <span className="value">${vehicle.price}</span></p>
              <p><span className="label">Estado:</span> <span className="value">{vehicle.status === "available" ? "Disponible" : "No disponible"}</span></p>
            </div>
          </VehicleCard>
        ))}
      </ContainerVehicles>
    </Container>
  );
};

export default VehicleList;
