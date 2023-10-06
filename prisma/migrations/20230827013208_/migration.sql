-- AlterTable
ALTER TABLE "products" ADD COLUMN     "cartId" TEXT;

-- CreateTable
CREATE TABLE "carts" (
    "id" TEXT NOT NULL,

    CONSTRAINT "carts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "carts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
