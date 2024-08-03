

  import { collection, getDocs, query, where, Query, DocumentData, CollectionReference, doc, getDoc } from "firebase/firestore";
  import { db } from '../firebase.config';
  import { Vehicle, VehicleData, VehicleFilters } from '../interfaces/Ivehicles';

  const isVehicleData = (data: any): data is VehicleData => {
    return (
      data &&
      typeof data.brand === 'string' &&
      typeof data.model === 'string' &&
      typeof data.year === 'number' &&
      typeof data.price === 'number' &&
      typeof data.status === 'string'
    );
  };

  export const getVehicles = async (filters: VehicleFilters = {}): Promise<Vehicle[]> => {
    const vehiclesRef: CollectionReference<DocumentData> = collection(db, "vehicles");

    let q: Query<DocumentData> = vehiclesRef;

    // Aplica filtros si hay alguno
    if (filters.brand) {
      q = query(q, where("brand", "==", filters.brand));
    }
  
    if (filters.model) {
      q = query(q, where("model", "==", filters.model));
    }

    const querySnapshot = await getDocs(q);
    const vehicles: Vehicle[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (isVehicleData(data)) {
        vehicles.push({ id: doc.id, ...data });
      }
    });

    return vehicles;
  };
  export const getVehicleById = async (id: string): Promise<VehicleData | null> => {
    const vehicleDoc = doc(db, "vehicles", id);
    const docSnap = await getDoc(vehicleDoc);
  
    if (docSnap.exists()) {
      return docSnap.data() as VehicleData;
    } else {
      console.log("No such document!");
      return null;
    }
  };