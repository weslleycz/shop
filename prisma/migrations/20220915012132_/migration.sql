/*
  Warnings:

  - You are about to drop the column `CNPJ_number` on the `Companys` table. All the data in the column will be lost.
  - You are about to drop the column `minimum_value` on the `Companys` table. All the data in the column will be lost.
  - You are about to drop the column `surrender` on the `Companys` table. All the data in the column will be lost.
  - Added the required column `CNPJ` to the `Companys` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressId` to the `Companys` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Addresses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "number" INTEGER NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Companys" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "CNPJ" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "addressId" TEXT NOT NULL,
    CONSTRAINT "Companys_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Addresses" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Companys" ("email", "id", "name", "password") SELECT "email", "id", "name", "password" FROM "Companys";
DROP TABLE "Companys";
ALTER TABLE "new_Companys" RENAME TO "Companys";
CREATE UNIQUE INDEX "Companys_CNPJ_key" ON "Companys"("CNPJ");
CREATE UNIQUE INDEX "Companys_email_key" ON "Companys"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
