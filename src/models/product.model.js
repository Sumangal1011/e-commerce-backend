import mongoose from "mongoose";
import { Review } from "./subSchemas.js";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  discountPrice: Number,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  images: [String],
  stock: { type: Number, default: 0 },
  ratings: { type: Number, default: 0 },
  reviews: [Review],
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

export const Product = mongoose.model("Product", productSchema);
