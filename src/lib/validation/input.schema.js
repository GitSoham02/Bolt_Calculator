import { z } from 'zod';

export const userInputSchema = z
  .object({
    plateThickness: z.number().positive(),
    engagedThreadLength: z.number().positive(),
    externalLoad: z.number().positive(),
    preLoad: z.number().positive(),
    lateralLoad: z.number().positive(),
  })
  .strict();

// plateThickness: '',
// engagedThreadLength: '',
// externalLoad: '',
// preLoad: '',
// lateralLoad: '',

// remaining steps- create a validate function.
// and use schema validation for input and output (routes)
