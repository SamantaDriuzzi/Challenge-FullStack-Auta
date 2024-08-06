
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
  id: string;
}

export interface VehicleFilters {
  brand?: string;
  model?: string;
}

export function isVehicleData(data: any): data is Vehicle {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof data.brand === 'string' &&
    typeof data.model === 'string' &&
    typeof data.year === 'number' &&
    typeof data.price === 'number' &&
    typeof data.imageURL === 'string' &&
    (data.status === 'available' || data.status === 'unavailable')
  );
}
