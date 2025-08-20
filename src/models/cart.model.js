import mongoose from "mongoose";
import { cartItemSchema } from "./subSchemas.js";

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [cartItemSchema],
  totalPrice: { type: Number, default: 0 }
}, { timestamps: true });

export const Cart = mongoose.model("Cart", cartSchema);
