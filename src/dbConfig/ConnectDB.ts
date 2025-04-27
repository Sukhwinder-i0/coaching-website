import mongoose from "mongoose"

export const ConnectDB = async () => {
  try {

    const connection = async () => {
      mongoose.connect
    }

  } catch (error) {
    throw new Error(`Database connection failed: ${error}`)
  }
}