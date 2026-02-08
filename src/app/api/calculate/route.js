import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import boltAnalysis from '@/core/runAnalysis';

// Resolve project root safely
const DATA_DIR = path.join(process.cwd(), 'src', 'app', 'data', 'debug');
const INPUT_FILE = path.join(DATA_DIR, 'userInput.json');

export async function POST(req) {
  try {
    // 1. Read JSON payload from request
    const input = await req.json();

    // 2. Basic sanity check (minimal validation)
    if (!input || typeof input !== 'object') {
      return NextResponse.json(
        { error: 'Invalid input payload' },
        { status: 400 },
      );
    }

    // // 3. Ensure debug directory exists
    // await fs.mkdir(DATA_DIR, { recursive: true });

    // // 4. Write input to JSON file (DEBUG ONLY)
    // await fs.writeFile(INPUT_FILE, JSON.stringify(input, null, 2), 'utf-8');

    // 4. Real result from calculations - uncomment after writing calculation part
    const result = await boltAnalysis(input);
    return NextResponse.json(result);

    // // 5. Respond back to frontend
    // return NextResponse.json({
    //   message: 'Input received and stored for debugging',
    //   input,
    // });
  } catch (error) {
    // 6. Fail safely
    return NextResponse.json(
      { error: 'Failed to process this request' },
      { status: 500 },
    );
  }
}
