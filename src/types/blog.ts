// Define the base blog interface
export interface IBlog {
  _id?: string;
  title: string;
  body: string;
  images?: string[];
  isPublished: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export type IBlogWithId = IBlog & {
  _id: string;
};

export interface BlogFormData {
  title: string;
  body: string;
  images: string[];
  isPublished: boolean;
} 