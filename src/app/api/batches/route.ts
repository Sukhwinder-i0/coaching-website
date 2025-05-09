import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const {level, category, startDate, endDate, beforeDiscount, price, mode } = data

  try {
    const newBatch = await prisma.batch.create({
      data: {
        level,
        category,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        price,
        beforeDiscount,
        location,
        mode
      }})

        return NextResponse.json(newBatch, { status: 201 });

      } catch (error) {
        return NextResponse.json({ error: 'Failed to create batch' }, { status: 500 });
    }
  }



export async function GET() {
  try {
    const batches = await prisma.batch.findMany({
      orderBy: { startDate: 'asc' },
    });
    return NextResponse.json(batches);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch batches' }, { status: 500 });
  }
}