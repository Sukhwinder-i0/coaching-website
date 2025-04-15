import { IStar } from "@/types/star";
import mongoose, { Schema } from "mongoose";

const starSchema: Schema<IStar> = new Schema(
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

export const Star = mongoose.model("star", starSchema)
