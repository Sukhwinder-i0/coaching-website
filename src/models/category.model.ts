import { ICourse } from "@/types/course";
import mongoose, { Schema } from "mongoose";

const categorySchema: Schema<ICourse> = new Schema (
  {
    
  }
)

export const Category = mongoose.model("category", categorySchema)