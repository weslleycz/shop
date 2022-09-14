/*
  Warnings:

  - You are about to drop the column `birth_date` on the `Users` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "CPF" TEXT NOT NULL,
    "avatar" TEXT,
    "phone" TEXT NOT NULL
);
INSERT INTO "new_Users" ("CPF", "avatar", "email", "id", "name", "password", "phone") SELECT "CPF", "avatar", "email", "id", "name", "password", "phone" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
CREATE UNIQUE INDEX "Users_CPF_key" ON "Users"("CPF");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
