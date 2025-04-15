import { Document } from "mongoose"

export interface IAdmin extends Document {
  name: string,
  email: string,
  avatar? : string,
  password: string

}