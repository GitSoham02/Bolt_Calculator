import prisma from './prisma.ts';

/**
 * Get all bolts ordered by diameter (small → large)
 */
export function getAllBolts() {
  return prisma.bolts.findMany({
    orderBy: {
      nominalDiameter: 'asc',
    },
  });
}

/**
 * Get a single bolt by designation (e.g. M8)
 */
export function getBoltByDesignation(designation) {
  return prisma.bolts.findFirst({
    where: {
      designation,
    },
  });
}
