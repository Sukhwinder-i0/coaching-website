import { IAdmin } from "@/types/admin";
import mongoose, { Schema } from "mongoose";

const adminSchema: Schema<IAdmin> = new Schema ({
  name: {
    type: String,
    required: true
  },

  email : {
    type :String,
    required: true
  }, 

  password: {
    type: String,
    required: true
  },

  avatar: {
    type: String,
  },


}, {timestamps: true})

export const Admin = mongoose.model("admin", adminSchema)