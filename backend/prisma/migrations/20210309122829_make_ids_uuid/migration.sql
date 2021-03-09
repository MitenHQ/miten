/*
  Warnings:

  - The migration will change the primary key for the `FeedbackBase` table. If it partially fails, the table could be left without primary key constraint.
  - The migration will change the primary key for the `FeedbackResponse` table. If it partially fails, the table could be left without primary key constraint.
  - The migration will change the primary key for the `LoginFailedAttempt` table. If it partially fails, the table could be left without primary key constraint.
  - The migration will change the primary key for the `Token` table. If it partially fails, the table could be left without primary key constraint.
  - The migration will change the primary key for the `User` table. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "FeedbackBase" DROP CONSTRAINT "FeedbackBase_userId_fkey";

-- DropForeignKey
ALTER TABLE "FeedbackResponse" DROP CONSTRAINT "FeedbackResponse_feedbackBaseId_fkey";

-- AlterTable
ALTER TABLE "FeedbackBase" DROP CONSTRAINT "FeedbackBase_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("id");
DROP SEQUENCE "FeedbackBase_id_seq";

-- AlterTable
ALTER TABLE "FeedbackResponse" DROP CONSTRAINT "FeedbackResponse_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "feedbackBaseId" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("id");
DROP SEQUENCE "FeedbackResponse_id_seq";

-- AlterTable
ALTER TABLE "LoginFailedAttempt" DROP CONSTRAINT "LoginFailedAttempt_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("id");
DROP SEQUENCE "LoginFailedAttempt_id_seq";

-- AlterTable
ALTER TABLE "Token" DROP CONSTRAINT "Token_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("id");
DROP SEQUENCE "Token_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- AddForeignKey
ALTER TABLE "FeedbackBase" ADD FOREIGN KEY("userId")REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeedbackResponse" ADD FOREIGN KEY("feedbackBaseId")REFERENCES "FeedbackBase"("id") ON DELETE CASCADE ON UPDATE CASCADE;
