// src/components/AddVehicleForm.tsx
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { Vehicle } from '../../interfaces/Ivehicles';
import { db, storage } from '../../firebase.config';

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
      // Upload image to Firebase Storage
      let imageUrl = '';
      if (image) {
        const storageRef = ref(storage, `vehicles/${image.name}`);
        await uploadBytes(storageRef, image);
        imageUrl = await getDownloadURL(storageRef);
      }

      // Add vehicle data to Firestore
      const newVehicle: Vehicle = {
        ...data, imageURL: imageUrl
      };

      await addDoc(collection(db, 'vehicles'), newVehicle);
      alert('Vehicle added successfully');
    } catch (err) {
      setError('Failed to add vehicle');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Brand:</label>
        <Controller
          name="brand"
          control={control}
          defaultValue=""
          rules={{ required: 'Brand is required' }}
          render={({ field }) => <input {...field} />}
        />
        {errors.brand && <p>{errors.brand.message}</p>}
      </div>

      <div>
        <label>Model:</label>
        <Controller
          name="model"
          control={control}
          defaultValue=""
          rules={{ required: 'Model is required' }}
          render={({ field }) => <input {...field} />}
        />
        {errors.model && <p>{errors.model.message}</p>}
      </div>

      <div>
        <label>Year:</label>
        <Controller
          name="year"
          control={control}
          defaultValue={0}
          rules={{ required: 'Year is required' }}
          render={({ field }) => <input type="number" {...field} />}
        />
        {errors.year && <p>{errors.year.message}</p>}
      </div>

      <div>
        <label>Price:</label>
        <Controller
          name="price"
          control={control}
          defaultValue={0}
          rules={{ required: 'Price is required' }}
          render={({ field }) => <input type="number" {...field} />}
        />
        {errors.price && <p>{errors.price.message}</p>}
      </div>

      <div>
        <label>Status:</label>
        <Controller
          name="status"
          control={control}
          defaultValue=""
          rules={{ required: 'Status is required' }}
          render={({ field }) => <input {...field} />}
        />
        {errors.status && <p>{errors.status.message}</p>}
      </div>

      <div>
        <label>Image:</label>
        <input type="file" onChange={handleFileChange} />
      </div>

      <button type="submit" disabled={loading}>Add Vehicle</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default AddVehicleForm;
