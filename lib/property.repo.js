import prisma from './prisma.ts';

/**
 * Get all property classes ordered by strength level
 */
export async function getAllPropertyClasses() {
  console.log('[property.repo] Fetching all property classes...');
  try {
    const result = await prisma.propertyClasses.findMany({
      orderBy: {
        // xValue: 'asc',
        id: 'asc',
      },
    });
    console.log(
      `[property.repo] Found ${result?.length || 0} property classes`,
    );
    return result;
  } catch (error) {
    console.error(
      '[property.repo] Error fetching all property classes:',
      error,
    );
    throw error;
  }
}

/**
 * Get a property class by name (e.g. 8.8)
 */
export async function getPropertyClassByName(className) {
  console.log(`[property.repo] Fetching property class: ${className}`);
  try {
    const result = await prisma.propertyClasses.findFirst({
      where: {
        className,
      },
    });
    if (result) {
      console.log(`[property.repo] Found property class: ${result.className}`);
    } else {
      console.warn(`[property.repo] No property class found: ${className}`);
    }
    return result;
  } catch (error) {
    console.error(
      `[property.repo] Error fetching property class ${className}:`,
      error,
    );
    throw error;
  }
}
