/*
  Warnings:

  - Added the required column `phone` to the `Companys` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Companys" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "CNPJ" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "addressId" TEXT NOT NULL,
    CONSTRAINT "Companys_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Addresses" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Companys" ("CNPJ", "addressId", "email", "id", "name", "password") SELECT "CNPJ", "addressId", "email", "id", "name", "password" FROM "Companys";
DROP TABLE "Companys";
ALTER TABLE "new_Companys" RENAME TO "Companys";
CREATE UNIQUE INDEX "Companys_CNPJ_key" ON "Companys"("CNPJ");
CREATE UNIQUE INDEX "Companys_email_key" ON "Companys"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
