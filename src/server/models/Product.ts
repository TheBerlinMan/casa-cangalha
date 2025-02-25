import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProduct extends Document {
  title: string;
  description: string;
  images?: string[];
  artist: string;
  price: number;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title for the product'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide a description for the product'],
    },
    images: {
      type: [String],
      default: [],
    },
    artist: {
      type: String,
      required: [true, 'Please provide an artist name for the product'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Please provide a price for the product'],
      min: [0, 'Price cannot be negative'],
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema); 