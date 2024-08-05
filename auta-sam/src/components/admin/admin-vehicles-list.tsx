import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, onSnapshot, QuerySnapshot, DocumentData, query, where, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase.config';
import { Vehicle, VehicleFilters } from '../../interfaces/Ivehicles';
import { Container, ContainerFilters, ContainerVehicles, Input, Label, NoVehiclesMessage, VehicleCard, Button } from '../../styled-components/admin/admin-vehicle-list';

const AdminVehicleList: React.FC = () => {
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

  const handleEditClick = (id: string) => {
    navigate(`/Admin/editVehicle/${id}`);
  };

  const handleDisableClick = async (id: string) => {
    try {
      const vehicleRef = doc(db, 'vehicles', id);
      const vehicle = vehicles.find((vehicle) => vehicle.id === id);
      const updatedStatus = vehicle ? (vehicle.status === 'available' ? 'not available' : 'available') : 'not available';
      await updateDoc(vehicleRef, { status: updatedStatus });

      // Actualizar el estado local para reflejar el cambio inmediatamente
      setVehicles((prevVehicles) => 
        prevVehicles.map(v => 
          v.id === id ? { ...v, status: updatedStatus } : v
        )
      );
    } catch (error) {
      console.error("Error disabling vehicle: ", error);
    }
  };

  const handleDeleteClick = async (id: string) => {
    try {
      const vehicleRef = doc(db, 'vehicles', id);
      await deleteDoc(vehicleRef);

      // Actualizar el estado local para reflejar el cambio inmediatamente
      setVehicles((prevVehicles) => 
        prevVehicles.filter(v => v.id !== id)
      );
    } catch (error) {
      console.error("Error deleting vehicle: ", error);
    }
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
          <VehicleCard key={vehicle.id}>
            <img src={vehicle.imageURL} alt={`${vehicle.brand} ${vehicle.model}`} />
            <div className="details">
              <p><span className="label">Marca:</span> <span className="value">{vehicle.brand}</span></p>
              <p><span className="label">Modelo:</span> <span className="value">{vehicle.model}</span></p>
              <p><span className="label">Año:</span> <span className="value">{vehicle.year}</span></p>
              <p><span className="label">Precio:</span> <span className="value">${vehicle.price}</span></p>
              <p><span className="label">Estado:</span> <span className="value">{vehicle.status === 'available' ? 'Disponible' : 'No disponible'}</span></p>
              <Button onClick={() => handleEditClick(vehicle.id)}>Editar</Button>
              <Button onClick={() => handleDisableClick(vehicle.id)}>{vehicle.status === 'available' ? 'Deshabilitar' : 'Habilitar'}</Button>
              <Button onClick={() => handleDeleteClick(vehicle.id)}>Eliminar</Button>
            </div>
          </VehicleCard>
        ))}
      </ContainerVehicles>
    </Container>
  );
};

export default AdminVehicleList;
