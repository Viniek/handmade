/*
  Warnings:

  - You are about to drop the `cart_table` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "cart_table";

-- CreateTable
CREATE TABLE "Cart" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "material" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    " seller" TEXT NOT NULL,
    "similarProducts" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "ratings" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);
