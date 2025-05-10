import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const data = await req.json()

  const {name, subject, bio, experience, avatar} = data

  try {
    const newFaculty = await prisma.faculty.create ({
      data: {
        name,
        experience,
        subject,
        bio,
        avatar
      }
    })



    return NextResponse.json({newFaculty}, {status: 201})

  } catch (error) {
    return NextResponse.json({error: `couldn't add faculty: ${error}`}, {status: 500})
  }
}

export async function GET() {
  try {
    const faculties = await prisma.faculty.findMany(); // Fetch all

    return NextResponse.json(faculties, { status: 200 }); // ✅ return the list
  } catch (error) {
    return NextResponse.json(
      { message: "faculty can't be fetched", error },
      { status: 500 }
    );
  }
}
