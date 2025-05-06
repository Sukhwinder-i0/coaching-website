import { PrismaClient, Prisma } from '../src/app/generated/prisma'

const prisma = new PrismaClient()
  
const topperData: Prisma.TopperCreateInput[] = [
  {
    name: 'Vishal',
    rank: 'AIR 237',
    exam: 'jee advanced',
    avatar: 'public/',
    batch: 2022,
  }
]

export async function main() {
  for (const u of topperData) {
    await prisma.topper.create({ data: u })
  }
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
