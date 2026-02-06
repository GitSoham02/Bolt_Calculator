/*
  Warnings:

  - A unique constraint covering the columns `[designation]` on the table `Bolts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Bolts_designation_key" ON "Bolts"("designation");
