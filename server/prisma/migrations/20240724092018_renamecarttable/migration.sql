/*
  Warnings:

  - You are about to drop the column ` seller` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `material` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `ratings` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `similarProducts` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Cart` table. All the data in the column will be lost.
  - Added the required column `item_id` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cart" DROP COLUMN " seller",
DROP COLUMN "description",
DROP COLUMN "image",
DROP COLUMN "material",
DROP COLUMN "price",
DROP COLUMN "ratings",
DROP COLUMN "similarProducts",
DROP COLUMN "type",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "item_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users_table"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items_table"("item_id") ON DELETE RESTRICT ON UPDATE CASCADE;
