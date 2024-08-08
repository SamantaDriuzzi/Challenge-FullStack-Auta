import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { Vehicle } from '../../interfaces/Ivehicles';
import { db, storage } from '../../firebase.config';
import { Button, ErrorMessage, Form, SectionAdmin, ContainerForm, Title } from '../../styled-components/admin/add-vehicle';
import Swal from 'sweetalert2';

const AddVehicleForm: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<Vehicle>();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const onSubmit = async (data: Vehicle) => {
    setLoading(true);
    setError(null);

    try {
      
      let imageUrl = '';
      if (image) {
        const storageRef = ref(storage, `vehicles/${image.name}`);
        await uploadBytes(storageRef, image);
        imageUrl = await getDownloadURL(storageRef);
      }

      const status = data.status === 'Disponible' ? 'available' : 'not available';

      const newVehicle: Vehicle = {
        ...data,
        status,
        imageURL: imageUrl
      };

      await addDoc(collection(db, 'vehicles'), newVehicle);
      Swal.fire('Éxito', 'Vehículo agregado correctamente', 'success');
      
    } catch (err) {
      setError('Failed to add vehicle');
      
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionAdmin>
      <ContainerForm>
        <Title>Agrega un vehículo en la tienda:</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Brand:</label>
            <Controller
              name="brand"
              control={control}
              defaultValue=""
              rules={{ required: 'Brand is required' }}
              render={({ field }) => <input {...field} />}
            />
            {errors.brand && <ErrorMessage>{errors.brand.message}</ErrorMessage>}
          </div>

          <div>
            <label>Modelo:</label>
            <Controller
              name="model"
              control={control}
              defaultValue=""
              rules={{ required: 'Model is required' }}
              render={({ field }) => <input {...field} />}
            />
            {errors.model && <ErrorMessage>{errors.model.message}</ErrorMessage>}
          </div>

          <div>
            <label>Año:</label>
            <Controller
              name="year"
              control={control}
              defaultValue={0}
              rules={{ required: 'Year is required' }}
              render={({ field }) => <input type="number" {...field} />}
            />
            {errors.year && <ErrorMessage>{errors.year.message}</ErrorMessage>}
          </div>

          <div>
            <label>Descripción:</label>
            <Controller
              name="description"
              control={control}
              defaultValue=""
              rules={{ required: 'Description is required' }}
              render={({ field }) => <input type="text" {...field} />}
            />
            {errors.description && <ErrorMessage>{errors.description.message}</ErrorMessage>}
          </div>

          <div>
            <label>Precio:</label>
            <Controller
              name="price"
              control={control}
              defaultValue={0}
              rules={{ required: 'Price is required' }}
              render={({ field }) => <input type="number" {...field} />}
            />
            {errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}
          </div>

          <div>
            <label>Estado:</label>
            <Controller
              name="status"
              control={control}
              defaultValue="Disponible"
              rules={{ required: 'Status is required' }}
              render={({ field }) => (
                <select {...field}>
                  <option value="Disponible">Disponible</option>
                  <option value="No disponible">No disponible</option>
                </select>
              )}
            />
            {errors.status && <ErrorMessage>{errors.status.message}</ErrorMessage>}
          </div>

          <div>
            <label>Imágen:</label>
            <input type="file" onChange={handleFileChange} />
          </div>

          <Button type="submit" disabled={loading}>Agregar Vehículo</Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Form>
      </ContainerForm>

    </SectionAdmin>
  );
};

export default AddVehicleForm;
