/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `Player` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "code" VARCHAR(4) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Player_code_key" ON "Player"("code");
