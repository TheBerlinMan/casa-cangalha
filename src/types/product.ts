// Define the base product interface
export interface IProduct {
  _id?: string;
  title: string;
  description: string;
  images?: string[];
  artist: string;
  price: number;
  isPublished: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export type IProductWithId = IProduct & {
  _id: string;
};

export interface ProductFormData {
  title: string;
  description: string;
  images: string[];
  artist: string;
  price: number;
  isPublished: boolean;
} 