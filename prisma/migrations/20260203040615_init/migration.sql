-- CreateTable
CREATE TABLE "StrengthLimits" (
    "id" SERIAL NOT NULL,
    "ultimateTensile" INTEGER NOT NULL,
    "yieldStrength" INTEGER NOT NULL,
    "tensileStress" INTEGER NOT NULL,
    "shearStress" INTEGER NOT NULL,
    "bearingStress" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StrengthLimits_pkey" PRIMARY KEY ("id")
);
