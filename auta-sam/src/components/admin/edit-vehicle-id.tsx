import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase.config';
import { Vehicle } from '../../interfaces/Ivehicles';
import { Button, Container, ContainerForm, Form, Input, Label } from '../../styled-components/admin/edit-vehicle-id';
import Swal from 'sweetalert2';

const EditVehicle: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Obtiene el ID del vehículo de la URL
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVehicle = async () => {
      if (!id) {
        setError('Vehicle ID is required');
        setLoading(false);
        return;
      }

      try {
        const vehicleRef = doc(db, 'vehicles', id);
        const vehicleSnap = await getDoc(vehicleRef);

        if (vehicleSnap.exists()) {
          setVehicle({ id: vehicleSnap.id, ...vehicleSnap.data() } as Vehicle);
        } else {
          setError('Vehicle not found');
        }
      } catch (error) {
        setError('Failed to fetch vehicle');
      } finally {
        setLoading(false);
      }
    };

    fetchVehicle();
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVehicle((prevVehicle) => prevVehicle ? { ...prevVehicle, [name]: value } : null);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!vehicle || !id) return;

    const { brand, model, year, price, status } = vehicle;
    const updatedVehicle = { brand, model, year, price, status };

    try {
      const vehicleRef = doc(db, 'vehicles', id);
      await updateDoc(vehicleRef, updatedVehicle);
      Swal.fire({
        title: 'Éxito',
        text: 'Automóvil actualizado correctamente',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
      setTimeout(() => {
        navigate('/Admin');
      }, 2000);
      
    } catch (error) {
      setError('Failed to update vehicle');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      <ContainerForm>

        <Form onSubmit={handleSubmit}>
          <Label>
            Marca:
            <Input
              type="text"
              name="brand"
              value={vehicle?.brand || ''}
              onChange={handleInputChange}
              required
            />
          </Label>
          <Label>
            Modelo:
            <Input
              type="text"
              name="model"
              value={vehicle?.model || ''}
              onChange={handleInputChange}
              required
            />
          </Label>
          <Label>
            Año:
            <Input
              type="number"
              name="year"
              value={vehicle?.year || ''}
              onChange={handleInputChange}
              required
            />
          </Label>
          <Label>
            Precio:
            <Input
              type="number"
              name="price"
              value={vehicle?.price || ''}
              onChange={handleInputChange}
              required
            />
          </Label>
          <Label>
            Estado:
            <Input
              type="text"
              name="status"
              value={vehicle?.status || ''}
              onChange={handleInputChange}
              required
            />
            option
          </Label>
          <Button type="submit">Guardar cambios</Button>
        </Form>
      </ContainerForm>
    </Container>
  );
};

export default EditVehicle;
