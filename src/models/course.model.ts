import { ICourse } from "@/types/course";
import mongoose, { Schema } from "mongoose";

const courseSchema: Schema<ICourse> = new Schema (
  {
    name: {
      type: String,
    },

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

export const Course = mongoose.model("course", courseSchema)