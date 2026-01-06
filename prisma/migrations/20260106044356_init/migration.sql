/*
  Warnings:

  - Added the required column `beforeDiscount` to the `Batch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mode` to the `Batch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Faculty` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Mode" AS ENUM ('online', 'offline', 'hybrid');

-- AlterTable
ALTER TABLE "Batch" ADD COLUMN     "beforeDiscount" INTEGER NOT NULL,
ADD COLUMN     "faculties" TEXT[],
ADD COLUMN     "mode" "Mode" NOT NULL,
ALTER COLUMN "name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Faculty" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "avatar" DROP NOT NULL;
