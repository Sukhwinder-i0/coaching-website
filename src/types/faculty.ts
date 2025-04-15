import { Document } from "mongoose";

export interface IFaculty extends Document {
    name: string;
    subject: string;
    bio?: string;
    experience: number;
    qualifications: string
}