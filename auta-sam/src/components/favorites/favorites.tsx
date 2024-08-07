import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { getVehicleById } from '../../API/vehicles';
import { useAuth } from '../../context/auth';
import { db } from '../../firebase.config';
import { VehicleData } from '../../interfaces/Ivehicles';
import { Car, ContainerCar, ContainerTitle, FavoritePage } from '../../styled-components/favarites/favortes';

const Favorites: React.FC = () => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<(VehicleData | null)[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            const favoriteIds: string[] = userData.favorites || []; // Asegúrate de que `favoriteIds` sea un array de strings
    
            const favoriteVehicles: (VehicleData | null)[] = await Promise.all(
              favoriteIds.map((id: string) => getVehicleById(id)) // `id` es de tipo `string`
            );
    
            // Filtra los valores `null` antes de establecer el estado
            setFavorites(favoriteVehicles.filter((vehicle): vehicle is VehicleData => vehicle !== null));
          }
        } catch (err) {
          setError('Failed to fetch favorites');
        } finally {
          setLoading(false);
        }
      }
    };
    
    

    fetchFavorites();
  }, [user]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <FavoritePage>
      <ContainerTitle>TUS FAVORITOS:</ContainerTitle>
      <ContainerCar>
        {favorites.map((vehicle, index) => (
          vehicle ? ( 
            <Car key={vehicle.id || index}>
              <h2>{vehicle.brand} {vehicle.model}</h2>
              <img src={vehicle.imageURL} alt={`${vehicle.brand} ${vehicle.model}`} />
              <p>${vehicle.price}</p>
              <p>{vehicle.status === 'available' ? 'Disponible' : 'No disponible'}</p>
            </Car>
          ) : (
            <Car key={index}> 
              <p>Vehículo no disponible</p>
            </Car>
          )
        ))}
      </ContainerCar>
    </FavoritePage>
  );
  
};

export default Favorites;
