import React from 'react';
import { renderToBuffer } from '@react-pdf/renderer';
import PDFDocument from './pdfDocument.jsx';

export async function generatePDF(result) {
  try {
    console.log('[PDF] Starting PDF generation with React PDF...');
    console.log('[PDF] Environment:', process.env.NODE_ENV);

    // Validate input data
    if (!result || typeof result !== 'object') {
      throw new Error('Invalid result data provided to PDF generator');
    }

    // Generate PDF using React PDF
    const pdfBuffer = await renderToBuffer(<PDFDocument data={result} />);

    console.log(
      '[PDF] PDF generated successfully, size:',
      pdfBuffer.length,
      'bytes',
    );
    return pdfBuffer;
  } catch (error) {
    console.error('[PDF] Error during PDF generation:', error);
    console.error('[PDF] Error stack:', error.stack);
    throw new Error(`PDF generation failed: ${error.message}`);
  }
}
