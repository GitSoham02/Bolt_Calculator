import { NextResponse } from 'next/server';
import { generatePDF } from '@/core/pdf_generation/pdfMaker';

export async function POST(req) {
  console.log('[PDF API] Received PDF generation request');
  
  try {
    // Parse request body
    const input = await req.json();
    console.log('[PDF API] Request data received:', {
      hasCurBolt: !!input?.curBolt,
      hasCurBoltProperty: !!input?.curBoltProperty,
      hasUserData: !!input?.userData,
    });

    // Validate input
    if (!input || typeof input !== 'object') {
      console.error('[PDF API] Invalid input payload');
      return NextResponse.json(
        { error: 'Invalid input payload' },
        { status: 400 },
      );
    }

    // Generate PDF
    console.log('[PDF API] Calling generatePDF...');
    const pdfBuffer = await generatePDF(input);
    
    if (!pdfBuffer || pdfBuffer.length === 0) {
      throw new Error('PDF generation returned empty buffer');
    }

    console.log('[PDF API] PDF generated successfully, size:', pdfBuffer.length);

    // Return PDF as binary response
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=bolt-report.pdf',
        'Content-Length': pdfBuffer.length.toString(),
      },
    });
    
  } catch (error) {
    console.error('[PDF API] Error generating PDF:', error);
    console.error('[PDF API] Error stack:', error.stack);
    console.error('[PDF API] Error message:', error.message);

    // Return a proper error response (NOT a PDF)
    // This prevents "Failed to load PDF document" error on client
    return NextResponse.json(
      { 
        error: 'Failed to generate PDF report',
        details: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    );
  }
}
