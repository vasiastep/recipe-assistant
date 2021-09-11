import mongoose from 'mongoose';

export interface ProductModel extends mongoose.Document {
  name: string;
  price: number;
}

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.models.Product ||
  mongoose.model('Product', ProductSchema);
