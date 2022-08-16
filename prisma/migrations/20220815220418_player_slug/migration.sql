/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Player` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "slug" VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Player_slug_key" ON "Player"("slug");
