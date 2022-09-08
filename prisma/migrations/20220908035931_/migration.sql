-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "birth_date" TEXT NOT NULL,
    "CPF" TEXT NOT NULL,
    "avatar" TEXT,
    "phone" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Purchases" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'Preparando o Pedido',
    "delivered" BOOLEAN NOT NULL DEFAULT false,
    "phone" TEXT NOT NULL,
    "total" REAL NOT NULL,
    "userId" TEXT NOT NULL,
    "cooperativeId" TEXT NOT NULL,
    CONSTRAINT "Purchases_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Purchases_cooperativeId_fkey" FOREIGN KEY ("cooperativeId") REFERENCES "Cooperatives" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "discount" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "code_bar" TEXT,
    "cooperativeId" TEXT,
    CONSTRAINT "Products_cooperativeId_fkey" FOREIGN KEY ("cooperativeId") REFERENCES "Cooperatives" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Cooperatives" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "CNPJ_number" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "surrender" INTEGER NOT NULL,
    "minimum_value" REAL NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_CPF_key" ON "Users"("CPF");

-- CreateIndex
CREATE UNIQUE INDEX "Purchases_id_key" ON "Purchases"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Products_id_key" ON "Products"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Cooperatives_CNPJ_number_key" ON "Cooperatives"("CNPJ_number");

-- CreateIndex
CREATE UNIQUE INDEX "Cooperatives_email_key" ON "Cooperatives"("email");
