// lib/db/strength.repo.js
import prisma from './prisma.ts';

/**
 * Get all strength limit rows
 */
export async function getAllStrengthLimits() {
  return prisma.strengthLimits.findMany({
    orderBy: {
      ultimateTensile: 'asc',
    },
  });
}

/**
 * Get strength limits by ultimate tensile strength
 */
export async function getStrengthByUltimateTensile(ultimateTensile) {
  return prisma.strengthLimits.findFirst({
    where: {
      ultimateTensile,
    },
  });
}
