/*
  Warnings:

  - You are about to drop the column `uid` on the `FeedbackBase` table. All the data in the column will be lost.
  - The migration will add a unique constraint covering the columns `[feedbackUid]` on the table `FeedbackBase`. If there are existing duplicate values, the migration will fail.
  - The migration will add a unique constraint covering the columns `[reportUid]` on the table `FeedbackBase`. If there are existing duplicate values, the migration will fail.
  - Added the required column `feedbackUid` to the `FeedbackBase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reportUid` to the `FeedbackBase` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "FeedbackBase.uid_unique";

-- AlterTable
ALTER TABLE "FeedbackBase" DROP COLUMN "uid",
ADD COLUMN     "feedbackUid" TEXT NOT NULL,
ADD COLUMN     "reportUid" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "FeedbackBase.feedbackUid_unique" ON "FeedbackBase"("feedbackUid");

-- CreateIndex
CREATE UNIQUE INDEX "FeedbackBase.reportUid_unique" ON "FeedbackBase"("reportUid");
