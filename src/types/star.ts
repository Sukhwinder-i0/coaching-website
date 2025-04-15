import { Document } from "mongoose"

export interface IStar extends Document {
    name: string,
    rank: number,
    percentage? : number,
    avatar: string,
    batch?: string
}