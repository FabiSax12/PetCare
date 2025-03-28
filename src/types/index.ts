export interface PetData {
  name: string;
  breed: string;
  age: number;
}

export interface OwnerData {
  name: string;
  phoneNumber: string;
  pets: PetData[]
}