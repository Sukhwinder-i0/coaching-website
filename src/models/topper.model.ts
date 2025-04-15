import { ITopper } from "@/types/topper";
import mongoose, { Schema } from "mongoose";

const topperSchema: Schema<ITopper> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    rank: {
      type: Number,
    },

    percentage: {
      type: String,
    },

    avatar : {
      type: String,
      required: true
    },

    batch: {
      type: Number
    }

  },
  { timestamps: true }
);

export const Topper = mongoose.model("topper", topperSchema)
