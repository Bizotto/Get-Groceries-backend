/*
  Warnings:

  - You are about to drop the column `description` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `lists` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "categories" DROP COLUMN "description";

-- AlterTable
ALTER TABLE "lists" DROP COLUMN "description";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "description";
