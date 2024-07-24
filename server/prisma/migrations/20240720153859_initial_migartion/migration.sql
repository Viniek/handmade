/*
  Warnings:

  - You are about to drop the column `approvedAccount` on the `users_table` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `users_table` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `users_table` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users_table" DROP COLUMN "approvedAccount",
DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- CreateTable
CREATE TABLE "sellers_table" (
    "user_id" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "emailaddress" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT DEFAULT 'user',
    "approvedAccount" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sellers_table_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sellers_table_emailaddress_key" ON "sellers_table"("emailaddress");
