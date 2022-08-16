/*
  Warnings:

  - You are about to drop the column `content` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Player` table. All the data in the column will be lost.
  - Added the required column `name` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Player" DROP COLUMN "content",
DROP COLUMN "published",
DROP COLUMN "title",
ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "name" VARCHAR(255) NOT NULL;
