"use server"

import { NextResponse } from "next/server"

export async function GET() {
  try {
    
  } catch (error) {
    console.log("Error while fetching data: ", error)
    return NextResponse.json(
      { message: "Error Fetching data" },
      { status: 500 }
    )
  }
}