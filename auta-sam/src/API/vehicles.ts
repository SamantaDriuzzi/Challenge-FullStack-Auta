// src/API/vehicleAPI.js

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebase.config';

export const getVehicles = async (filters = {}) => {
  const vehiclesRef = collection(db, "vehicles");

  let q = vehiclesRef;

  // Aplica filtros si hay alguno
  if (filters.brand) {
    q = query(q, where("brand", "==", filters.brand));
  }
  if (filters.year) {
    q = query(q, where("year", "==", filters.year));
  }
  if (filters.status) {
    q = query(q, where("status", "==", filters.status));
  }

  const querySnapshot = await getDocs(q);
  const vehicles = [];
  querySnapshot.forEach((doc) => {
    vehicles.push({ id: doc.id, ...doc.data() });
  });

  return vehicles;
};
