
export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  status: string;
  imageURL?: string;
  description?: string;
}

export interface VehicleData {
  brand: string;
  model: string;
  year: number;
  price: number;
  status: string;
  imageURL?: string;
  description?: string;
  id?: string;
}

export interface VehicleFilters {
  brand?: string;
  model?: string;
}