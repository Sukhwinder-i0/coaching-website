-- CreateTable
CREATE TABLE "Topper" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rank" TEXT,
    "percentage" TEXT,
    "avatar" TEXT NOT NULL,
    "batch" INTEGER NOT NULL,
    "exam" TEXT NOT NULL,

    CONSTRAINT "Topper_pkey" PRIMARY KEY ("id")
);
