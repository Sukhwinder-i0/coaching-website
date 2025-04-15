import mongoose from "mongoose";
import { Schema } from "mongoose";
import { IFaculty } from "@/types/faculty";

const facultySchema: Schema<IFaculty> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    experience: {
      type: Number,
      required: true
    },

    qualifications: {
      type: String,
      required: true,
    },

    subject: {
        type: String
    }

  },

{ timestamps: true });


export const Faculty = mongoose.model("faculty", facultySchema)