import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase.config';
import { Vehicle } from '../../interfaces/Ivehicles';
import { Button, Container, ContainerForm, Form, Input, Label, Select, Card, CardTitle, CardContent, TextArea } from '../../styled-components/admin/edit-vehicle-id';
import Swal from 'sweetalert2';
import Loading from '../loading/loading';

const EditVehicle: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { control, handleSubmit, setValue } = useForm<Vehicle>();
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
          const vehicleData = vehicleSnap.data() as Vehicle;
          setValue('brand', vehicleData.brand);
          setValue('model', vehicleData.model);
          setValue('year', vehicleData.year);
          setValue('description', vehicleData.description);
          setValue('price', vehicleData.price);
          setValue('status', vehicleData.status);
          setVehicle(vehicleData); // Store the vehicle data to show in the card
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
  }, [id, setValue]);

  const onSubmit = async (data: Vehicle) => {
    if (!id) return;

    const { brand, model, year, price, status } = data;
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

  if (loading) return <div><Loading /></div>;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      <ContainerForm>
        <Card>
          <CardTitle>Estás editando este vehículo</CardTitle>
          {vehicle && (
            <CardContent>
              <p><strong>Marca:</strong> {vehicle.brand}</p>
              <p><strong>Modelo:</strong> {vehicle.model}</p>
              <p><strong>Año:</strong> {vehicle.year}</p>
              <p><strong>Precio:</strong> ${vehicle.price}</p>
              <p><strong>Descripción:</strong> {vehicle.description}</p>
              <p><strong>Estado:</strong> {vehicle.status === 'available' ? 'Disponible' : 'No disponible'}</p>
            </CardContent>
          )}
        </Card>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>
            Marca:
            <Controller
              name="brand"
              control={control}
              defaultValue=""
              render={({ field }) => <Input {...field} required />}
            />
          </Label>
          <Label>
            Modelo:
            <Controller
              name="model"
              control={control}
              defaultValue=""
              render={({ field }) => <Input {...field} required />}
            />
          </Label>
          <Label>
            Año:
            <Controller
              name="year"
              control={control}
              defaultValue={0}
              render={({ field }) => <Input type="number" {...field} required />}
            />
          </Label>
          <Label>
            Precio:
            <Controller
              name="price"
              control={control}
              defaultValue={0}
              render={({ field }) => <Input type="number" {...field} required />}
            />
          </Label>
          <Label>
            Detalle:
            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({ field }) => <TextArea {...field} rows={4} required />}
            />
          </Label>
          <Label>
            Estado:
            <Controller
              name="status"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select {...field} required>
                  <option value="available">Disponible</option>
                  <option value="not available">No disponible</option>
                </Select>
              )}
            />
          </Label>
          <Button type="submit">Guardar cambios</Button>
        </Form>
      </ContainerForm>
    </Container>
  );
};

export default EditVehicle;
