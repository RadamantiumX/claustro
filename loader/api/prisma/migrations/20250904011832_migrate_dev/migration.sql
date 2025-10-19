/*
  Warnings:

  - A unique constraint covering the columns `[refreshToken]` on the table `AuthRefreshToken` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "AuthRefreshToken_refreshToken_key" ON "AuthRefreshToken"("refreshToken");
