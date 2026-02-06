import { PrismaClient, Prisma } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

// const prisma = new PrismaClient();
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

/* ---------------------------------------------
   BOLTS TABLE (GEOMETRY)
--------------------------------------------- */
const boltData: Prisma.BoltsCreateInput[] = [
  {
    designation: 'M3',
    nominalDiameter: 3,
    threadMeanDiameter: 2.530690599,
    tensileStressArea: 5.03,
  },
  {
    designation: 'M3.5',
    nominalDiameter: 3.5,
    threadMeanDiameter: 2.938122549,
    tensileStressArea: 6.78,
  },
  {
    designation: 'M4',
    nominalDiameter: 4,
    threadMeanDiameter: 3.34350762,
    tensileStressArea: 8.78,
  },
  {
    designation: 'M5',
    nominalDiameter: 5,
    threadMeanDiameter: 4.252058506,
    tensileStressArea: 14.2,
  },
  {
    designation: 'M6',
    nominalDiameter: 6,
    threadMeanDiameter: 5.058864976,
    tensileStressArea: 20.1,
  },
  {
    designation: 'M7',
    nominalDiameter: 7,
    threadMeanDiameter: 6.066021995,
    tensileStressArea: 28.9,
  },
  {
    designation: 'M8',
    nominalDiameter: 8,
    threadMeanDiameter: 6.826460821,
    tensileStressArea: 36.6,
  },
  {
    designation: 'M10',
    nominalDiameter: 10,
    threadMeanDiameter: 8.593479714,
    tensileStressArea: 58.0,
  },
  {
    designation: 'M12',
    nominalDiameter: 12,
    threadMeanDiameter: 10.36021687,
    tensileStressArea: 84.3,
  },
  {
    designation: 'M14',
    nominalDiameter: 14,
    threadMeanDiameter: 12.10051849,
    tensileStressArea: 115.0,
  },
  {
    designation: 'M16',
    nominalDiameter: 16,
    threadMeanDiameter: 14.13855044,
    tensileStressArea: 157.0,
  },
  {
    designation: 'M18',
    nominalDiameter: 18,
    threadMeanDiameter: 15.63528038,
    tensileStressArea: 192.0,
  },
  {
    designation: 'M20',
    nominalDiameter: 20,
    threadMeanDiameter: 17.66192765,
    tensileStressArea: 245.0,
  },
  {
    designation: 'M22',
    nominalDiameter: 22,
    threadMeanDiameter: 19.64157789,
    tensileStressArea: 303.0,
  },
  {
    designation: 'M24',
    nominalDiameter: 24,
    threadMeanDiameter: 21.20031979,
    tensileStressArea: 353.0,
  },
  {
    designation: 'M27',
    nominalDiameter: 27,
    threadMeanDiameter: 24.17471719,
    tensileStressArea: 459.0,
  },
  {
    designation: 'M30',
    nominalDiameter: 30,
    threadMeanDiameter: 26.72615544,
    tensileStressArea: 561.0,
  },
  {
    designation: 'M33',
    nominalDiameter: 33,
    threadMeanDiameter: 29.72588508,
    tensileStressArea: 694.0,
  },
  {
    designation: 'M36',
    nominalDiameter: 36,
    threadMeanDiameter: 32.25270079,
    tensileStressArea: 817.0,
  },
  {
    designation: 'M39',
    nominalDiameter: 39,
    threadMeanDiameter: 35.2516921,
    tensileStressArea: 976.0,
  },
];

/* ---------------------------------------------
   PROPERTY CLASS TABLE
--------------------------------------------- */
const propertyClassData: Prisma.PropertyClassesCreateInput[] = [
  { className: '4.6', xValue: 4, yValue: 0.6 },
  { className: '4.8', xValue: 4, yValue: 0.8 },
  { className: '5.6', xValue: 5, yValue: 0.6 },
  { className: '5.8', xValue: 5, yValue: 0.8 },
  { className: '6.8', xValue: 6, yValue: 0.8 },
  { className: '8.8', xValue: 8, yValue: 0.8 },
  { className: '9.8', xValue: 9, yValue: 0.8 },
  { className: '10.9', xValue: 10, yValue: 0.9 },
  { className: '12.9', xValue: 12, yValue: 0.9 },
];

/* ---------------------------------------------
   STRENGTH LIMITS TABLE
--------------------------------------------- */
const strengthLimitData: Prisma.StrengthLimitsCreateInput[] = [
  {
    ultimateTensile: 400,
    yieldStrength: 240,
    tensileStress: 200,
    shearStress: 72,
    bearingStress: 240,
  },
  {
    ultimateTensile: 400,
    yieldStrength: 320,
    tensileStress: 200,
    shearStress: 96,
    bearingStress: 320,
  },
  {
    ultimateTensile: 500,
    yieldStrength: 300,
    tensileStress: 250,
    shearStress: 90,
    bearingStress: 300,
  },
  {
    ultimateTensile: 500,
    yieldStrength: 400,
    tensileStress: 250,
    shearStress: 120,
    bearingStress: 400,
  },
  {
    ultimateTensile: 600,
    yieldStrength: 480,
    tensileStress: 300,
    shearStress: 144,
    bearingStress: 480,
  },
  {
    ultimateTensile: 800,
    yieldStrength: 640,
    tensileStress: 400,
    shearStress: 192,
    bearingStress: 640,
  },
  {
    ultimateTensile: 900,
    yieldStrength: 720,
    tensileStress: 450,
    shearStress: 216,
    bearingStress: 720,
  },
  {
    ultimateTensile: 1000,
    yieldStrength: 900,
    tensileStress: 500,
    shearStress: 270,
    bearingStress: 900,
  },
  {
    ultimateTensile: 1200,
    yieldStrength: 1080,
    tensileStress: 600,
    shearStress: 324,
    bearingStress: 1080,
  },
];

/* ---------------------------------------------
   SEED EXECUTION
--------------------------------------------- */
export async function main() {
  await prisma.bolts.deleteMany();
  await prisma.propertyClasses.deleteMany();
  await prisma.strengthLimits.deleteMany();

  for (const bolt of boltData) {
    await prisma.bolts.create({ data: bolt });
  }

  for (const pc of propertyClassData) {
    await prisma.propertyClasses.create({ data: pc });
  }

  for (const sl of strengthLimitData) {
    await prisma.strengthLimits.create({ data: sl });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

// import { PrismaClient, Prisma } from '../app/generated/prisma/client';
// import { PrismaPg } from '@prisma/adapter-pg';
// import 'dotenv/config';

// const adapter = new PrismaPg({
//   connectionString: process.env.DATABASE_URL,
// });

// const prisma = new PrismaClient({
//   adapter,
// });

// const boltData: Prisma.BoltsCreateInput[] = [
//   {
//     designation: 'M6',
//     nominalDiameter: 6,
//     threadMeanDiameter: 5.35,
//     tensileStressArea: 20.1,
//   },
//   {
//     designation: 'M8',
//     nominalDiameter: 8,
//     threadMeanDiameter: 7.188,
//     tensileStressArea: 36.6,
//   },
//   {
//     designation: 'M10',
//     nominalDiameter: 10,
//     threadMeanDiameter: 9.026,
//     tensileStressArea: 58.0,
//   },
// ];

// const propertyClassData: Prisma.PropertyClassesCreateInput[] = [
//   {
//     className: '4.6',
//     xValue: 4,
//     yValue: 0.6,
//   },
//   {
//     className: '8.8',
//     xValue: 8,
//     yValue: 0.8,
//   },
//   {
//     className: '10.9',
//     xValue: 10,
//     yValue: 0.9,
//   },
// ];

// export async function main() {
//   for (const bolt of boltData) {
//     await prisma.bolts.create({ data: bolt });
//   }

//   for (const pc of propertyClassData) {
//     await prisma.propertyClasses.create({ data: pc });
//   }
// }

// main();
