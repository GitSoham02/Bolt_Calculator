import prisma from './prisma.ts';

/**
 * Get all property classes ordered by strength level
 */
export async function getAllPropertyClasses() {
  return prisma.propertyClasses.findMany({
    orderBy: {
      xValue: 'asc',
    },
  });
}

/**
 * Get a property class by name (e.g. 8.8)
 */
export async function getPropertyClassByName(className) {
  return prisma.propertyClasses.findFirst({
    where: {
      className,
    },
  });
}
