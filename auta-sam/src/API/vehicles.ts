

  import { collection, getDocs, query, where, Query, DocumentData, CollectionReference, doc, getDoc } from "firebase/firestore";
  import { db } from '../firebase.config';
import { Vehicle, VehicleData, VehicleFilters } from "../interfaces/Ivehicles";

  const isVehicleData = (data: any): data is VehicleData => {
    return (
      data &&
      typeof data.brand === 'string' &&
      typeof data.model === 'string' &&
      typeof data.year === 'number' &&
      typeof data.description === 'string' &&
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
        vehicles.push({  ...data, id: doc.id, });
      }
    });

    return vehicles;
  };
  export const getVehicleById = async (id: string): Promise<Vehicle | null> => {
    const vehicleDoc = doc(db, "vehicles", id);
    const docSnap = await getDoc(vehicleDoc);
  
    if (docSnap.exists()) {
      // Devuelve un objeto con los datos del documento y el id
      const data = docSnap.data() as VehicleData;
      return {  ...data, id };
    } else {
      console.log("No such document!");
      return null;
    }
  };