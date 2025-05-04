import { NextResponse } from "next/server"
import bcrypt from 'bcrypt'
import prisma from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { type, email, password, name } = body

    if( !type || !email || !password || !name) {
      return NextResponse.json(
        { error: "Missing Fields" },
        {status: 400}
      )
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const existingUser = await prisma.user.findUnique({where: {email}})

    if(existingUser) {
      return NextResponse.json(
        {error: 'User already exists'},
        {status: 400}
      )
    }

    const user = await prisma.create({
      data: {
        type,
        email,
        password: hashedPassword,
        name
      }
    })
    
    return NextResponse.json(user)

  } catch (error) {
    return NextResponse.json(
      { error: 'Something went wrong' },
      {status: 500}
    )
  }
}