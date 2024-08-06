// VehicleDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getVehicleById } from '../../API/vehicles';
import { VehicleData } from '../../interfaces/Ivehicles';
import { Button, ContainerDetail, ModalDetail, TopButtons } from '../../styled-components/vehicles/vehicle-detail';
import { useCart } from '../../context/cart';
import Swal from 'sweetalert2';
import { useAuth } from '../../context/auth';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const VehicleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [vehicle, setVehicle] = useState<VehicleData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();
  const { user, toggleFavorite, favorites } = useAuth();
  const [isFavoriteIcon, setIsFavoriteIcon] = useState<boolean>(false);

  useEffect(() => {
    const fetchVehicle = async () => {
      setLoading(true);
      setError(null);
      try {
        const vehicleData = await getVehicleById(id!);
        setVehicle(vehicleData);
      } catch (err) {
        setError('Failed to fetch vehicle details');
      } finally {
        setLoading(false);
      }
    };

    fetchVehicle();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!vehicle) return <p>Vehicle not found</p>;

  const handleAddToCart = () => {
    if (!user) {
      Swal.fire({
        title: 'Acceso denegado',
        text: 'Debes estar registrado para agregar vehículos al carrito',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      return;
    }

    if (vehicle) {
      
      try {
        addToCart(vehicle);
        Swal.fire({
          title: 'Éxito',
          text: 'Vehículo agregado al carrito',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al agregar el vehículo al carrito',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    }
  };

  const isFavorite = favorites.includes(vehicle.id!);



  const handleToggleFavorite = () => {
    if (!user) {
      Swal.fire({
        title: 'Acceso denegado',
        text: 'Debes estar registrado para agregar vehículos a favoritos',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      return;
    }
    if (id) {
      toggleFavorite(id);
      setIsFavoriteIcon(!isFavoriteIcon);
    }
  };

  return (
    <ContainerDetail>
      <ModalDetail>
        <TopButtons>
          <button onClick={() => window.history.back()}>Volver</button>
          <button  className="favorite-button" onClick={handleToggleFavorite}>
            {isFavoriteIcon ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </button>
        </TopButtons>
        <h1>{capitalizeFirstLetter(vehicle.brand)} {capitalizeFirstLetter(vehicle.model)}</h1>
        <div className='image-container'>
          <img src={vehicle.imageURL} alt={`${vehicle.brand} ${vehicle.model}`} />
        </div>
        <div className='details'>
          <p><span className="label">Marca:</span> <span className="value">{capitalizeFirstLetter(vehicle.brand)}</span></p>
          <p><span className="label">Modelo:</span> <span className="value">{capitalizeFirstLetter(vehicle.model)}</span></p>
          <p><span className="label">Año:</span> <span className="value">{vehicle.year}</span></p>
          <p><span className="label">Estado:</span> <span className="value">{vehicle.status === "available" ? "Disponible" : "No disponible"}</span></p>
        </div>
        <div className='description'>
          <p><span className="label">Descripción:</span> <span className="value">{vehicle.description}</span></p>
          <p><span className="label">Precio:</span> <span className="value">${vehicle.price}</span></p>
        </div>
        <Button>
          <button onClick={handleAddToCart}>Reservar</button>
        </Button>

      </ModalDetail>
    </ContainerDetail>
  );
};

export default VehicleDetail;
