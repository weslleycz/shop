/*
  Warnings:

  - You are about to drop the `Cooperatives` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "Cooperatives_email_key";

-- DropIndex
DROP INDEX "Cooperatives_CNPJ_number_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Cooperatives";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Companys" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "CNPJ_number" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "surrender" INTEGER NOT NULL,
    "minimum_value" REAL NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Purchases" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'Preparando o Pedido',
    "delivered" BOOLEAN NOT NULL DEFAULT false,
    "phone" TEXT NOT NULL,
    "total" REAL NOT NULL,
    "userId" TEXT NOT NULL,
    "cooperativeId" TEXT NOT NULL,
    CONSTRAINT "Purchases_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Purchases_cooperativeId_fkey" FOREIGN KEY ("cooperativeId") REFERENCES "Companys" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Purchases" ("cooperativeId", "date", "delivered", "id", "phone", "status", "total", "userId") SELECT "cooperativeId", "date", "delivered", "id", "phone", "status", "total", "userId" FROM "Purchases";
DROP TABLE "Purchases";
ALTER TABLE "new_Purchases" RENAME TO "Purchases";
CREATE UNIQUE INDEX "Purchases_id_key" ON "Purchases"("id");
CREATE TABLE "new_Products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "discount" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "code_bar" TEXT,
    "cooperativeId" TEXT,
    CONSTRAINT "Products_cooperativeId_fkey" FOREIGN KEY ("cooperativeId") REFERENCES "Companys" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Products" ("code_bar", "cooperativeId", "description", "discount", "id", "name", "price", "quantity", "type") SELECT "code_bar", "cooperativeId", "description", "discount", "id", "name", "price", "quantity", "type" FROM "Products";
DROP TABLE "Products";
ALTER TABLE "new_Products" RENAME TO "Products";
CREATE UNIQUE INDEX "Products_id_key" ON "Products"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Companys_CNPJ_number_key" ON "Companys"("CNPJ_number");

-- CreateIndex
CREATE UNIQUE INDEX "Companys_email_key" ON "Companys"("email");
