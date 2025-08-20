import mongoose from "mongoose";
import { address, cart } from "./subSchemas.js";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
  address: { type: [address], required: true },
  cart: { type: [cart], default: [] },
  wishList: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  role: { type: String, enum: ["customer", "seller", "admin"], default: "customer" }
}, { timestamps: true });


userSchema.pre("save", async function(next){
  if(!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password,10)
})

userSchema.methods.ispasswordCorrect = async function (password){
  return await bcrypt.compare(password,this.password)
}
export const User = mongoose.model("User", userSchema);
