-- CreateTable
CREATE TABLE "UserColab" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT NOT NULL,
    "lastSignIn" TIMESTAMP,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP,
    "isSuperAdmin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UserColab_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuthRefreshToken" (
    "id" TEXT NOT NULL,
    "refreshToken" TEXT[],
    "expiration" TEXT,
    "userColabId" TEXT NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuthRefreshToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Data" (
    "id" SERIAL NOT NULL,
    "emailSource" TEXT NOT NULL,
    "emailSourcePsw" TEXT NOT NULL,
    "xUser" TEXT NOT NULL,
    "xPsw" TEXT NOT NULL,
    "userColabId" TEXT NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP,

    CONSTRAINT "Data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApiData" (
    "id" SERIAL NOT NULL,
    "appName" TEXT NOT NULL,
    "appId" TEXT NOT NULL,
    "dataId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP,

    CONSTRAINT "ApiData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApiKeys" (
    "id" SERIAL NOT NULL,
    "apiKey" TEXT NOT NULL,
    "apiKeySecret" TEXT NOT NULL,
    "bearerToken" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "accessTokenSecret" TEXT NOT NULL,
    "apiDataId" INTEGER NOT NULL,
    "dataId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP,

    CONSTRAINT "ApiKeys_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserColab_id_key" ON "UserColab"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserColab_username_key" ON "UserColab"("username");

-- CreateIndex
CREATE UNIQUE INDEX "AuthRefreshToken_id_key" ON "AuthRefreshToken"("id");

-- CreateIndex
CREATE UNIQUE INDEX "AuthRefreshToken_userColabId_key" ON "AuthRefreshToken"("userColabId");

-- CreateIndex
CREATE UNIQUE INDEX "Data_id_key" ON "Data"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Data_emailSource_key" ON "Data"("emailSource");

-- CreateIndex
CREATE UNIQUE INDEX "Data_xUser_key" ON "Data"("xUser");

-- CreateIndex
CREATE UNIQUE INDEX "ApiData_id_key" ON "ApiData"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ApiData_dataId_key" ON "ApiData"("dataId");

-- CreateIndex
CREATE UNIQUE INDEX "ApiKeys_id_key" ON "ApiKeys"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ApiKeys_apiKey_key" ON "ApiKeys"("apiKey");

-- CreateIndex
CREATE UNIQUE INDEX "ApiKeys_apiKeySecret_key" ON "ApiKeys"("apiKeySecret");

-- CreateIndex
CREATE UNIQUE INDEX "ApiKeys_bearerToken_key" ON "ApiKeys"("bearerToken");

-- CreateIndex
CREATE UNIQUE INDEX "ApiKeys_accessToken_key" ON "ApiKeys"("accessToken");

-- CreateIndex
CREATE UNIQUE INDEX "ApiKeys_accessTokenSecret_key" ON "ApiKeys"("accessTokenSecret");

-- CreateIndex
CREATE UNIQUE INDEX "ApiKeys_apiDataId_key" ON "ApiKeys"("apiDataId");

-- CreateIndex
CREATE UNIQUE INDEX "ApiKeys_dataId_key" ON "ApiKeys"("dataId");

-- AddForeignKey
ALTER TABLE "AuthRefreshToken" ADD CONSTRAINT "AuthRefreshToken_userColabId_fkey" FOREIGN KEY ("userColabId") REFERENCES "UserColab"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Data" ADD CONSTRAINT "Data_userColabId_fkey" FOREIGN KEY ("userColabId") REFERENCES "UserColab"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApiData" ADD CONSTRAINT "ApiData_dataId_fkey" FOREIGN KEY ("dataId") REFERENCES "Data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApiKeys" ADD CONSTRAINT "ApiKeys_apiDataId_fkey" FOREIGN KEY ("apiDataId") REFERENCES "ApiData"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApiKeys" ADD CONSTRAINT "ApiKeys_dataId_fkey" FOREIGN KEY ("dataId") REFERENCES "Data"("id") ON DELETE CASCADE ON UPDATE CASCADE;
