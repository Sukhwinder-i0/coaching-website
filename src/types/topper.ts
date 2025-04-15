import { Document } from "mongoose"

export interface ITopper extends Document {
    name: string,
    rank: number,
    percentage? : number,
    avatar: string,
    batch?: string
}