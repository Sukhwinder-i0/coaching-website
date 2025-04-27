import { ICourse } from "@/types/course";
import mongoose, { Schema } from "mongoose";

const batchSchema: Schema<ICourse> = new Schema (
  {

    class: {
      type: Number,
      required: true
    },

    category: {
      type: String,
      required: true
    },

    price: {
      type:  String,
      required: true
    },

    mode: {
      type: String,
      required: true
    },

    details: {
      type: String
    }
  },

  {timestamps: true}
)

export const BatchModel = mongoose.model("batch", batchSchema)