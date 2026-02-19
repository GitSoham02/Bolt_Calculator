import prisma from './prisma.ts';

/**
 * Get all bolts ordered by diameter (small → large)
 */
export async function getAllBolts() {
  console.log('[bolts.repo] Fetching all bolts...');
  try {
    const result = await prisma.bolts.findMany({
      orderBy: {
        id: 'asc',
      },
    });
    console.log(`[bolts.repo] Found ${result?.length || 0} bolts`);
    return result;
  } catch (error) {
    console.error('[bolts.repo] Error fetching all bolts:', error);
    throw error;
  }
}

/**
 * Get a single bolt by designation (e.g. M8)
 */
export async function getBoltByDesignation(designation) {
  console.log(`[bolts.repo] Fetching bolt by designation: ${designation}`);
  try {
    const result = await prisma.bolts.findFirst({
      where: {
        designation,
      },
    });
    if (result) {
      console.log(`[bolts.repo] Found bolt: ${result.designation}`);
    } else {
      console.warn(
        `[bolts.repo] No bolt found for designation: ${designation}`,
      );
    }
    return result;
  } catch (error) {
    console.error(`[bolts.repo] Error fetching bolt ${designation}:`, error);
    throw error;
  }
}
