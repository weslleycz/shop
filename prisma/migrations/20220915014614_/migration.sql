/*
  Warnings:

  - Made the column `number` on table `Addresses` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Addresses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "number" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL
);
INSERT INTO "new_Addresses" ("city", "id", "latitude", "longitude", "number", "street") SELECT "city", "id", "latitude", "longitude", "number", "street" FROM "Addresses";
DROP TABLE "Addresses";
ALTER TABLE "new_Addresses" RENAME TO "Addresses";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
