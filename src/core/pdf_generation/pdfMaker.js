import chromium from '@sparticuz/chromium';
import puppeteer from 'puppeteer-core';
import { buildHTMLReport } from './pdfTemplate.js';

export async function generatePDF(result) {
  let browser;
  
  try {
    console.log('[PDF] Starting PDF generation...');
    console.log('[PDF] Environment:', process.env.NODE_ENV);
    console.log('[PDF] Platform:', process.platform);
    
    // Validate input data
    if (!result || typeof result !== 'object') {
      throw new Error('Invalid result data provided to PDF generator');
    }

    // Launch browser with serverless-compatible config
    const executablePath = process.env.NODE_ENV === 'production'
      ? await chromium.executablePath()
      : process.platform === 'win32'
        ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
        : process.platform === 'darwin'
          ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
          : '/usr/bin/chromium-browser';

    console.log('[PDF] Executable path:', executablePath);

    browser = await puppeteer.launch({
      args: process.env.NODE_ENV === 'production'
        ? chromium.args
        : ['--no-sandbox', '--disable-setuid-sandbox'],
      defaultViewport: chromium.defaultViewport,
      executablePath: executablePath,
      headless: chromium.headless || true,
    });

    console.log('[PDF] Browser launched successfully');

    const page = await browser.newPage();
    console.log('[PDF] New page created');

    const html = buildHTMLReport(result);
    console.log('[PDF] HTML report built, length:', html.length);

    await page.setContent(html, { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });
    console.log('[PDF] Content set successfully');

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20px',
        right: '20px',
        bottom: '20px',
        left: '20px',
      },
    });

    console.log('[PDF] PDF generated successfully, size:', pdfBuffer.length, 'bytes');
    return pdfBuffer;
    
  } catch (error) {
    console.error('[PDF] Error during PDF generation:', error);
    console.error('[PDF] Error stack:', error.stack);
    console.error('[PDF] Error details:', {
      message: error.message,
      name: error.name,
      code: error.code,
    });
    throw new Error(`PDF generation failed: ${error.message}`);
  } finally {
    // Ensure browser is always closed
    if (browser) {
      try {
        await browser.close();
        console.log('[PDF] Browser closed successfully');
      } catch (closeError) {
        console.error('[PDF] Error closing browser:', closeError);
      }
    }
  }
}
