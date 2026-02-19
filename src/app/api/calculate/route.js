import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import boltAnalysis from '@/core/runAnalysis_V2';
import { validate } from '@/lib/utils/validate';
import { userInputSchema } from '@/lib/validation/input.schema.js';

// Resolve project root safely
// const DATA_DIR = path.join(process.cwd(), 'src', 'app', 'data', 'debug');
// const INPUT_FILE = path.join(DATA_DIR, 'userInput.json');

export async function POST(req) {
  try {
    // 1. Read JSON payload from request
    const input = await req.json();

    // 2. Basic sanity check (minimal validation)
    const validated = validate(userInputSchema, input);

    if (!validated.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: validated.errors,
        },
        { status: 400 },
      );
    }

    const validatedInput = validated.data;

    // if (!input || typeof input !== 'object') {
    //   return NextResponse.json(
    //     { error: 'Invalid input payload' },
    //     { status: 400 },
    //   );
    // }

    // // 3. Ensure debug directory exists
    // await fs.mkdir(DATA_DIR, { recursive: true });

    // // 4. Write input to JSON file (DEBUG ONLY)
    // await fs.writeFile(INPUT_FILE, JSON.stringify(input, null, 2), 'utf-8');

    // 4. Real result from calculations - uncomment after writing calculation part
    console.log('[API] Starting bolt analysis with input:', validatedInput);
    const result = await boltAnalysis(validatedInput);
    console.log('[API] Bolt analysis completed successfully');
    return NextResponse.json(result);

    // // 5. Respond back to frontend
    // return NextResponse.json({
    //   message: 'Input received and stored for debugging',
    //   input,
    // });
  } catch (error) {
    // 6. Fail safely
    console.error('[API] Error in calculate route:', error);
    console.error('[API] Error stack:', error.stack);
    console.error('[API] Error message:', error.message);
    return NextResponse.json(
      { error: 'Failed to process this request', details: error.message },
      { status: 500 },
    );
  }
}
