-- CreateTable
CREATE TABLE "items_table" (
    "item_id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "material" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    " seller" TEXT NOT NULL,
    "similarProducts" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "ratings" TEXT NOT NULL,

    CONSTRAINT "items_table_pkey" PRIMARY KEY ("item_id")
);

-- CreateTable
CREATE TABLE "users_table" (
    "user_id" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "emailaddress" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT DEFAULT 'user',

    CONSTRAINT "users_table_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "cart_table" (
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

    CONSTRAINT "cart_table_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_table_emailaddress_key" ON "users_table"("emailaddress");
