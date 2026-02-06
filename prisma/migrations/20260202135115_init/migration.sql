-- CreateTable
CREATE TABLE "Bolts" (
    "id" SERIAL NOT NULL,
    "designation" TEXT NOT NULL,
    "nominalDiameter" DOUBLE PRECISION NOT NULL,
    "threadMeanDiameter" DOUBLE PRECISION NOT NULL,
    "tensileStressArea" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Bolts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertyClasses" (
    "id" SERIAL NOT NULL,
    "className" TEXT NOT NULL,
    "xValue" DOUBLE PRECISION NOT NULL,
    "yValue" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PropertyClasses_pkey" PRIMARY KEY ("id")
);
