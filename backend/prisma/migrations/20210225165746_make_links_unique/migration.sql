/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[uid]` on the table `FeedbackBase`. If there are existing duplicate values, the migration will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "FeedbackBase.uid_unique" ON "FeedbackBase"("uid");
